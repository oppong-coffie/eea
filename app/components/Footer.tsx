"use client";

import Link from "next/link";
import { Compass, Mail, Phone, MapPin, Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-zinc-950 border-t border-gray-800 dark:border-zinc-900 transition-colors duration-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand details */}
          <div className="space-y-6">
            <Link href="/home" className="flex items-center gap-3">
              <div className="p-2.5 bg-primary/20 rounded-xl text-accent">
                <img className="w-10 h-10 animate-float rounded-full" src="/images/logo.png" alt="" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-tight">
                  Explorers' Edge
                </span>
                <span className="text-[11px] font-medium tracking-wider text-secondary uppercase leading-none">
                  Academy
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering the next generation of digital innovators through premium technology, coding, and future skills education.
            </p>
            <div className="text-sm font-semibold italic text-secondary">
              "Exploring to Excel"
            </div>
            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2.5 rounded-lg bg-gray-800 hover:bg-primary animate-pulse hover:text-white transition-colors duration-300 text-gray-400"
                aria-label="Facebook Link"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2.5 rounded-lg bg-gray-800 animate-pulse hover:bg-primary hover:text-white transition-colors duration-300 text-gray-400"
                aria-label="Twitter X Link"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2.5 rounded-lg bg-gray-800 animate-pulse hover:bg-primary hover:text-white transition-colors duration-300 text-gray-400"
                aria-label="Instagram Link"
              >
                <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2.5 rounded-lg bg-gray-800 animate-pulse hover:bg-primary hover:text-white transition-colors duration-300 text-gray-400"
                aria-label="LinkedIn Link"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/20542" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide uppercase text-sm">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { name: "About Us", href: "/home#about" },
                { name: "Our Programs", href: "/programs" },
                { name: "Schools Partnership", href: "/schools" },
                { name: "ICT Lab Solutions", href: "/ict-lab" },
                { name: "Photo Gallery", href: "/gallery" },
                { name: "Join Launch Wishlist", href: "/wishlist" },
                { name: "Alumini", href: "/alumni" },
                { name: "Contact & Support", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors duration-250 flex items-center gap-1 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-accent transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide uppercase text-sm">
              Our Programs
            </h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { name: "Digital Skills Foundation", href: "/programs" },
                { name: "Scratch Programming", href: "/programs" },
                { name: "Web Development", href: "/programs" },
                { name: "Advanced Programming (Python/JS)", href: "/programs" },
                { name: "AI Fundamentals & Tools", href: "/programs" },
                { name: "Digital Creativity & Design", href: "/programs" },
              ].map((prog) => (
                <li key={prog.name}>
                  <Link
                    href={prog.href}
                    className="hover:text-accent transition-colors duration-250"
                  >
                    {prog.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-bold text-base mb-6 tracking-wide uppercase text-sm">
                Get in Touch
              </h3>
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5 animate-pulse" />
                  <span className="text-gray-400">
                    Oyarifa, Accra, Ghana
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary shrink-0 animate-pulse" />
                  <a href="tel:+233241234567" className="hover:text-accent transition-colors text-gray-400">
                    +233 (0) 24 123 4567
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary shrink-0 animate-pulse" />
                  <a href="mailto:info@explorersedge.com" className="hover:text-accent transition-colors text-gray-400">
                    info@explorersedge.academy
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <h4 className="text-white font-bold text-xs mb-3 tracking-wide uppercase">
                Subscribe to Newsletter
              </h4>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 text-sm text-white px-3.5 py-2.5 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-accent border border-gray-700"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-hover text-white p-2.5 rounded-lg transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4 animate-bounce" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-950/80 dark:bg-black/40 py-6 border-t border-gray-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-550">
          <p>&copy; {currentYear} Explorers' Edge Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
