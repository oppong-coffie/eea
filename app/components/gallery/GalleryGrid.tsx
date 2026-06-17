"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Eye } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: "workshops" | "coding" | "robotics" | "presentations" | "projects";
  title: string;
}

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const items: GalleryItem[] = [
    {
      id: 1,
      src: "/images/gallery_coding.png",
      alt: "Student learning programming",
      category: "coding",
      title: "Hands-on Coding Session",
    },
    {
      id: 2,
      src: "/images/gallery_robotics.png",
      alt: "Students building robotic vehicle",
      category: "robotics",
      title: "Robotics Assembly Club",
    },
    {
      id: 3,
      src: "/images/gallery_presentation.png",
      alt: "Student presenting final tech project",
      category: "presentations",
      title: "Capstone Project Presentation",
    },
    {
      id: 4,
      src: "/images/gallery_challenge.png",
      alt: "Students celebrating coding competition project",
      category: "projects",
      title: "Innovation Hackathon Win",
    },
    {
      id: 5,
      src: "/images/gallery_coding.png", // Reuse for design density
      alt: "Virtual coding bootcamp session",
      category: "workshops",
      title: "Term-Break Bootcamps",
    },
    {
      id: 6,
      src: "/images/gallery_robotics.png", // Reuse for design density
      alt: "Arduino circuit wiring class",
      category: "robotics",
      title: "Physical Computing Workshop",
    },
  ];

  const filteredItems =
    activeFilter === "all" ? items : items.filter((item) => item.category === activeFilter);

  const filterButtons = [
    { key: "all", label: "All Photos" },
    { key: "coding", label: "Coding Sessions" },
    { key: "robotics", label: "Robotics & Hardware" },
    { key: "presentations", label: "Presentations" },
    { key: "workshops", label: "Workshops" },
  ];

  return (
    <div className="space-y-12">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {filterButtons.map((btn) => (
          <button
            key={btn.key}
            onClick={() => setActiveFilter(btn.key)}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
              activeFilter === btn.key
                ? "bg-primary text-white dark:bg-accent dark:text-zinc-950"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Grid of Images */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-square rounded-3xl overflow-hidden border border-slate-100 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 shadow-md cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex justify-between items-center text-white">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-accent uppercase">
                      {item.category}
                    </span>
                    <h3 className="font-extrabold text-sm sm:text-base leading-tight mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Overlay Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Modal Window */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl aspect-[4/3] rounded-3xl overflow-hidden"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/45 backdrop-blur-md rounded-2xl border border-white/10 text-white text-center sm:text-left">
                <span className="text-xs font-bold tracking-widest text-accent uppercase block">
                  {selectedImage.category}
                </span>
                <h4 className="font-extrabold text-lg sm:text-xl mt-0.5">
                  {selectedImage.title}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
