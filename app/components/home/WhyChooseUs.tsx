"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Laptop, Cpu, Brain, Briefcase, Lightbulb, Rocket, CheckCircle2 } from "lucide-react";
import HoverWord from "@/app/components/interactive/HoverWord";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Hands-on Learning",
      description: "We focus on active participation. Students write actual code, wire components, and configure software from day one.",
      Icon: Laptop,
      color: "text-primary bg-primary/10 border-primary/20",
    },
    {
      title: "Project-Based Education",
      description: "Students build real-world portfolios: from fully functional games to interactive websites and AI chatbots.",
      Icon: Cpu,
      color: "text-secondary bg-secondary/10 border-secondary/20",
    },
    {
      title: "AI & Emerging Technologies",
      description: "Our syllabus covers AI models, prompt engineering, and modern developer tools, giving kids a futuristic edge.",
      Icon: Brain,
      color: "text-accent bg-accent/10 border-accent/20",
    },
    {
      title: "Industry-Relevant Skills",
      description: "We teach standard coding languages (Python, JS) and industry-proven practices that pave pathways to success.",
      Icon: Briefcase,
      color: "text-primary bg-primary/10 border-primary/20",
    },
    {
      title: "Creative Problem Solving",
      description: "Coding is creativity. We teach students how to approach complex logical bottlenecks with confidence and ingenuity.",
      Icon: Lightbulb,
      color: "text-secondary bg-secondary/10 border-secondary/20",
    },
    {
      title: "Innovation-Focused Learning",
      description: "We nurture the builder mindset, encouraging children to ask 'What if?' and brainstorm solutions to local problems.",
      Icon: Rocket,
      color: "text-accent bg-accent/10 border-accent/20",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -2 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { 
        type: "spring" as const,
        stiffness: 80,
        damping: 10,
        duration: 0.6
      },
    },
  };

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 bg-slate-50 dark:bg-zinc-900/40 border-y border-slate-100 dark:border-zinc-900 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent border border-primary/10 dark:border-accent/20">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Our Core Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            <HoverWord text="Designed to Cultivate the Builders of Tomorrow" />
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium">
            We go beyond standard textbook lessons. Our methodology combines professional workflows with engaging interactive content to maximize learning impact.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => {
            const Icon = feature.Icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-zinc-800 shadow-md shadow-slate-100/40 dark:shadow-none hover:shadow-xl hover:shadow-primary/5 hover:border-primary/10 dark:hover:border-zinc-700 hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-2xl border mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-450 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
