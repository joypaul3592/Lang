"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function MissionVisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="mission" className="py-12 ">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className=" font-display font-medium text-4xl md:text-6xl tracking-tight mb-16"
        >
          Mission &amp;{" "}
          <span className="text-transparent [-webkit-text-stroke:1px_var(--primary)]">
            Vision
          </span>
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
              <div className="h-px w-6 bg-primary" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-primary">
                Mission
              </span>
            </div>
            <h3 className="font-display text-xl font-medium text-foreground mb-5 leading-snug">
              What We Do Today.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To build and grow a portfolio of distinctive hospitality brands
              that elevate the art of dining. We are dedicated to sourcing
              premium ingredients, developing world-class culinary talent, and
              designing experiences that consistently exceed guest expectations.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We operate with integrity, value our people as our greatest
              strength, and define success by the lasting impressions we create
              with every guest experience.
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
              <div className="h-px w-6 bg-primary" />
              <span className="text-[10px] font-bold tracking-[0.45em] uppercase text-primary">
                Vision
              </span>
            </div>
            <h3 className="font-display text-xl font-medium text-foreground mb-5 leading-snug">
              Where We Want to Be.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To become a leading hospitality group recognized for creating
              iconic dining brands defined by excellence, consistency, and
              innovation across every experience we deliver.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We envision Sear & Co. as a portfolio of trusted, forward-thinking
              restaurant brands that set new standards in hospitality while
              remaining rooted in quality and craft.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
