import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ variant = "outline" }: { variant?: "outline" | "ghost" }) {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <Button
      variant={variant}
      size="icon"
      onClick={toggleTheme}
      aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full"
    >
      {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
