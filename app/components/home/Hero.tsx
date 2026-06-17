"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import HoverWord from "@/app/components/interactive/HoverWord";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-gradient-to-b from-blue-50/20 via-white to-transparent dark:from-zinc-950/25 dark:to-transparent">
      {/* Decorative background orbs */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-72 h-72 rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute top-1/3 right-0 translate-x-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-secondary/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col text-center lg:text-left space-y-6"
          >
            {/* Animated Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent border border-primary/20 dark:border-accent/30 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
                Empowering Minds, Shaping Futures
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              <HoverWord text="Empowering the Next Generation of" />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                <HoverWord text="Digital Innovators" />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-650 dark:text-slate-350 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Helping young minds develop digital skills, creativity, innovation, and future-ready technology competencies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/wishlist"
                className="w-full sm:w-auto px-8 py-4 text-base animate-bounce font-bold bg-primary hover:bg-primary-hover text-white rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Join Wishlist
                <ArrowRight className="w-5 h-5 animate-pulseh" />
              </Link>
              <Link
                href="/schools"
                className="w-full sm:w-auto px-8 py-4 text-base font-bold bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800/80 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Partner With Us
              </Link>
            </div>

            {/* Value Props */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 pt-6 border-t border-slate-100 dark:border-zinc-850/60 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-accent" />
                Ages 5 - 17 Welcomed
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-accent" />
                Project-Based Learning
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-accent" />
                Certificate Programs
              </div>
            </div>
          </motion.div>

          {/* Right Column: Illustration/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center w-full max-w-lg lg:max-w-none mx-auto"
          >
            {/* Visual Frame wrapper */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 bg-slate-100 dark:bg-zinc-900 group">
              <Image
                src="/images/hero_tech.png"
                alt="Children coding and exploring robotics"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-103"
              />
              {/* Overlay styling for extra premium feel */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
            </div>

            {/* Overlay floaters to enhance visual look */}
            <div className="absolute -top-6 -right-6 p-4 bg-white dark:bg-zinc-800 rounded-2xl shadow-xl animate-float flex items-center gap-3 border border-slate-50 dark:border-zinc-700/50 hidden sm:flex">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                <span className="font-bold text-sm">AI</span>
              </div>
              <div className="flex flex-col animate-pulse">
                <span className="text-xs font-extrabold text-slate-800 dark:text-white leading-tight">AI & Tech</span>
                <span className="text-[10px] font-semibold text-slate-400">Emerging Skills</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 p-4 bg-white dark:bg-zinc-800 animate-float rounded-2xl shadow-xl flex items-center gap-3 border border-slate-50 dark:border-zinc-700/50 hidden sm:flex">
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
                <span className="font-bold text-sm">&lt;/&gt;</span>
              </div>
              <div className="flex flex-col animate-pulse">
                <span className="text-xs font-extrabold text-slate-800 dark:text-white leading-tight">Coding Lab</span>
                <span className="text-[10px] font-semibold text-slate-400">Interactive Lessons</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
