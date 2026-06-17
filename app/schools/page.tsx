import type { Metadata } from "next";
import PartnershipOfferings from "@/app/components/schools/PartnershipOfferings";
import SchoolsForm from "@/app/components/schools/SchoolsForm";
import { School } from "lucide-react";
import HoverWord from "@/app/components/interactive/HoverWord";
import AnimateOnScroll from "@/app/components/interactive/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Schools Partnership | Explorers' Edge Academy",
  description: "Bring modern STEM curricula, coding classes, robotics clubs, and ICT consultations to your school. Partner with Explorers' Edge Academy.",
};

export default function SchoolsPage() {
  return (
    <div className="flex-grow flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden isolate py-20 lg:py-28 border-b border-zinc-900 bg-black">
        {/* Glowing and color changing mesh blobs */}
        {/* <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full blur-[100px] opacity-25 dark:opacity-20 animate-glow-slow -z-30" /> */}
        {/* <div className="absolute top-1/3 right-1/4 -translate-y-1/2 translate-x-1/2 w-[350px] h-[350px] rounded-full blur-[100px] opacity-25 dark:opacity-20 animate-glow-fast -z-30" /> */}

        {/* Background Slideshow Images */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100 animate-fade-slideshow -z-20"
          style={{
            backgroundImage: "url('/images/gallery_presentation.png')",
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100 animate-fade-slideshow -z-20"
          style={{
            backgroundImage: "url('/images/hero_tech.png')",
            animationDelay: "5s",
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100 animate-fade-slideshow -z-20"
          style={{
            backgroundImage: "url('/images/gallery_challenge.png')",
            animationDelay: "10s",
          }}
        />

        {/* Overlay to ensure perfect contrast and blending (black bg with opacity that covers the images) */}
        {/* <div className="absolute inset-0 bg-black/0 -z-10" /> */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center max-w-3xl space-y-4">
          <AnimateOnScroll type="bounce" delay={0.2}>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent border border-accent/30 mx-auto">
              <School className="w-3.5 h-3.5" />
              School Partnerships
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll type="zoom" delay={0.4}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              <HoverWord text="Empower Your School With Technology" />
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll type="fade" delay={0.6}>
            <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
              Bring cutting-edge digital curricula, hardware recommendations, and specialized facilitators directly to your classrooms.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-16 lg:py-24 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Offerings and Benefits Component */}
          <AnimateOnScroll type="slide-up" delay={0.2}>
            <PartnershipOfferings />
          </AnimateOnScroll>

          {/* Submission Inquiry Form Component */}
          <AnimateOnScroll type="zoom" delay={0.3}>
            <SchoolsForm />
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
