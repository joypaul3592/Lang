"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
} as const;

const stats = [
  { value: "2", label: "Distinct Brands" },
  { value: "12+", label: "Active Outlets" },
  { value: "200+", label: "Team Members" },
  { value: "50K+", label: "Customers Served" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-12 sm:py-28 bg-black/4 ">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid lg:grid-cols-2 gap-6 lg:gap-10"
        >
          <motion.div variants={itemVariants}>
            <h2 className="font-display font-semibold text-foreground text-4xl md:text-6xl tracking-tight leading-tighter max-w-md">
              Built{" "}
              <span className="text-transparent [-webkit-text-stroke:1px_var(--primary)]">
                on Passion,
              </span>{" "}
              Serving with{" "}
              <span className="text-transparent [-webkit-text-stroke:1px_var(--primary)]">
                Purpose.
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <p className="text-muted-foreground leading-relaxed mb-5">
              Sear &amp; Co. is a hospitality group born from a singular passion
              — to create dining experiences that linger in memory long after
              the last bite. Founded with the belief that great food is only
              half the story, we craft spaces where every visit feels like
              coming home.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Our portfolio spans two unique brands, each with its own
              personality and culinary identity, but all sharing the same DNA:
              quality ingredients, skilled preparation, and a relentless
              commitment to the guest experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From the fiery energy of Flame to the bold traditions of Falme
              Japanese Hibachi and the refined ambiance of Sear &amp; Sizzle —
              we cover the full spectrum of exceptional dining.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats strip */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 lg:devide- divide-reverse/5 border border-reverse/5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="py-10 px-8 text-center"
            >
              <div className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-[0.25em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
