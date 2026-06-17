"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Layout, Network, HardDrive, ShieldCheck, Mail, Phone, Calendar } from "lucide-react";

export default function LabSolutions() {
  const solutions = [
    {
      title: "ICT Room Design",
      description: "Optimized desk arrangements, ergonomic seating, glare-free lighting systems, and structural cable channels that guarantee student safety and attention.",
      features: ["U-Shaped & Island Layout options", "Ergonomic furniture suggestions", "Child-safe hidden cable systems"],
      Icon: Layout,
      color: "border-primary/20 hover:border-primary/45",
      iconColor: "text-primary bg-primary/10",
    },
    {
      title: "Technology Infrastructure",
      description: "Robust local area networks, server setups, high-performance routers, and web filtering firewalls to keep kids safe while browsing online.",
      features: ["Secure content filtering proxies", "Gigabit Local Area Networks", "Multi-user storage setups"],
      Icon: Network,
      color: "border-secondary/20 hover:border-secondary/45",
      iconColor: "text-secondary bg-secondary/10",
    },
    {
      title: "Equipment Recommendations",
      description: "Cost-effective, durable equipment recommendations. We source desktops, laptops, 3D printers, and microcontrollers matching your budget.",
      features: ["Rugged laptops for kids", "STEM kit sourcing (Arduino/Pi)", "Interactive board solutions"],
      Icon: HardDrive,
      color: "border-accent/20 hover:border-accent/45",
      iconColor: "text-accent bg-accent/10",
    },
    {
      title: "Faculty Training & Support",
      description: "We don't just supply hardware. We train your computer studies teachers on the curriculum and supply on-demand technical maintenance.",
      Icon: ShieldCheck,
      features: ["LMS & curriculum training", "Quarterly equipment checkups", "Priority technical helpdesk"],
      color: "border-primary/20 hover:border-primary/45",
      iconColor: "text-primary bg-primary/10",
    },
  ];

  return (
    <div className="space-y-20">
      {/* Intro section: Text on left, 3D image on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Descriptive Text */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Building Modern Learning Spaces for Future Creators
          </h2>
          <p className="text-base text-slate-650 dark:text-slate-350 leading-relaxed font-medium">
            A school computer lab should be more than just a room full of computers. It should be a dynamic space that fosters creativity, collaboration, and exploration. 
          </p>
          <p className="text-base text-slate-650 dark:text-slate-350 leading-relaxed font-medium">
            <strong>Explorers' Edge Academy</strong> provides complete, turn-key consulting and engineering solutions for schools. We handle everything from electrical schematics and server setups to equipment sourcing and custom teacher training.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all"
            >
              Request Lab Consultation
            </Link>
          </div>
        </div>

        {/* 3D Lab Render Visual */}
        <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 bg-slate-100 dark:bg-zinc-900">
          <Image
            src="/images/ict_lab_3d.png"
            alt="3D render of a futuristic ICT classroom"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Our Turn-Key Services
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium">
            We guide your management through planning, deployment, and ongoing operation to make your digital center a success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol, i) => {
            const Icon = sol.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 bg-white dark:bg-zinc-900 border rounded-3xl ${sol.color} hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-5">
                  <div className={`inline-flex p-3 rounded-2xl ${sol.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {sol.description}
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-slate-50 dark:border-zinc-850">
                    {sol.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
