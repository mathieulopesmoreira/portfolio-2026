"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function ProjetsAnnee3() {
  return (
    <PageTransition>
      <Navbar />
      <main
        className="min-h-screen pt-32 pb-24"
        style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/projets"
              className="inline-flex items-center gap-3 text-sm font-mono uppercase tracking-widest mb-16 group"
              style={{ color: "var(--text-secondary)" }}
            >
              <span
                className="w-8 h-px transition-all duration-300 group-hover:w-12"
                style={{ backgroundColor: "var(--accent)" }}
              />
              Retour aux projets
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <span
              className="block font-mono text-sm uppercase tracking-widest mb-4"
              style={{ color: "var(--accent)" }}
            >
              03 — Expertise
            </span>
            <h1 className="font-display text-display-md md:text-display-lg mb-6">
              Projets
              <br />
              <span style={{ color: "var(--accent)" }}>3ème Année</span>
            </h1>
          </motion.header>

          {/* Contenu Prochainement */}
          <motion.div
            className="flex flex-col items-center justify-center py-24 md:py-32 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
          >
            {/* Diamant animé */}
            <motion.div
              className="w-4 h-4 rotate-45 mb-8"
              style={{ backgroundColor: "var(--accent)" }}
              animate={{ rotate: [45, 225, 405], scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <h2
              className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Prochainement
            </h2>

            <div
              className="w-16 h-[1px] mx-auto mb-6"
              style={{ background: "var(--accent)" }}
            />

            <p
              className="text-base md:text-lg leading-relaxed max-w-md"
              style={{ color: "var(--text-secondary)" }}
            >
              Les projets de troisième année seront disponibles
              lors de mon entrée en BUT 3 — Science des Données.
            </p>

            <p
              className="font-mono text-xs tracking-widest uppercase mt-8"
              style={{ color: "var(--text-muted)" }}
            >
              Rentrée 2026 — 2027
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 flex justify-start"
          >
            <Link
              href="/projets/annee-2"
              className="group inline-flex items-center gap-4 font-display text-xl md:text-2xl transition-colors duration-300 hover:text-[var(--accent)]"
            >
              <span
                className="w-12 h-px transition-all duration-300 group-hover:w-20"
                style={{ backgroundColor: "var(--accent)" }}
              />
              2ème Année
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
