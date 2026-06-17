'use client'

import { motion } from 'framer-motion'
import { GraduationCap, ArrowRight, Sparkles, Award } from 'lucide-react'
import Link from 'next/link'
import HoverWord from '@/app/components/interactive/HoverWord'

export default function AlumniPage() {
  return (
    <div className="flex-grow bg-[#090d16] text-[#f8fafc] py-20 relative overflow-hidden font-sans flex flex-col justify-center items-center min-h-[70vh]">
      {/* Background glowing decorations */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-[#0F4C81] opacity-20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-[#FF8C42] opacity-10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 text-center relative z-10 space-y-8">
        {/* Sparkle badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-[#FF8C42]/15 text-[#FF8C42] border border-[#FF8C42]/30">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Empowering Future Leaders
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            <HoverWord text="Alumni Network" />
          </h1>
          <p className="text-[#00A8A8] text-sm sm:text-base font-bold tracking-widest uppercase">
            Future Tech Innovators
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 15 }}
          className="bg-[#131926]/95 border border-slate-800 shadow-2xl p-8 sm:p-12 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0F4C81] via-[#00A8A8] to-[#FF8C42]" />

          {/* Large decorative icon */}
          <div className="mb-6 flex justify-center">
            <div className="p-5 bg-gradient-to-br from-[#0F4C81]/20 to-[#00A8A8]/10 text-white rounded-3xl border border-slate-800 relative group">
              <GraduationCap className="w-14 h-14 text-[#00A8A8] transition-transform duration-500 group-hover:rotate-12" />
              <div className="absolute -top-1 -right-1 p-1.5 bg-[#FF8C42] rounded-full text-white">
                <Award className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
            Be the First Alumni!
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8 leading-relaxed font-semibold">
            Our academy's cohort classes are launching soon, meaning our graduating network of digital innovators is currently being formed. Joining the pre-registration wishlist secures your entry and puts you on the path to becoming one of our premier graduates!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/wishlist"
              className="px-8 py-3.5 rounded-xl bg-[#FF8C42] hover:bg-[#e0742f] text-white font-extrabold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-sm flex items-center justify-center gap-2"
            >
              Join Launch Wishlist
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/home"
              className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-355 hover:text-white font-bold border border-slate-750 transition-all duration-200 text-sm flex items-center justify-center"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
