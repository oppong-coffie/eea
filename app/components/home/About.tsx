"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Compass, Award } from "lucide-react";
import HoverWord from "@/app/components/interactive/HoverWord";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -70, scale: 0.9, rotate: -2 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1, 
      rotate: 0, 
      transition: { type: "spring" as const, stiffness: 50, damping: 11, duration: 0.8 } 
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 70, scale: 0.9, rotate: 2 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1, 
      rotate: 0, 
      transition: { type: "spring" as const, stiffness: 50, damping: 11, duration: 0.8 } 
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 lg:py-28 bg-white dark:bg-zinc-950 transition-colors duration-300 relative scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Side: Who We Are / Narrative */}
          <motion.div variants={leftVariants} className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-primary dark:text-accent font-bold uppercase tracking-wider text-xs">
              <Compass className="w-4 h-4 animate-spin-slow text-secondary" />
              About Our Academy
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              <HoverWord text="Inspiring Young Innovators to" />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                <HoverWord text="Explore & Excel" />
              </span>
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-350 leading-relaxed font-medium">
              <p>
                At <strong>Explorers' Edge Academy</strong>, we believe every child has the potential to become a technology creator, not just a consumer. Our courses are built to translate complex computer science principles into exciting, hands-on activities that cultivate critical thinking.
              </p>
              <p>
                Whether coding a game, exploring the wonders of Artificial Intelligence, or designing their first responsive website, our students learn by doing. We prepare kids and teenagers with the logic, resilience, and creative confidence required to navigate and shape the digital frontier.
              </p>
            </div>
            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 flex items-start gap-3">
                <Award className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-slate-800 dark:text-white text-sm">Certified Tech Curriculum</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Built on international STEM guidelines.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 flex items-start gap-3">
                <Award className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-slate-800 dark:text-white text-sm">Experienced Mentors</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Real engineers and creative designers.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Mission & Vision Cards */}
          <motion.div variants={rightVariants} className="lg:col-span-6 space-y-6">
            {/* Mission Card */}
            <div className="group p-8 bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-900/40 rounded-3xl border border-slate-100 dark:border-zinc-850 hover:shadow-xl hover:shadow-secondary/5 hover:border-secondary/20 transition-all duration-300 relative overflow-hidden">
              {/* Background gradient decorative element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors" />

              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary/10 text-secondary rounded-2xl group-hover:scale-105 transition-transform duration-300">
                  <Target className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-350 leading-relaxed font-medium">
                To empower young learners with digital skills, creativity, innovation, and emerging technology competencies. We provide structured, fun, and project-based curricula that make tech learning accessible and rewarding.
              </p>
            </div>

            {/* Vision Card */}
            <div className="group p-8 bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-900/40 rounded-3xl border border-slate-100 dark:border-zinc-850 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20 transition-all duration-300 relative overflow-hidden">
              {/* Background gradient decorative element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />

              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/10 text-accent rounded-2xl group-hover:scale-105 transition-transform duration-300">
                  <Eye className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-350 leading-relaxed font-medium">
                To become a leading center for digital skills and technology education for young innovators. We aim to inspire a generation of builders, thinkers, and ethical leaders who will solve local and global challenges through technology.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
