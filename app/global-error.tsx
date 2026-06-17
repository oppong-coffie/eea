'use client'

import { useEffect } from 'react'
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center justify-center bg-[#0b0f19] text-[#f8fafc] p-6 selection:bg-[#FF8C42] selection:text-white overflow-hidden relative font-sans">
        {/* Decorative glowing background elements */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0F4C81] opacity-20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#FF8C42] opacity-15 rounded-full blur-[120px] pointer-events-none animate-pulse" />

        <div className="max-w-md w-full text-center z-10 glassmorphism p-8 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Accent border top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0F4C81] via-[#00A8A8] to-[#FF8C42]" />

          <div className="mb-6 flex justify-center">
            <div className="p-4 bg-red-500/10 text-red-500 rounded-full border border-red-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight mb-2 text-white bg-clip-text bg-gradient-to-r from-white to-slate-400">
            System Error
          </h1>
          <p className="text-slate-400 text-sm mb-6 font-medium">
            Something went wrong at the core of the application.
          </p>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-lg p-4 mb-6 text-left overflow-x-auto max-h-48 scrollbar-thin">
            <span className="text-xs font-mono text-red-400 block break-all whitespace-pre-wrap">
              {error?.message || "An unexpected dynamic error occurred."}
            </span>
            {error?.digest && (
              <span className="text-[10px] font-mono text-slate-500 block mt-2">
                Digest: {error.digest}
              </span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => unstable_retry()}
              className="px-6 py-2.5 rounded-lg bg-[#FF8C42] hover:bg-[#e0742f] text-white font-semibold shadow-lg shadow-orange-500/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              Try Again
            </button>
            <a
              href="/"
              className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold border border-slate-700/50 transition-all duration-200 flex items-center justify-center"
            >
              Go to Home
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
