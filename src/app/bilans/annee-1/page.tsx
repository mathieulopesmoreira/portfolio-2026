"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function BilanAnnee1() {
  const achievements = [
    "Mention Bien au premier semestre",
    "Maîtrise des fondamentaux Python & SQL",
    "Participation à 3 projets data",
  ];

  const skills = [
    "HTML/CSS",
    "JavaScript",
    "Git",
    "Python",
    "Algorithmique",
    "Base de données",
  ];

  const sections = [
    {
      title: "Introduction",
      content:
        "Ma première année a été une année de découverte et d'apprentissage des fondamentaux. J'ai pu développer mes compétences techniques tout en découvrant le monde de la data science. Cette année m'a permis de poser des bases solides pour la suite de mon parcours.",
    },
    {
      title: "Défis et apprentissages",
      content:
        "Le principal défi a été de m'adapter au rythme de travail et à la quantité d'informations à assimiler. J'ai appris à organiser mon temps et à travailler de manière plus efficace. La collaboration en équipe a également été un point important de mon apprentissage.",
    },
    {
      title: "Perspectives",
      content:
        "Pour la deuxième année, je souhaite approfondir mes connaissances en data science et me spécialiser dans le machine learning. Je prévois également de participer à des projets plus ambitieux et de contribuer à des projets open source.",
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
              01 — Fondation
            </span>
            <h1 className="font-display text-display-md md:text-display-lg mb-6">
              Bilan
              <br />
              <span style={{ color: "var(--accent)" }}>1ère Année</span>
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
            className="mt-16 flex justify-end"
          >
            <Link
              href="/bilans/annee-2"
              className="group inline-flex items-center gap-4 font-display text-xl md:text-2xl transition-colors duration-300 hover:text-[var(--accent)]"
            >
              Bilan 2ème Année
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
