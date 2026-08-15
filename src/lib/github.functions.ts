import { createServerFn } from "@tanstack/react-start";
import { personalInfo } from "@/lib/data";

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  totalStars: number;
  topLanguage: string;
  languages: { name: string; value: number }[];
}

export const FALLBACK_GITHUB_STATS: GitHubStats = {
  publicRepos: 15,
  followers: 0,
  totalStars: 0,
  topLanguage: "Python",
  languages: [
    { name: "Python", value: 60 },
    { name: "TypeScript", value: 20 },
    { name: "JavaScript", value: 10 },
    { name: "HTML/CSS", value: 8 },
    { name: "SQL", value: 2 },
  ],
};

let cache: { data: GitHubStats; at: number } | null = null;
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;

function githubUsername() {
  return personalInfo.github.replace(/^https?:\/\/github\.com\//, "").replace(/\/$/, "");
}

export const getGitHubStats = createServerFn({ method: "GET" }).handler(async () => {
  if (cache && Date.now() - cache.at < CACHE_TTL_MS) {
    return cache.data;
  }

  const username = githubUsername();

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers: { Accept: "application/vnd.github+json" },
      }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
        headers: { Accept: "application/vnd.github+json" },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return FALLBACK_GITHUB_STATS;
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    const totalStars = repos.reduce(
      (sum: number, repo: { stargazers_count?: number }) => sum + (repo.stargazers_count ?? 0),
      0,
    );

    const languageCounts: Record<string, number> = {};
    for (const repo of repos) {
      if (typeof repo.language === "string" && repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] ?? 0) + 1;
      }
    }

    const total = Object.values(languageCounts).reduce((a, b) => a + b, 0);
    const languages = Object.entries(languageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([name, count]) => ({ name, value: total ? Math.round((count / total) * 100) : 0 }));

    const data: GitHubStats = {
      publicRepos: user.public_repos ?? FALLBACK_GITHUB_STATS.publicRepos,
      followers: user.followers ?? 0,
      totalStars,
      topLanguage: languages[0]?.name ?? "N/A",
      languages: languages.length ? languages : FALLBACK_GITHUB_STATS.languages,
    };

    console.log("[github-debug] LIVE DATA", JSON.stringify(data));

    cache = { data, at: Date.now() };
    return data;
  } catch (error) {
    console.log("[github-debug] ERROR", String(error));
    return FALLBACK_GITHUB_STATS;
  }
});
