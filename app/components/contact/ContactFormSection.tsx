"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childAge: "",
    program: "scratch",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        parentName: "",
        email: "",
        phone: "",
        childAge: "",
        program: "scratch",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Left Column: Info & Map */}
      <div className="lg:col-span-5 space-y-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Contact Information
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium">
            Have questions about fees, timetables, or course details? Get in touch with us directly via phone, email, or WhatsApp.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 dark:bg-accent/15 text-primary dark:text-accent rounded-xl mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-800 dark:text-white text-sm">Our Center</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  Oyarifa, Accra, Ghana
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 text-secondary rounded-xl mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-800 dark:text-white text-sm">Call Center</h4>
                <a href="tel:+233241234567" className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-accent mt-0.5 block">
                  +233 (0) 24 123 4567
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 text-accent rounded-xl mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-800 dark:text-white text-sm">Admissions Email</h4>
                <a href="mailto:info@explorersedge.com" className="text-sm text-slate-500 hover:text-accent dark:text-slate-400 mt-0.5 block">
                  info@explorersedge.academy
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* WhatsApp Button */}
        <div className="pt-2">
          <a
            href="https://wa.me/233241234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 transition-all text-sm cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            Chat With Us On WhatsApp
          </a>
        </div>

        {/* Modern Vector Map Mockup */}
        <div className="relative aspect-[16/10] bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-inner flex flex-col justify-end p-4">
          {/* Mock Grid Lines representing roads */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="50" x2="100%" y2="50" stroke="#000" strokeWidth="2" />
              <line x1="50" y1="0" x2="50" y2="100%" stroke="#000" strokeWidth="2" />
              <circle cx="50" cy="50" r="10" stroke="#000" strokeWidth="2" fill="none" />
              <path d="M 0 0 C 50 100, 100 50, 200 200" fill="none" stroke="#000" strokeWidth="4" />
            </svg>
          </div>
          {/* Location marker */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute w-8 h-8 bg-primary/30 rounded-full animate-ping" />
              <div className="w-4 h-4 bg-primary dark:bg-accent rounded-full border-2 border-white dark:border-zinc-800 shadow" />
            </div>
            <span className="px-2 py-0.5 bg-primary dark:bg-zinc-800 text-[10px] text-white font-extrabold rounded-md shadow border border-white/10 whitespace-nowrap">
              Explorers' Edge
            </span>
          </div>
          <span className="relative z-10 text-[10px] font-bold text-slate-400 tracking-wider uppercase">
            Location Map (Oyarifa, Accra, Ghana)
          </span>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-850 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-100/30 dark:shadow-none transition-colors duration-300">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 space-y-6 flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Enrollment Inquiry Submitted!</h3>
              <p className="text-sm text-slate-550 dark:text-slate-400 max-w-md mx-auto">
                Thank you for contacting Explorers' Edge Academy. Our admissions officer will review your course preference and call you back shortly.
              </p>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl text-sm hover:bg-primary-hover transition-colors cursor-pointer"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Enrollment & General Inquiry
            </h3>

            <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-550/20 text-slate-700 dark:text-slate-300 text-xs font-semibold leading-relaxed">
              <span className="text-[#FF8C42] font-extrabold block mb-1">🚀 Academy Launch Underway</span>
              Cohort classes have not officially started yet. To secure early cohort seats, preferred schedules, and early bird discounts, please pre-register on our <Link href="/wishlist" className="text-primary dark:text-accent hover:underline font-extrabold">Launch Wishlist</Link> instead.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Parent Name */}
              <div className="space-y-2">
                <label htmlFor="parentName" className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  Parent / Guardian Name
                </label>
                <input
                  type="text"
                  name="parentName"
                  id="parentName"
                  required
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="e.g. Mrs. Sarah Mensah"
                  className="w-full bg-slate-50 dark:bg-zinc-800 text-slate-900 dark:text-white px-4 py-3.5 rounded-xl border border-slate-100 dark:border-zinc-700/60 focus:outline-none focus:ring-1 focus:ring-accent text-sm"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. sarah.mensah@mail.com"
                  className="w-full bg-slate-50 dark:bg-zinc-800 text-slate-900 dark:text-white px-4 py-3.5 rounded-xl border border-slate-100 dark:border-zinc-700/60 focus:outline-none focus:ring-1 focus:ring-accent text-sm"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +233 24 123 4567"
                  className="w-full bg-slate-50 dark:bg-zinc-800 text-slate-900 dark:text-white px-4 py-3.5 rounded-xl border border-slate-100 dark:border-zinc-700/60 focus:outline-none focus:ring-1 focus:ring-accent text-sm"
                />
              </div>

              {/* Child Age */}
              <div className="space-y-2">
                <label htmlFor="childAge" className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  Child's Age
                </label>
                <input
                  type="number"
                  name="childAge"
                  id="childAge"
                  required
                  min={5}
                  max={17}
                  value={formData.childAge}
                  onChange={handleChange}
                  placeholder="e.g. 11"
                  className="w-full bg-slate-50 dark:bg-zinc-800 text-slate-900 dark:text-white px-4 py-3.5 rounded-xl border border-slate-100 dark:border-zinc-700/60 focus:outline-none focus:ring-1 focus:ring-accent text-sm"
                />
              </div>
            </div>

            {/* Program selection */}
            <div className="space-y-2">
              <label htmlFor="program" className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Target Program
              </label>
              <select
                name="program"
                id="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full bg-slate-50 dark:bg-zinc-800 text-slate-900 dark:text-white px-4 py-3.5 rounded-xl border border-slate-100 dark:border-zinc-700/60 focus:outline-none focus:ring-1 focus:ring-accent text-sm appearance-none cursor-pointer"
              >
                <option value="skills-foundation">Digital Skills Foundation</option>
                <option value="scratch">Scratch Programming</option>
                <option value="web-dev">Web Development</option>
                <option value="programming">Core Programming (Python/JS)</option>
                <option value="ai">Artificial Intelligence Fundamentals</option>
                <option value="creativity">Digital Creativity & Design</option>
                <option value="other">General Inquiries</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Your Message / Special Requests
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Let us know about your child's coding experience, preferred days of the week, or general questions..."
                className="w-full bg-slate-50 dark:bg-zinc-800 text-slate-900 dark:text-white px-4 py-3.5 rounded-xl border border-slate-100 dark:border-zinc-700/60 focus:outline-none focus:ring-1 focus:ring-accent text-sm resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white font-bold rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 flex items-center justify-center gap-2 transition-all cursor-pointer text-sm"
            >
              {isSubmitting ? (
                <span>Submitting Details...</span>
              ) : (
                <>
                  <span>Send Enrollment Inquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
