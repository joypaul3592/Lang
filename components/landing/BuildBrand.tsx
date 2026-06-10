import React from "react";

export default function BuildBrand() {
  return (
    <section
      id="thesis"
      className="relative z-10 min-h-[60vh] flex flex-col justify-center items-center dark:bg-black/20 bg-black/5 backdrop-blur-[2px] py-24 text-center"
    >
      <div className="max-w-4xl px-5 sm:px-8 space-y-6">
        <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-muted-foreground">
          Core Thesis
        </span>
        <h2 className="font-display font-medium text-4xl md:text-6xl tracking-tight leading-tight">
          “We Build{" "}
          <span className="text-transparent [-webkit-text-stroke:1px_var(--primary)]">
            Brands.
          </span>
          ”
        </h2>
        <div className="w-12 h-px bg-muted mx-auto" />
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          We build brands that shape the future of dining. Through a growing
          portfolio of hospitality concepts, we create distinctive experiences,
          enduring identities, and businesses built to thrive for generations.
        </p>
      </div>
    </section>
  );
}
