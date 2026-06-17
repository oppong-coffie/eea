"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Building, User, FileText, Send, CheckCircle } from "lucide-react";

export default function SchoolsForm() {
  const [formData, setFormData] = useState({
    schoolName: "",
    repName: "",
    designation: "",
    email: "",
    phone: "",
    interest: "after-school",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        schoolName: "",
        repName: "",
        designation: "",
        email: "",
        phone: "",
        interest: "after-school",
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
    <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-100/30 dark:shadow-none transition-colors duration-300">
      <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Become a Partner School
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
          Ready to empower your students? Send us your details, and our programs director will coordinate a consultation meeting with your school.
        </p>
      </div>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10 space-y-6 flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center">
            <CheckCircle className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Inquiry Received!</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Thank you for reaching out. We have received your partnership inquiry and will contact you via email and phone within the next 24 business hours.
            </p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl text-sm hover:bg-primary-hover transition-colors cursor-pointer"
          >
            Submit Another Inquiry
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* School Name */}
            <div className="space-y-2">
              <label htmlFor="schoolName" className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                School Name
              </label>
              <div className="relative">
                <Building className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  name="schoolName"
                  id="schoolName"
                  required
                  value={formData.schoolName}
                  onChange={handleChange}
                  placeholder="e.g. Pinecrest International School"
                  className="w-full bg-slate-50 dark:bg-zinc-800 text-slate-900 dark:text-white pl-12 pr-4 py-3.5 rounded-xl border border-slate-100 dark:border-zinc-700/60 focus:outline-none focus:ring-1 focus:ring-accent text-sm"
                />
              </div>
            </div>

            {/* Representative Name */}
            <div className="space-y-2">
              <label htmlFor="repName" className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Contact Person
              </label>
              <div className="relative">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  name="repName"
                  id="repName"
                  required
                  value={formData.repName}
                  onChange={handleChange}
                  placeholder="e.g. Dr. Charles Benson"
                  className="w-full bg-slate-50 dark:bg-zinc-800 text-slate-900 dark:text-white pl-12 pr-4 py-3.5 rounded-xl border border-slate-100 dark:border-zinc-700/60 focus:outline-none focus:ring-1 focus:ring-accent text-sm"
                />
              </div>
            </div>

            {/* Designation */}
            <div className="space-y-2">
              <label htmlFor="designation" className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Designation / Role
              </label>
              <div className="relative">
                <FileText className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  name="designation"
                  id="designation"
                  required
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="e.g. Principal, ICT Director"
                  className="w-full bg-slate-50 dark:bg-zinc-800 text-slate-900 dark:text-white pl-12 pr-4 py-3.5 rounded-xl border border-slate-100 dark:border-zinc-700/60 focus:outline-none focus:ring-1 focus:ring-accent text-sm"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                School Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. principal@pinecrest.org"
                  className="w-full bg-slate-50 dark:bg-zinc-800 text-slate-900 dark:text-white pl-12 pr-4 py-3.5 rounded-xl border border-slate-100 dark:border-zinc-700/60 focus:outline-none focus:ring-1 focus:ring-accent text-sm"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +233 24 123 4567"
                  className="w-full bg-slate-50 dark:bg-zinc-800 text-slate-900 dark:text-white pl-12 pr-4 py-3.5 rounded-xl border border-slate-100 dark:border-zinc-700/60 focus:outline-none focus:ring-1 focus:ring-accent text-sm"
                />
              </div>
            </div>

            {/* Program Interest */}
            <div className="space-y-2">
              <label htmlFor="interest" className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Program of Interest
              </label>
              <select
                name="interest"
                id="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full bg-slate-50 dark:bg-zinc-800 text-slate-900 dark:text-white px-4 py-3.5 rounded-xl border border-slate-100 dark:border-zinc-700/60 focus:outline-none focus:ring-1 focus:ring-accent text-sm appearance-none cursor-pointer"
              >
                <option value="after-school">After-School Technology Program</option>
                <option value="saturday-club">Saturday Technology Club</option>
                <option value="vacation-bootcamp">Vacation Tech Bootcamp</option>
                <option value="lab-consultation">ICT Room Design & Consultation</option>
                <option value="teacher-training">Faculty ICT Training</option>
              </select>
            </div>
          </div>

          {/* Message / Details */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
              Additional Details / Inquiry
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please provide details about estimated student count, existing computers/facilities, or target start dates..."
              className="w-full bg-slate-50 dark:bg-zinc-800 text-slate-900 dark:text-white px-4 py-3.5 rounded-xl border border-slate-100 dark:border-zinc-700/60 focus:outline-none focus:ring-1 focus:ring-accent text-sm resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white font-bold rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            {isSubmitting ? (
              <span>Submitting Details...</span>
            ) : (
              <>
                <span>Submit Partnership Request</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
