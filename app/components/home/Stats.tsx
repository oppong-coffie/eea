"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Users, Code, School, BookOpen } from "lucide-react";

interface StatItemProps {
  target: number;
  label: string;
  suffix?: string;
  Icon: React.ComponentType<{ className?: string }>;
}

function StatCounter({ target, label, suffix = "", Icon }: StatItemProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, { duration: 2, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, count, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center p-6 bg-white/5 dark:bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 text-center"
    >
      <div className="p-3 bg-white/10 dark:bg-white/5 text-accent rounded-xl mb-4">
        <Icon className="w-6 h-6 text-white animate-pulse" />
      </div>
      <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <p className="mt-2 text-sm font-semibold text-blue-100 tracking-wide">
        {label}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  const statsData = [
    { target: 2500, label: "Students Trained", suffix: "+", Icon: Users },
    { target: 1200, label: "Projects Completed", suffix: "+", Icon: Code },
    { target: 45, label: "Schools Partnered", suffix: "+", Icon: School },
    { target: 18, label: "Digital Skills Programs", suffix: "", Icon: BookOpen },
  ];

  return (
    <section className="relative py-16 bg-primary dark:bg-zinc-900 border-y border-white/5 shadow-inner overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statsData.map((stat, i) => (
            <StatCounter
              key={i}
              target={stat.target}
              label={stat.label}
              suffix={stat.suffix}
              Icon={stat.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
