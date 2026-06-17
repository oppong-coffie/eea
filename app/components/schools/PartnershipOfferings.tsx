"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, Rocket, Monitor, CheckCircle, ShieldCheck, Heart } from "lucide-react";

export default function PartnershipOfferings() {
  const offerings = [
    {
      title: "After-School Programs",
      description: "Seamlessly integrate digital literacy and programming into your regular school curriculum. We run weekly sessions right on your school premises.",
      Icon: BookOpen,
      badge: "In-School",
      color: "border-primary/20 hover:border-primary/40",
      iconColor: "text-primary bg-primary/10",
    },
    {
      title: "Saturday Technology Clubs",
      description: "Weekend logic training designed for pupils who want to dive deeper into robotics, game engines, and advanced coding tracks.",
      Icon: Calendar,
      badge: "Weekend",
      color: "border-secondary/20 hover:border-secondary/40",
      iconColor: "text-secondary bg-secondary/10",
    },
    {
      title: "Vacation Tech Bootcamps",
      description: "Intensive, highly creative coding and innovation bootcamps hosted during term breaks. Keeps students engaged and learning.",
      Icon: Rocket,
      badge: "Holidays",
      color: "border-accent/20 hover:border-accent/40",
      iconColor: "text-accent bg-accent/10",
    },
    {
      title: "ICT Lab Consultation",
      description: "We help schools design, source, configure, and install modern, ergonomic computer labs and supply curriculum training for staff.",
      Icon: Monitor,
      badge: "Infrastructure",
      color: "border-primary/20 hover:border-primary/40",
      iconColor: "text-primary bg-primary/10",
    },
  ];

  const benefits = [
    {
      title: "Improved Digital Literacy",
      desc: "Enrich your school's curriculum with modern, structured digital skills, helping your institution stand out as future-focused.",
    },
    {
      title: "Technology Exposure",
      desc: "Provide students with direct access to advanced tech: physical microcontrollers, robotics hardware, and cutting-edge software.",
    },
    {
      title: "Culture of Innovation",
      desc: "Nurture critical thinking and creativity. Encourage students to solve real-world problems through collaborative projects.",
    },
    {
      title: "Future-Ready Students",
      desc: "Equip your pupils with coding, AI literacy, and computational logic, laying a solid foundation for high-demand careers.",
    },
  ];

  return (
    <div className="space-y-20">
      {/* Offerings Section */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Our Collaboration Formats
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium">
            We adapt our training structures to fit your school's calendar and infrastructure, delivering top-tier learning without disruptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((offering, i) => {
            const IconComponent = offering.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 bg-white dark:bg-zinc-900 border rounded-3xl ${offering.color} hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className={`p-3 rounded-2xl ${offering.iconColor}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 text-xs font-bold bg-slate-50 dark:bg-zinc-800 text-slate-650 dark:text-zinc-350 rounded-lg">
                      {offering.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">
                    {offering.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {offering.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-primary dark:bg-zinc-900/60 rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-white/5">
        {/* Background visual detail */}
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Benefits Title */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20">
              <Heart className="w-3 h-3 text-secondary animate-pulse" />
              Institutional Perks
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Benefits of Partnering With Us
            </h2>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-medium">
              We deliver fully managed school tech solutions. From curriculum alignment to hardware setup and reporting, we support your faculty in raising digital leaders.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 text-white space-y-2.5"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                  <h3 className="font-extrabold text-sm sm:text-base tracking-wide">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-medium">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
