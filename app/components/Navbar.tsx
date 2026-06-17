"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Menu, X, Sun, Moon, ArrowRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for visual styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize theme
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Programs", href: "/programs" },
    { name: "Schools", href: "/schools" },
    { name: "ICT Solutions", href: "/ict-lab" },
    { name: "Gallery", href: "/gallery" },
    { name: "Alumini", href: "/alumni" },
    { name: "Contact", href: "/contact" },
  ];

  const activeLinkStyle =
    "text-primary dark:text-accent font-semibold border-b-2 border-primary dark:border-accent pb-1";
  const inactiveLinkStyle =
    "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-accent transition-colors pb-1";

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "bg-white/80 dark:bg-zinc-950/80 shadow-md backdrop-blur-md border-b border-gray-100 dark:border-zinc-800"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-3 group">
            <div className="p-2.5 bg-primary/10 dark:bg-accent/15 rounded-xl text-primary dark:text-accent group-hover:scale-105 transition-transform duration-300">
              <img className="w-10 h-10 animate-float rounded-full" src="/images/logo.png" alt="" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-primary dark:text-white leading-tight">
                Explorers' Edge
              </span>
              <span className="text-[11px] font-medium tracking-wider text-secondary dark:text-accent uppercase leading-none">
                Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={isActive ? activeLinkStyle : inactiveLinkStyle}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action Area */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-all duration-350 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5 text-amber-400" />
              )}
            </button>

            {/* CTAs */}
            <Link
              href="/schools"
              className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-accent transition-colors"
            >
              Partner With Us
            </Link>
            <Link
              href="/wishlist"
              className="px-5 py-2.5 text-sm font-bold bg-primary hover:bg-primary-hover text-white rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 flex items-center gap-1.5"
            >
              Join Wishlist
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-gray-500 dark:text-gray-400 transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-5" />
              ) : (
                <Sun className="w-4 h-5 text-amber-400" />
              )}
            </button>

            {/* Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-gray-50 dark:bg-zinc-900 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-all cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-zinc-950 border-b border-gray-100 dark:border-zinc-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2.5 rounded-xl text-base font-semibold ${isActive
                      ? "bg-primary/5 text-primary dark:bg-accent/5 dark:text-accent"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-900"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-gray-100 dark:border-zinc-850 flex flex-col gap-3">
                <Link
                  href="/schools"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-900 rounded-xl"
                >
                  Partner With Us
                </Link>
                <Link
                  href="/wishlist"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 text-sm font-bold bg-primary hover:bg-primary-hover text-white rounded-xl shadow-lg shadow-primary/10 flex items-center justify-center gap-2"
                >
                  Join Wishlist
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
