'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Calendar, BookOpen, User, Mail, Phone, CheckCircle } from 'lucide-react'

export default function WishlistPopup() {
  const [isOpen, setIsOpen] = useState(false)
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
    // Check if user has already submitted or closed the popup recently
    const hasSubmitted = localStorage.getItem('wishlist_registered') === 'true'
    const hasClosed = localStorage.getItem('wishlist_popup_closed') === 'true'

    if (hasSubmitted || hasClosed) {
      return
    }

    // Set submissions count
    const count = localStorage.getItem('wishlist_count')
    if (count) {
      setSubmissionsCount(parseInt(count))
    } else {
      const randomBase = Math.floor(Math.random() * 40) + 120
      localStorage.setItem('wishlist_count', randomBase.toString())
      setSubmissionsCount(randomBase)
    }

    // 60 seconds delay timer
    const timer = setTimeout(() => {
      setIsOpen(true)
      // Soft disable body scroll while open
      document.body.style.overflow = 'hidden'
    }, 60000)

    return () => {
      clearTimeout(timer)
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

  const handleClose = () => {
    setIsOpen(false)
    document.body.style.overflow = ''
    localStorage.setItem('wishlist_popup_closed', 'true')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Save submission to localStorage
    const existing = JSON.parse(localStorage.getItem('wishlist_submissions') || '[]')
    existing.push({ ...formData, id: Date.now(), date: new Date().toISOString() })
    localStorage.setItem('wishlist_submissions', JSON.stringify(existing))

    // Set registered flag
    localStorage.setItem('wishlist_registered', 'true')

    // Increment count
    const newCount = submissionsCount + 1
    localStorage.setItem('wishlist_count', newCount.toString())
    setSubmissionsCount(newCount)

    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="bg-[#131926]/95 border border-slate-800 shadow-2xl rounded-3xl relative overflow-hidden w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10 flex flex-col font-sans"
          >
            {/* Top colored gradient border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0F4C81] via-[#00A8A8] to-[#FF8C42]" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white hover:bg-slate-850 p-2 rounded-xl transition-all cursor-pointer z-20"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Body */}
            <div className="p-6 sm:p-10 text-left">
              {!submitted ? (
                <div>
                  {/* Header */}
                  <div className="mb-6 space-y-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-[#FF8C42]/15 text-[#FF8C42] border border-[#FF8C42]/30">
                      <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                      Academy Pre-Registration Open
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                      Join the Launch Wishlist
                    </h2>
                    <p className="text-slate-300 text-xs sm:text-sm font-medium">
                      Our interactive coding hubs are launching soon! Pre-register to secure preferred cohorts, schedule options, and an early-access <span className="text-[#00A8A8] font-bold">discount code</span>.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Parent Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-350 flex items-center gap-2">
                        <User className="w-3.5 h-3.5 text-[#00A8A8]" />
                        Parent's Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={e => setFormData(prev => ({ ...prev, parentName: e.target.value }))}
                        className="w-full bg-[#090d16] border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#00A8A8] focus:ring-1 focus:ring-[#00A8A8] transition-all text-xs sm:text-sm font-medium"
                        placeholder="e.g. Kwame Mensah"
                      />
                    </div>

                    {/* Contact row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-355 flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-[#00A8A8]" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full bg-[#090d16] border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#00A8A8] focus:ring-1 focus:ring-[#00A8A8] transition-all text-xs sm:text-sm font-medium"
                          placeholder="e.g. name@domain.com"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-355 flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-[#00A8A8]" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full bg-[#090d16] border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#00A8A8] focus:ring-1 focus:ring-[#00A8A8] transition-all text-xs sm:text-sm font-medium"
                          placeholder="e.g. +233 24 123 4567"
                        />
                      </div>
                    </div>

                    {/* Child details row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-355 flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-[#FF8C42]" />
                          Child's Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.childName}
                          onChange={e => setFormData(prev => ({ ...prev, childName: e.target.value }))}
                          className="w-full bg-[#090d16] border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#FF8C42] focus:ring-1 focus:ring-[#FF8C42] transition-all text-xs sm:text-sm font-medium"
                          placeholder="e.g. Kofi"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-355 flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-[#FF8C42]" />
                          Child's Age
                        </label>
                        <input
                          type="number"
                          min="5"
                          max="18"
                          required
                          value={formData.childAge}
                          onChange={e => setFormData(prev => ({ ...prev, childAge: e.target.value }))}
                          className="w-full bg-[#090d16] border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#FF8C42] focus:ring-1 focus:ring-[#FF8C42] transition-all text-xs sm:text-sm font-medium"
                          placeholder="e.g. 10"
                        />
                      </div>
                    </div>

                    {/* Courses selection */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-355 flex items-center gap-2">
                        <BookOpen className="w-3.5 h-3.5 text-[#00A8A8]" />
                        Select Course(s) of Interest
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {courseOptions.map((course, i) => {
                          const isChecked = formData.courses.includes(course)
                          return (
                            <div
                              key={i}
                              onClick={() => handleCheckboxChange(course)}
                              className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center gap-2.5 select-none text-[11px] font-semibold ${
                                isChecked
                                  ? "bg-[#00A8A8]/10 border-[#00A8A8] text-white"
                                  : "bg-[#090d16] border-slate-800 text-slate-400 hover:border-slate-700"
                              }`}
                            >
                              <div className={`w-3.5 h-3.5 rounded flex items-center justify-center border transition-all ${
                                isChecked 
                                  ? "bg-[#00A8A8] border-[#00A8A8] text-slate-950" 
                                  : "border-slate-700"
                              }`}>
                                {isChecked && (
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-2.5 h-2.5">
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

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#FF8C42] hover:bg-[#e0742f] text-white font-extrabold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-xs sm:text-sm mt-2"
                    >
                      Submit Wishlist Pre-Registration
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-5">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-[#00A8A8]/10 text-[#00A8A8] rounded-full border border-[#00A8A8]/20 animate-bounce">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    You're on the Wishlist!
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-semibold max-w-md mx-auto">
                    Thank you, <span className="text-white font-bold">{formData.parentName}</span>. We've added <span className="text-[#FF8C42] font-bold">{formData.childName}</span> to our early-access cohorts list. We'll send your cohort schedules and a custom early launch discount code to <span className="text-white font-bold">{formData.email}</span> prior to opening!
                  </p>

                  <div className="flex justify-center pt-2">
                    <button
                      onClick={handleClose}
                      className="px-8 py-3 rounded-xl bg-[#00A8A8] hover:bg-[#008f8f] text-white font-bold shadow-lg shadow-teal-500/20 transition-all duration-200 cursor-pointer text-xs sm:text-sm"
                    >
                      Continue Browsing Site
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
