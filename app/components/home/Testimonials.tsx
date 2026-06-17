"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, MessageSquareQuote, Quote } from "lucide-react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      quote: "Explorers' Edge Academy has completely changed how my daughter interacts with technology. Instead of playing games all day, she is now designing her own! The instructors are patient and excellent.",
      name: "Mrs. Sarah Adebayo",
      role: "Parent of 11-year-old Scratch student",
      rating: 5,
      initials: "SA",
      avatarColor: "bg-blue-500",
    },
    {
      quote: "Our partnership with EEA to run after-school tech clubs has been a massive success. The curriculum is highly structured, and our pupils look forward to every Saturday coding session. Fully recommended!",
      name: "Dr. Charles Benson",
      role: "Principal, Pinecrest International School",
      rating: 5,
      initials: "CB",
      avatarColor: "bg-orange-500",
    },
    {
      quote: "I loved building my first responsive website in the Web Development class. Learning HTML, CSS, and Javascript was made so easy with the project-based approach. I am excited to learn Python next!",
      name: "Tobi Alao",
      role: "Student (Age 14, Web Dev Program)",
      rating: 5,
      initials: "TA",
      avatarColor: "bg-teal-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 bg-white dark:bg-zinc-950 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Visual background details */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent border border-primary/10 dark:border-accent/20">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Community Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            What Our Community Says About Us
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium">
            Read stories of transformation and exploration from our proud parents, partner schools, and energetic students.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative p-8 bg-slate-50 dark:bg-zinc-900/60 rounded-3xl border border-slate-100 dark:border-zinc-850 hover:border-primary/10 dark:hover:border-zinc-700/60 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Quote icon watermark */}
              <Quote className="absolute right-6 top-6 w-12 h-12 text-slate-200 dark:text-zinc-800 pointer-events-none opacity-50" />

              <div className="space-y-6">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(test.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-4 h-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-650 dark:text-slate-300 leading-relaxed italic relative z-10 text-[15px] font-medium">
                  "{test.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800">
                <div className={`w-11 h-11 rounded-full ${test.avatarColor} text-white flex items-center justify-center font-bold text-sm shadow-md shadow-black/5`}>
                  {test.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-slate-900 dark:text-white text-sm">
                    {test.name}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-450 dark:text-slate-400">
                    {test.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
