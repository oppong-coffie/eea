'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function IntroLoader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    // Disable scrolling when loader is active
    document.body.style.overflow = 'hidden'
    
    // Total duration of intro is ~4.5 seconds
    const timer = setTimeout(() => {
      setShow(false)
      document.body.style.overflow = ''
    }, 4500)

    return () => {
      document.body.style.overflow = ''
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070b13] overflow-hidden"
        >
          {/* Animated background glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0F4C81] opacity-[0.15] rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FF8C42] opacity-[0.1] rounded-full blur-[120px] pointer-events-none" />

          <div className="flex flex-col items-center gap-8 z-10 px-4">
            {/* Logo container */}
            <div className="relative">
              {/* Outer glowing dashed ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: [0, 1, 1],
                  scale: [0.8, 1, 1],
                  rotate: 360 
                }}
                transition={{
                  duration: 1.8,
                  ease: "easeInOut",
                  times: [0, 0.3, 1]
                }}
                className="absolute inset-[-15px] rounded-full border border-dashed border-[#00A8A8]/30 animate-spin [animation-duration:12s]"
              />

              {/* Logo element */}
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{
                  scale: [0, 1, 1, 2.2, 1.3],
                  rotate: [0, 360, 360, 360, 360],
                }}
                transition={{
                  duration: 3.2,
                  times: [0, 0.45, 0.6, 0.8, 1],
                  ease: "easeInOut"
                }}
                className="w-24 h-24 rounded-full bg-slate-900/50 p-2 border border-slate-800 shadow-2xl relative flex items-center justify-center overflow-hidden"
              >
                <img 
                  src="/images/logo.png" 
                  alt="Explorers' Edge Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </div>

            {/* Academy Name */}
            <div className="flex flex-col items-center justify-center text-center mt-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 2.2,
                    duration: 0.8,
                    ease: [0.215, 0.610, 0.355, 1.000]
                  }
                }}
                className="text-2xl sm:text-3xl font-extrabold tracking-wider text-white font-heading"
              >
                <span className="bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                  EXPLORERS' EDGE
                </span>
                <span className="text-[#FF8C42] ml-2">ACADEMY</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { delay: 2.8, duration: 0.5 }
                }}
                className="text-[10px] sm:text-xs tracking-[0.3em] text-[#00A8A8] font-bold mt-2"
              >
                FUTURE-READY DIGITAL SKILLS
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
