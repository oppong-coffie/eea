"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Gamepad2, Globe, FileCode2, Brain, PenTool, CheckCircle2, ArrowRight } from "lucide-react";

interface Program {
  id: string;
  category: "foundation" | "coding" | "advanced";
  title: string;
  ageGroup: string;
  description: string;
  outcomes: string[];
  Icon: React.ComponentType<{ className?: string }>;
  color: string;
  iconBg: string;
}

export default function ProgramList() {
  const [activeFilter, setActiveFilter] = useState<"all" | "foundation" | "coding" | "advanced">("all");

  const programs: Program[] = [
    {
      id: "skills-foundation",
      category: "foundation",
      title: "Digital Skills Foundation",
      ageGroup: "Ages 5 - 9",
      description: "Introduce young minds to computing essentials, preparing them to navigate the digital world safely and productively.",
      outcomes: [
        "Computer Literacy & OS Basics",
        "Essential Internet Safety & Etiquette",
        "Digital Productivity Tools (Docs, Slides)",
      ],
      Icon: Laptop,
      color: "text-primary border-primary/25 hover:border-primary/50",
      iconBg: "bg-primary/10 text-primary",
    },
    {
      id: "scratch",
      category: "coding",
      title: "Scratch Programming",
      ageGroup: "Ages 7 - 11",
      description: "Master computational logic using visual blocks. Students build games and interactive projects without syntax complexity.",
      outcomes: [
        "Interactive Game Design & Physics",
        "Complex Storytelling & Animations",
        "Foundational Logic (Loops, Conditionals)",
      ],
      Icon: Gamepad2,
      color: "text-secondary border-secondary/25 hover:border-secondary/50",
      iconBg: "bg-secondary/10 text-secondary",
    },
    {
      id: "web-dev",
      category: "coding",
      title: "Web Development",
      ageGroup: "Ages 10 - 15",
      description: "Build clean and responsive websites using modern industry tools. Develop structures, styles, and responsive behaviors.",
      outcomes: [
        "Semantic HTML5 Documents",
        "Modern CSS3 Layouts & Flexbox",
        "Responsive Mobile-First Design Practice",
      ],
      Icon: Globe,
      color: "text-accent border-accent/25 hover:border-accent/50",
      iconBg: "bg-accent/10 text-accent",
    },
    {
      id: "programming",
      category: "coding",
      title: "Core Programming",
      ageGroup: "Ages 12 - 17",
      description: "Dive deep into text-based programming languages. Students master syntax and algorithms to solve advanced challenges.",
      outcomes: [
        "JavaScript for Dynamic Web Apps",
        "Python Syntax & Data Structures",
        "Algorithmic Thinking & Automation Scripts",
      ],
      Icon: FileCode2,
      color: "text-primary border-primary/25 hover:border-primary/50",
      iconBg: "bg-primary/10 text-primary",
    },
    {
      id: "ai",
      category: "advanced",
      title: "Artificial Intelligence",
      ageGroup: "Ages 11 - 17",
      description: "De-mystify AI technologies. Students learn how models are trained and how to use modern generative tools responsibly.",
      outcomes: [
        "Machine Learning Fundamentals",
        "Advanced Prompt Engineering Techniques",
        "Building Chatbots & Custom AI Tools",
      ],
      Icon: Brain,
      color: "text-secondary border-secondary/25 hover:border-secondary/50",
      iconBg: "bg-secondary/10 text-secondary",
    },
    {
      id: "creativity",
      category: "foundation",
      title: "Digital Creativity",
      ageGroup: "Ages 9 - 15",
      description: "Express creative vision through visual and media design. Gain tools to present ideas professionally.",
      outcomes: [
        "Graphic Design & Visual Composition",
        "Interactive Presentations & Pitching",
        "Digital Content Creation (Video & Audio)",
      ],
      Icon: PenTool,
      color: "text-accent border-accent/25 hover:border-accent/50",
      iconBg: "bg-accent/10 text-accent",
    },
  ];

  const filteredPrograms =
    activeFilter === "all" ? programs : programs.filter((p) => p.category === activeFilter);

  const filters = [
    { key: "all", label: "All Programs" },
    { key: "foundation", label: "Foundation" },
    { key: "coding", label: "Coding & Logic" },
    { key: "advanced", label: "Advanced Tech" },
  ] as const;

  return (
    <div className="space-y-12">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all cursor-pointer ${
              activeFilter === filter.key
                ? "bg-primary text-white shadow-lg shadow-primary/20 dark:bg-accent dark:text-zinc-950 dark:shadow-accent/15"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-305"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Program Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredPrograms.map((program) => {
            const IconComponent = program.Icon;
            return (
              <motion.div
                key={program.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`group flex flex-col justify-between p-8 bg-white dark:bg-zinc-900 rounded-3xl border ${program.color} shadow-lg shadow-slate-100/40 dark:shadow-none transition-all duration-350 hover:-translate-y-1.5`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <div className={`p-3 rounded-2xl ${program.iconBg} group-hover:scale-105 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 text-xs font-bold bg-slate-100 text-slate-750 dark:bg-zinc-800 dark:text-zinc-300 rounded-lg">
                      {program.ageGroup}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-250">
                    {program.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-6">
                    {program.description}
                  </p>

                  {/* Outcomes Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block">
                      Learning Outcomes:
                    </span>
                    {program.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-650 dark:text-slate-350 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enroll CTA */}
                <Link
                  href="/wishlist"
                  className="w-full py-3 bg-slate-50 group-hover:bg-primary dark:bg-zinc-800 dark:group-hover:bg-accent text-slate-805 dark:text-zinc-200 dark:group-hover:text-zinc-950 text-center font-bold text-sm rounded-2xl border border-slate-100 dark:border-zinc-750 flex items-center justify-center gap-2 transition-all duration-300"
                >
                  Join Program Wishlist
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
