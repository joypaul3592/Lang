"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    n: "01",
    title: "Quality First",
    desc: "We never compromise on ingredient quality, preparation standards, or service delivery — at every location, every day.",
  },
  {
    n: "02",
    title: "Customer Experience",
    desc: "Every touchpoint is designed to make guests feel valued, comfortable, and genuinely eager to return.",
  },
  {
    n: "03",
    title: "Continuous Innovation",
    desc: "Our culinary teams constantly evolve menus and concepts to stay ahead of dining trends and guest expectations.",
  },
  {
    n: "04",
    title: "Multi-Brand Excellence",
    desc: "Our portfolio approach lets us serve diverse palates and occasions under the same umbrella of excellence.",
  },
  {
    n: "05",
    title: "Sustainable Growth",
    desc: "We grow thoughtfully — building strong brand foundations before expanding, ensuring quality at every new location.",
  },
  {
    n: "06",
    title: "Proven Track Record",
    desc: "Years of consistent delivery, a loyal customer base, and a reputation built through genuine hospitality.",
  },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" className="py-28 lg:py-36 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-0 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1 mb-12 lg:mb-0 lg:sticky lg:top-20 lg:self-start"
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              The Sear &amp;
              <br />
              Co. Difference
            </h2>
          </motion.div>

          {/* Reasons grid */}
          <div className="lg:col-span-2 border border-border divide-y divide-border">
            {Array.from({ length: 3 }).map((_, row) => (
              <div
                key={row}
                className="grid grid-cols-2 divide-x divide-border"
              >
                {reasons.slice(row * 2, row * 2 + 2).map((r, col) => (
                  <motion.div
                    key={r.n}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.55,
                      delay: 0.1 + (row * 2 + col) * 0.07,
                    }}
                    className="p-7 lg:p-8"
                  >
                    <span className="block font-display text-2xl font-bold text-border mb-5 select-none">
                      {r.n}
                    </span>
                    <h3 className="text-sm font-semibold text-foreground mb-2.5 tracking-wide">
                      {r.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {r.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
