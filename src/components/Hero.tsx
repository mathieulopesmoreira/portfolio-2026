"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Grille décorative en arrière-plan */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Accent orbe */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[120px]"
        style={{
          background: "var(--accent)",
          y,
        }}
      />

      {/* Contenu principal */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-28"
        style={{ opacity }}
      >
        {/* Section number */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="section-number">01 — Accueil</span>
        </motion.div>

        {/* Titre monumental */}
        <div className="max-w-6xl">
          <TextReveal as="h1" className="heading-xl mb-2" delay={0.3}>
            Mathieu
          </TextReveal>
          <TextReveal as="h1" className="heading-xl" delay={0.5}>
            <span style={{ color: "var(--accent)" }}>Lopes</span>{" "}
            Moreira
          </TextReveal>
        </div>

        {/* Ligne de séparation animée */}
        <motion.div
          className="my-10 h-[1px] max-w-md origin-left"
          style={{ background: "var(--accent)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.77, 0, 0.175, 1] }}
        />

        {/* Sous-texte — grille asymétrique */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-8 md:gap-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--accent)" }}
            >
              Spécialisation
            </p>
            <p className="text-lg font-display" style={{ color: "var(--text-primary)" }}>
              Science des Données
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--accent)" }}
            >
              À propos
            </p>
            <p
              className="text-base leading-relaxed max-w-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              Étudiant en BUT Science des Données. De la cuisine à la data,
              je transforme les données en histoires. Passionné d&apos;auto-hébergement
              et d&apos;autonomie numérique.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="flex flex-wrap gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <MagneticButton>
            <Link
              href="/projets"
              className="group inline-flex items-center gap-3 px-8 py-4 border text-sm font-medium tracking-wider uppercase transition-all duration-500"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--accent)";
                e.currentTarget.style.color = "var(--bg-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--accent)";
              }}
            >
              <span>Voir les projets</span>
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wider uppercase transition-colors duration-300"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              Me contacter
            </Link>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Marquee en bas — bande défilante infinie */}
      <div
        className="relative z-10 border-t py-5 overflow-hidden"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="marquee-container">
          <div className="marquee-content">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="inline-flex items-center gap-8 mx-8">
                <span
                  className="font-display text-sm tracking-widest uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  Data Science
                </span>
                <span style={{ color: "var(--accent)" }}>✦</span>
                <span
                  className="font-display text-sm tracking-widest uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  Python
                </span>
                <span style={{ color: "var(--accent)" }}>✦</span>
                <span
                  className="font-display text-sm tracking-widest uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  Machine Learning
                </span>
                <span style={{ color: "var(--accent)" }}>✦</span>
                <span
                  className="font-display text-sm tracking-widest uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  Auto-hébergement
                </span>
                <span style={{ color: "var(--accent)" }}>✦</span>
                <span
                  className="font-display text-sm tracking-widest uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  SQL
                </span>
                <span style={{ color: "var(--accent)" }}>✦</span>
                <span
                  className="font-display text-sm tracking-widest uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  Visualisation
                </span>
                <span style={{ color: "var(--accent)" }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-24 left-6 md:left-12 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span
          className="font-mono text-[10px] tracking-widest uppercase"
          style={{ color: "var(--text-muted)", writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-12"
          style={{ transformOrigin: "top", background: "var(--accent)" }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
