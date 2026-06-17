"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus, ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQAccordionItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border border-slate-100 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 transition-colors duration-300">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-bold text-slate-800 dark:text-white hover:text-primary dark:hover:text-accent transition-colors duration-250 cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg">{question}</span>
        <span className={`p-1.5 rounded-lg bg-slate-50 dark:bg-zinc-800 text-slate-500 dark:text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium border-t border-slate-50/50 dark:border-zinc-850/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What age groups or classes do you cater to?",
      answer: "We offer programs for children and teenagers aged 5 to 17 years old. The curriculum is divided into three tiers: Explorers (Ages 5-8, foundational digital skills and visual coding), Innovators (Ages 9-12, web development, robotics, and basic game programming), and Creators (Ages 13-17, advanced programming, AI, and digital creativity).",
    },
    {
      question: "How long are the programs and what is the schedule?",
      answer: "We offer three flexible training tracks: After-School Programs (twice weekly, 1.5 hours per session), Saturday Technology Clubs (weekly, 3 hours per session, running for 10-12 weeks per term), and Vacation Technology Bootcamps (intensive daily sessions during school holidays, lasting 2 to 4 weeks).",
    },
    {
      question: "What equipment does my child need to participate?",
      answer: "For in-person programs at our center or partner schools, we provide all required computing devices, software access, and robotics hardware. For virtual or remote learning programs, your child will need a functional laptop (Windows or macOS) with a working webcam, stable internet access, and a modern web browser.",
    },
    {
      question: "Do students receive certificates upon completion?",
      answer: "Yes, absolutely. Students receive a Certificate of Competency upon successfully completing any program track. This certificate lists the projects built, language skills gained, and key concepts mastered, adding a valuable milestone to their educational portfolio.",
    },
    {
      question: "How can my school partner with the academy?",
      answer: "Schools can partner with us for After-School programs, Saturday clubs, or vacation bootcamps hosted on school premises. We also consult on ICT Room design, supply technology infrastructure, train school teachers, and deliver curriculum modules. Reach out via our Schools Partnership page or the Contact form to schedule a consultation.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-zinc-900/40 border-t border-slate-100 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent border border-primary/10 dark:border-accent/20">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Have Questions? We Have Answers
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium">
            Explore answers to common questions about admissions, classes, hardware, and school partnerships.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQAccordionItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
