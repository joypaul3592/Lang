"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function MissionVisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="mission" className="py-28 lg:py-36 bg-black/20">
      <div ref={ref} className="max-w-7xl mx-auto px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="font-display text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-foreground mb-16"
        >
          Mission &amp; Vision
        </motion.h2>

        {/* Two-column content */}
        <div className="grid lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-border">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="pb-14 lg:pb-0 lg:pr-16 xl:pr-24"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-6 bg-[#a67c2a]" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#a67c2a]">
                Mission
              </span>
            </div>
            <h3 className="font-display text-xl font-medium text-foreground mb-5 leading-snug">
              What We Do Today.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To curate and grow a family of distinctive hospitality brands that
              celebrate the art of food and dining. We are committed to sourcing
              the finest ingredients, developing exceptional culinary talent,
              and creating experiences that leave every guest wanting to return.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We operate with integrity, treat every team member like family,
              and measure our success by the smiles we create — one meal at a
              time.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="pt-14 lg:pt-0 lg:pl-16 xl:pl-24"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-6 bg-[#a67c2a]" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#a67c2a]">
                Vision
              </span>
            </div>
            <h3 className="font-display text-xl font-medium text-foreground mb-5 leading-snug">
              Where We Want to Be.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To become the most celebrated hospitality group in the region —
              recognized not just for the quality of our food, but for the
              culture of excellence we build within every brand under our
              portfolio.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We envision a future where Sear &amp; Co. brands are synonymous
              with trust, innovation, and the finest dining experiences — a
              portfolio that grows without ever compromising on what matters
              most.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
