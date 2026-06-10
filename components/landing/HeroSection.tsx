"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const brands = [
  {
    num: "01",
    name: "Flame",
    category: "Modern Japanese Hibachi Dining Experience",
    color: "#E85D26",
    locations: "4 loc.",
  },
  // {
  //   num: "02",
  //   name: "Redchili",
  //   category: "Modern Asian Fusion",
  //   color: "#C8182E",
  //   locations: "5 loc.",
  // },
  {
    num: "03",
    name: "Sear & Sizzle",
    category: "Fire, Flavor, And Craftsmanship",
    color: "#C8955E",
    locations: "3 loc.",
  },
];

const stats = [
  { num: "3", label: "Brands" },
  { num: "12+", label: "Locations" },
  { num: "2018", label: "Founded" },
];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className=" relative flex flex-col overflow-hidden pt-16"
    >
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-5 sm:px-8 py-8 lg:px-16 sm:py-16 lg:py-24"
      >
        {/* ── MAIN GRID ── */}
        <div className="flex-1 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT — Headline + copy + CTA */}
          <div className="relative">
            {/* Headline */}
            <h1
              className="font-semibold leading-[1.05] tracking-tight mb-6 z-10"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                fontFamily: "var(--font-geist-sans)",
              }}
            >
              {["Beyond Food.", "Beyond Branding."].map((line, i) => (
                <div key={line} className="overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.85,
                      delay: 0.3 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {i === 1 ? (
                      <>
                        <span className="text-transparent [-webkit-text-stroke:1px_var(--primary)]">
                          Beyond{" "}
                        </span>
                        <span className="text-foreground">Food.</span>
                      </>
                    ) : i === 0 ? (
                      <>
                        <span className="text-foreground">Beyond </span>
                        <span className=" text-transparent [-webkit-text-stroke:1px_var(--primary)]">
                          Food.
                        </span>
                      </>
                    ) : (
                      line
                    )}
                  </motion.span>
                </div>
              ))}
            </h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="text-muted-foreground leading-relaxed mb-10 max-w-lg"
            >
              From brand identity to guest experience, we build restaurant
              brands that inspire loyalty, drive growth, and leave a lasting
              impression.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.88 }}
              className="flex items-center gap-5"
            >
              <a
                href="#showcase"
                className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground text-xs font-medium tracking-widest uppercase px-6 py-3 hover:bg-primary/90 transition-colors duration-300"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Explore Brands
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  className="group-hover:translate-x-0.5 transition-transform duration-300"
                >
                  <path
                    d="M1 5.5H10M10 5.5L6.5 2M10 5.5L6.5 9"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </a>
              <a
                href="#about"
                className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-xs tracking-widest uppercase transition-colors duration-300"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                <span className="w-4 h-px bg-current group-hover:w-6 transition-all duration-300" />
                Our Story
              </a>
            </motion.div>

            <div
              className="
          absolute inset-0
          bg-[repeating-linear-gradient(315deg,var(--primary)_0,var(--primary)_1px,transparent_0,transparent_50%)]
          bg-size-[10px_10px]
          bg-fixed
          opacity-10
          z-0
          mask-l-from-30%
          mask-r-from-30%
          mask-t-from-30%
          mask-b-from-30%
        "
            />

            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex items-center gap-8 mt-8 pt-8 "
            >
              {stats.map(({ num, label }) => (
                <div key={label}>
                  <div
                    className="text-foreground text-xl font-semibold tracking-tight mb-0.5"
                    style={{ fontFamily: "var(--font-geist-sans)" }}
                  >
                    {num}
                  </div>
                  <div
                    className="text-muted-foreground text-[10px] tracking-[0.18em] uppercase"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </motion.div> */}
          </div>

          {/* RIGHT — Brand cards */}
          <div className="flex flex-col gap-0 lg:pl-8 lg:border-l lg:border-border">
            {/* Section label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-muted-foreground text-xs tracking-[0.22em] uppercase sm:mb-5"
            >
              Our Brands
            </motion.p>

            {brands.map(({ num, name, category, color, locations }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + i * 0.14,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex items-center gap-6 py-8 border-b border-border hover:border-border transition-colors duration-400 cursor-default"
              >
                {/* Left accent bar */}
                <motion.div
                  className="absolute left-0 top-3 bottom-3 w-0.5 origin-top"
                  style={{ background: color }}
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Number */}
                <span className="text-muted-foreground text-xs tabular-nums w-7 shrink-0 pl-3">
                  {num}
                </span>

                {/* Name + category */}
                <div className="flex-1 min-w-0">
                  <div
                    className="font-semibold leading-tight mb-1.5 transition-opacity duration-300"
                    style={{
                      fontSize: "1.25rem",
                      fontFamily: "var(--font-geist-sans)",
                      color,
                    }}
                  >
                    {name}
                  </div>
                  <div className="text-muted-foreground text-xs tracking-[0.12em] uppercase">
                    {category}
                  </div>
                </div>

                {/* Locations + arrow */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-muted-foreground text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {locations}
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="opacity-0 group-hover:opacity-70 -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                    style={{ color }}
                  >
                    <path
                      d="M2 10L10 2M10 2H4M10 2V8"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}

            {/* Bottom strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="flex items-center justify-between mt-7"
            >
              <span className="text-muted-foreground text-xs tracking-[0.18em] uppercase">
                Portfolio — 2020–Present
              </span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <span
                  className="text-muted-foreground text-xs tracking-[0.14em] uppercase"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  2 Active Brands
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
