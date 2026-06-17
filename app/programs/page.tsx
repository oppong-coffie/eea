import type { Metadata } from "next";
import ProgramList from "@/app/components/programs/ProgramList";
import { BookOpen } from "lucide-react";
import HoverWord from "@/app/components/interactive/HoverWord";
import AnimateOnScroll from "@/app/components/interactive/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Programs & Courses | Explorers' Edge Academy",
  description: "Explore our future-focused curriculum: Scratch programming, web development, Python coding, AI fundamentals, and digital creativity for children and teenagers.",
};

export default function ProgramsPage() {
  return (
    <div className="flex-grow flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden isolate py-20 lg:py-28 border-b border-zinc-900 bg-black">
        {/* Glowing and color changing mesh blobs */}
        {/* <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full blur-[100px] opacity-25 dark:opacity-20 animate-glow-slow -z-30" /> */}
        {/* <div className="absolute top-1/3 right-1/4 -translate-y-1/2 translate-x-1/2 w-[350px] h-[350px] rounded-full blur-[100px] opacity-25 dark:opacity-20 animate-glow-fast -z-30" /> */}

        {/* Fainted Background Slideshow Images */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 animate-fade-slideshow mix-blend-overlay dark:mix-blend-luminosity -z-20"
          style={{
            backgroundImage: "url('/images/gallery_coding.png')",
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 animate-fade-slideshow mix-blend-overlay dark:mix-blend-luminosity -z-20"
          style={{
            backgroundImage: "url('/images/gallery_robotics.png')",
            animationDelay: "5s",
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 animate-fade-slideshow mix-blend-overlay dark:mix-blend-luminosity -z-20"
          style={{
            backgroundImage: "url('/images/hero_tech.png')",
            animationDelay: "10s",
          }}
        />

        {/* Overlay to ensure perfect contrast and blending (black bg with opacity that covers the images) */}
        {/* <div className="absolute inset-0 bg-black/50 -z-10" /> */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center max-w-3xl space-y-4">
          <AnimateOnScroll type="bounce" delay={0.2}>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent border border-accent/30 mx-auto">
              <BookOpen className="w-3.5 h-3.5" />
              Curriculum Paths
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll type="zoom" delay={0.4}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              <HoverWord text="Academy Programs & Courses" />
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll type="fade" delay={0.6}>
            <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
              Empowering children and teenagers with structured, hands-on digital skills. Select a filter to explore options matching your child's interests and level.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-16 lg:py-24 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Program Cards Grid Component */}
          <ProgramList />
        </div>
      </div>
    </div>
  );
}
