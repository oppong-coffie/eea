'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Calendar, BookOpen, User, Mail, Phone, CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import AnimateOnScroll from '@/app/components/interactive/AnimateOnScroll'
import HoverWord from '@/app/components/interactive/HoverWord'

export default function WishlistPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    courses: [] as string[],
    notes: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [submissionsCount, setSubmissionsCount] = useState(128)

  useEffect(() => {
    // Generate a random number of submissions for social proof
    const count = localStorage.getItem('wishlist_count')
    if (count) {
      setSubmissionsCount(parseInt(count))
    } else {
      const randomBase = Math.floor(Math.random() * 40) + 120
      localStorage.setItem('wishlist_count', randomBase.toString())
      setSubmissionsCount(randomBase)
    }
  }, [])

  const courseOptions = [
    "Scratch Coding (Ages 5-9)",
    "Python Programming (Ages 10-17)",
    "Web Development (Ages 10-17)",
    "AI & Prompt Engineering (Ages 8-17)",
    "Robotics & Hardware (Ages 8-17)",
    "Digital Arts & Creative Media (Ages 6-15)"
  ]

  const handleCheckboxChange = (course: string) => {
    setFormData(prev => {
      const alreadySelected = prev.courses.includes(course)
      return {
        ...prev,
        courses: alreadySelected 
          ? prev.courses.filter(c => c !== course)
          : [...prev.courses, course]
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('wishlist_submissions') || '[]')
    existing.push({ ...formData, id: Date.now(), date: new Date().toISOString() })
    localStorage.setItem('wishlist_submissions', JSON.stringify(existing))

    // Increment counter
    const newCount = submissionsCount + 1
    localStorage.setItem('wishlist_count', newCount.toString())
    setSubmissionsCount(newCount)

    setSubmitted(true)
  }

  return (
    <div className="flex-grow bg-[#090d16] text-[#f8fafc] py-20 relative overflow-hidden font-sans">
      {/* Background glowing decorations */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-[#0F4C81] opacity-20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-[#FF8C42] opacity-10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <Link 
          href="/home" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm font-semibold group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="wishlist-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="text-center mb-12 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-[#FF8C42]/15 text-[#FF8C42] border border-[#FF8C42]/30">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  Launch Wishlist Open
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  <HoverWord text="Join the Launch Wishlist" />
                </h1>
                <p className="text-slate-350 text-base max-w-xl mx-auto font-medium">
                  We are finalizing our state-of-the-art learning hubs! Join <span className="text-[#00A8A8] font-bold">{submissionsCount} parents</span> who have pre-registered to secure early access discounts and preferred schedules.
                </p>
              </div>

              {/* Form Card */}
              <div className="bg-[#131926]/95 border border-slate-800 shadow-2xl p-8 sm:p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0F4C81] via-[#00A8A8] to-[#FF8C42]" />

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Parent Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300 flex items-center gap-2">
                      <User className="w-4 h-4 text-[#00A8A8]" />
                      Parent's Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={e => setFormData(prev => ({ ...prev, parentName: e.target.value }))}
                      className="w-full bg-[#090d16] border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#00A8A8] focus:ring-1 focus:ring-[#00A8A8] transition-all text-sm font-semibold"
                      placeholder="e.g. Chinedu Okafor"
                    />
                  </div>

                  {/* Contact Info Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-300 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-[#00A8A8]" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-[#090d16] border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#00A8A8] focus:ring-1 focus:ring-[#00A8A8] transition-all text-sm font-semibold"
                        placeholder="e.g. name@domain.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-300 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#00A8A8]" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full bg-[#090d16] border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#00A8A8] focus:ring-1 focus:ring-[#00A8A8] transition-all text-sm font-semibold"
                        placeholder="e.g. +234 801 234 5678"
                      />
                    </div>
                  </div>

                  {/* Child Info Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-300 flex items-center gap-2">
                        <User className="w-4 h-4 text-[#FF8C42]" />
                        Child's Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.childName}
                        onChange={e => setFormData(prev => ({ ...prev, childName: e.target.value }))}
                        className="w-full bg-[#090d16] border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#FF8C42] focus:ring-1 focus:ring-[#FF8C42] transition-all text-sm font-semibold"
                        placeholder="e.g. Tobi"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-300 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#FF8C42]" />
                        Child's Age
                      </label>
                      <input
                        type="number"
                        min="5"
                        max="18"
                        required
                        value={formData.childAge}
                        onChange={e => setFormData(prev => ({ ...prev, childAge: e.target.value }))}
                        className="w-full bg-[#090d16] border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#FF8C42] focus:ring-1 focus:ring-[#FF8C42] transition-all text-sm font-semibold"
                        placeholder="e.g. 10"
                      />
                    </div>
                  </div>

                  {/* Course Checklist */}
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-300 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#00A8A8]" />
                      Select Course(s) of Interest
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {courseOptions.map((course, i) => {
                        const isChecked = formData.courses.includes(course)
                        return (
                          <div
                            key={i}
                            onClick={() => handleCheckboxChange(course)}
                            className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-center gap-3 select-none text-xs font-semibold ${
                              isChecked
                                ? "bg-[#00A8A8]/10 border-[#00A8A8] text-white"
                                : "bg-[#090d16] border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            <div className={`w-4 h-4 rounded flex items-center justify-center border transition-all ${
                              isChecked 
                                ? "bg-[#00A8A8] border-[#00A8A8] text-slate-950" 
                                : "border-slate-700"
                            }`}>
                              {isChecked && (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                              )}
                            </div>
                            {course}
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Additional notes */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300">
                      Additional Notes / Custom Scheduling Preferences
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={e => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                      rows={3}
                      className="w-full bg-[#090d16] border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#00A8A8] focus:ring-1 focus:ring-[#00A8A8] transition-all text-sm font-semibold resize-none"
                      placeholder="e.g. Prefers Saturday mornings, child has basic Scratch background..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#FF8C42] hover:bg-[#e0742f] text-white font-extrabold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-sm"
                  >
                    Submit Wishlist Pre-Registration
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="wishlist-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 12 }}
              className="text-center py-12"
            >
              <div className="bg-[#131926]/95 border border-slate-800 shadow-2xl p-8 sm:p-12 rounded-3xl relative overflow-hidden max-w-lg mx-auto">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#00A8A8]" />
                
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-[#00A8A8]/10 text-[#00A8A8] rounded-full border border-[#00A8A8]/20 animate-bounce">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                </div>

                <h2 className="text-3xl font-extrabold text-white mb-3">
                  You're on the Wishlist!
                </h2>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed font-semibold">
                  Thank you, <span className="text-white font-bold">{formData.parentName}</span>. We've added <span className="text-[#FF8C42] font-bold">{formData.childName}</span> to the launch queue. A launch coordinator will contact you at <span className="text-white font-bold">{formData.email}</span> with early cohort schedules and custom discount codes prior to launch.
                </p>

                <div className="flex flex-col gap-3">
                  <Link
                    href="/programs"
                    className="px-6 py-3 rounded-xl bg-[#00A8A8] hover:bg-[#008f8f] text-white font-bold shadow-lg shadow-teal-500/20 transition-all duration-200 cursor-pointer text-sm"
                  >
                    Browse Core Syllabus
                  </Link>
                  <Link
                    href="/home"
                    className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold border border-slate-750 transition-all duration-200 text-sm"
                  >
                    Return to Homepage
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
