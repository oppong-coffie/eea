'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollAnimateProps {
  children: ReactNode
  type?: 'fade' | 'rotate' | 'bounce' | 'zoom' | 'slide-up' | 'slide-left' | 'slide-right'
  delay?: number
  duration?: number
}

export default function AnimateOnScroll({
  children,
  type = 'fade',
  delay = 0.2,
  duration = 0.8
}: ScrollAnimateProps) {
  const variants = {
    fade: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    },
    'slide-up': {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    'slide-left': {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    'slide-right': {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    rotate: {
      hidden: { opacity: 0, rotate: -45, scale: 0.8 },
      visible: { opacity: 1, rotate: 0, scale: 1 }
    },
    zoom: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1 }
    },
    bounce: {
      hidden: { opacity: 0, y: 50, scale: 0.3 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring" as const,
          stiffness: 100,
          damping: 10,
          delay,
          duration
        }
      }
    }
  }

  const selectedVariant = variants[type]

  // For spring animations we override the default tween transition
  const transition = type === 'bounce' ? undefined : {
    duration,
    delay,
    ease: [0.25, 0.1, 0.25, 1] as const
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={selectedVariant}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}
