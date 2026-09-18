import { Link } from "@tanstack/react-router";
import { personalInfo } from "@/lib/data";
import { TypingEffect } from "@/components/typing-effect";
import { CountUp } from "@/components/count-up";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 animate-blob-drift motion-reduce:animate-none bg-[radial-gradient(circle_at_top_right,var(--color-primary)/8%,transparent_40%)]" />
        <div className="absolute inset-0 animate-blob-drift motion-reduce:animate-none bg-[radial-gradient(circle_at_bottom_left,var(--color-ember)/5%,transparent_40%)] [animation-delay:-8s]" />
      </div>

      <div className="container-tight grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <Badge variant="secondary" className="mb-4 text-xs font-medium">
            Available for opportunities
          </Badge>

          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="mt-4 h-8 text-lg font-medium text-foreground md:text-xl">
            <TypingEffect
              texts={[
                "Python Django Backend Developer",
                "C# / .NET Desktop Developer",
                "Information Technology Student",
                "API & Database Enthusiast",
              ]}
            />
          </div>

          <p className="mt-6 max-w-lg text-balance text-base text-muted-foreground md:text-lg">
            {personalInfo.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="min-w-[140px]">
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button variant="outline" size="lg" className="min-w-[140px]" asChild>
              <a href={personalInfo.resumeUrl} download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button variant="outline" size="lg" className="min-w-[140px]" asChild>
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: reduce ? 0 : 0.6,
            delay: reduce ? 0 : 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative flex min-w-0 justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-primary/25 via-primary/15 to-ember/20 blur-2xl" />
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/10 to-ember/10 blur-xl" />
            <div className="relative aspect-square w-72 overflow-hidden rounded-3xl border border-border/60 bg-surface shadow-2xl ring-1 ring-border/50 md:w-80 lg:w-96">
              <picture>
                <source
                  srcSet="/images/profile-pic-400.webp 400w, /images/profile-pic.webp 800w"
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  type="image/webp"
                />
                <img
                  src="/images/profile-pic.png"
                  alt={`${personalInfo.name} professional portrait`}
                  className="h-full w-full min-w-0 object-cover object-[center_18%] scale-[1.02]"
                  loading="eager"
                  decoding="async"
                  width={400}
                  height={400}
                />
              </picture>
              <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),inset_0_-1px_12px_rgba(29,78,216,0.07)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/[0.04] via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-lg border border-border bg-background p-3 shadow-lg md:p-4">
              <div className="font-heading text-2xl font-bold text-foreground">
                <CountUp value={2} suffix="+" />
              </div>
              <div className="text-xs text-muted-foreground">Years Experience</div>
            </div>
            <div className="absolute -right-4 top-8 rounded-lg border border-border bg-background p-3 shadow-lg md:p-4">
              <div className="font-heading text-2xl font-bold text-foreground">
                <CountUp value={15} suffix="+" />
              </div>
              <div className="text-xs text-muted-foreground">GitHub Repos</div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to about section"
        >
          <span>Scroll down</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
