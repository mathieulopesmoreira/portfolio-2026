"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function BilanAnnee3() {
  const achievements = [
    "Diplôme avec mention Très Bien",
    "Stage de 6 mois en alternance",
    "Projet de fin d'études primé",
  ];

  const skills = [
    "Architecture logicielle",
    "DevOps",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "Cloud (AWS/Azure)",
    "Tests automatisés",
    "Sécurité web",
  ];

  const sections = [
    {
      title: "Introduction",
      content:
        "La troisième année a été l'année de la spécialisation et de la professionnalisation. Mon alternance m'a permis de développer une expertise solide et de travailler sur des projets d'envergure. Cette année marque l'aboutissement de mon parcours académique et le début de ma carrière professionnelle.",
    },
    {
      title: "Expérience en alternance",
      content:
        "Mon alternance de 6 mois m'a permis de m'immerger complètement dans le monde professionnel. J'ai participé à toutes les phases d'un projet, de la conception à la mise en production. Cette expérience m'a appris à travailler en équipe sur des projets complexes et à gérer la pression des deadlines.",
    },
    {
      title: "Projet de fin d'études",
      content:
        "Mon projet de fin d'études a consisté à développer une application web complète avec une architecture moderne. Ce projet m'a permis de mettre en pratique toutes les compétences acquises durant ma formation et de démontrer ma capacité à mener un projet de A à Z.",
    },
    {
      title: "Bilan global et perspectives",
      content:
        "Ces trois années de formation ont été riches en apprentissages et en expériences. J'ai développé des compétences techniques solides et une méthodologie de travail professionnelle. Je suis maintenant prêt à relever de nouveaux défis et à contribuer activement à des projets innovants. Mes perspectives professionnelles se tournent vers des postes en data science où je pourrai continuer à apprendre et à évoluer dans un environnement stimulant.",
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
              03 — Aboutissement
            </span>
            <h1 className="font-display text-display-md md:text-display-lg mb-6">
              Bilan
              <br />
              <span style={{ color: "var(--accent)" }}>3ème Année</span>
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
            className="mt-16 flex justify-start"
          >
            <Link
              href="/bilans/annee-2"
              className="group inline-flex items-center gap-4 font-display text-xl md:text-2xl transition-colors duration-300 hover:text-[var(--accent)]"
            >
              <span
                className="w-12 h-px transition-all duration-300 group-hover:w-20"
                style={{ backgroundColor: "var(--accent)" }}
              />
              Bilan 2ème Année
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
