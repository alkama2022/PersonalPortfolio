import { Link } from "@tanstack/react-router";
import { personalInfo } from "@/lib/data";
import { TypingEffect } from "@/components/typing-effect";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary)/8%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--color-ember)/5%,transparent_40%)]" />
      </div>

      <div className="container-tight grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-ember/20 blur-2xl" />
            <div className="relative aspect-square w-72 overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl md:w-80 lg:w-96">
              <img
                src="/images/profile.jpg"
                alt={`${personalInfo.name} professional portrait`}
                className="h-full w-full object-cover"
                loading="eager"
                width={384}
                height={384}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-lg border border-border bg-background p-3 shadow-lg md:p-4">
              <div className="font-heading text-2xl font-bold text-foreground">2+</div>
              <div className="text-xs text-muted-foreground">Years Experience</div>
            </div>
            <div className="absolute -right-4 top-8 rounded-lg border border-border bg-background p-3 shadow-lg md:p-4">
              <div className="font-heading text-2xl font-bold text-foreground">15+</div>
              <div className="text-xs text-muted-foreground">Projects</div>
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
