"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function BilanAnnee2() {
  const achievements = [
    "Projet de fin d'année distingué",
    "Maîtrise de React et Next.js",
    "Stage de 2 mois en entreprise",
  ];

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "API REST",
    "MongoDB",
    "Git avancé",
  ];

  const sections = [
    {
      title: "Introduction",
      content:
        "La deuxième année a été marquée par un approfondissement significatif de mes compétences techniques et une première immersion en entreprise. J'ai pu mettre en pratique mes connaissances sur des projets concrets et développer ma capacité à travailler en équipe.",
    },
    {
      title: "Expérience en entreprise",
      content:
        "Mon stage de 2 mois m'a permis de découvrir le monde professionnel et de comprendre les enjeux du développement en entreprise. J'ai travaillé sur des projets réels et appris à respecter des deadlines et des standards de qualité élevés.",
    },
    {
      title: "Défis et apprentissages",
      content:
        "Le principal défi a été de gérer la complexité croissante des projets. J'ai appris à structurer mon code de manière plus professionnelle et à utiliser des outils de collaboration comme Git de façon avancée. La gestion de projet agile a également été un apprentissage important.",
    },
    {
      title: "Perspectives",
      content:
        "Pour la troisième année, je souhaite me spécialiser davantage et développer une expertise dans un domaine spécifique. Je prévois également de réaliser un stage plus long et de travailler sur des projets d'envergure plus importante.",
    },
  ];

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
              href="/bilans"
              className="inline-flex items-center gap-3 text-sm font-mono uppercase tracking-widest mb-16 group"
              style={{ color: "var(--text-secondary)" }}
            >
              <span
                className="w-8 h-px transition-all duration-300 group-hover:w-12"
                style={{ backgroundColor: "var(--accent)" }}
              />
              Retour aux bilans
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
              02 — Progression
            </span>
            <h1 className="font-display text-display-md md:text-display-lg mb-6">
              Bilan
              <br />
              <span style={{ color: "var(--accent)" }}>2ème Année</span>
            </h1>
          </motion.header>

          {/* Achievements */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2
              className="font-mono text-sm uppercase tracking-widest mb-8"
              style={{ color: "var(--accent)" }}
            >
              Réalisations
            </h2>
            <div className="space-y-0">
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="py-5 border-b flex items-center gap-6"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2
              className="font-mono text-sm uppercase tracking-widest mb-8"
              style={{ color: "var(--accent)" }}
            >
              Compétences acquises
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm font-mono uppercase tracking-wider border transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Text sections */}
          {sections.map((section, i) => (
            <motion.section
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="mb-16"
            >
              <h2 className="font-display text-2xl md:text-3xl mb-6">{section.title}</h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {section.content}
              </p>
            </motion.section>
          ))}

          {/* Divider */}
          <div className="divider" />

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 flex justify-between"
          >
            <Link
              href="/bilans/annee-1"
              className="group inline-flex items-center gap-4 font-display text-xl md:text-2xl transition-colors duration-300 hover:text-[var(--accent)]"
            >
              <span
                className="w-12 h-px transition-all duration-300 group-hover:w-20"
                style={{ backgroundColor: "var(--accent)" }}
              />
              Bilan 1ère Année
            </Link>
            <Link
              href="/bilans/annee-3"
              className="group inline-flex items-center gap-4 font-display text-xl md:text-2xl transition-colors duration-300 hover:text-[var(--accent)]"
            >
              Bilan 3ème Année
              <span
                className="w-12 h-px transition-all duration-300 group-hover:w-20"
                style={{ backgroundColor: "var(--accent)" }}
              />
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
