import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

interface CountUpProps {
  value: string | number;
  className?: string;
  duration?: number;
  suffix?: string;
}

export function CountUp({ value, className, duration = 1.2, suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const reduce = useReducedMotion();
  const parsed = useMemo(() => {
    if (typeof value === "number") return { n: value, suffix };
    const match = value.match(/^(\d+)(.*)$/);
    return match ? { n: Number(match[1]), suffix: match[2] } : null;
  }, [value, suffix]);

  const [display, setDisplay] = useState(parsed?.n ?? 0);

  useEffect(() => {
    if (!parsed) return;
    if (reduce) {
      setDisplay(parsed.n);
      return;
    }
    if (!inView) return;
    setDisplay(0);
    const controls = animate(0, parsed.n, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, parsed, reduce, duration]);

  if (!parsed) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {display}
      {parsed.suffix}
    </span>
  );
}
