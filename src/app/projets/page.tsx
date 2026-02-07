"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";

export default function ProjetsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projets = [
    {
      number: "01",
      year: "1ère année",
      title: "Fondamentaux",
      description: "Découverte de la data science, premiers scripts Python, statistiques descriptives et visualisations exploratoires.",
      link: "/projets/annee-1",
      tags: ["Python", "Pandas", "Matplotlib", "SQL"],
    },
    {
      number: "02",
      year: "2ème année",
      title: "Machine Learning",
      description: "Modèles prédictifs, classification, régression, traitement de données avancé et pipeline de données.",
      link: "/projets/annee-2",
      tags: ["Scikit-learn", "NumPy", "Power BI", "PostgreSQL"],
    },
    {
      number: "03",
      year: "3ème année",
      title: "IA & Big Data",
      description: "Deep learning, traitement du langage naturel, systèmes distribués et projets à grande échelle.",
      link: "/projets/annee-3",
      tags: ["TensorFlow", "NLP", "Docker", "Spark"],
    },
  ];

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-primary)" }}>
        {/* Header */}
        <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <span className="section-number">03 — Projets</span>
            <TextReveal as="h1" className="heading-lg mt-4" delay={0.2}>
              Mes <span style={{ color: "var(--accent)" }}>réalisations</span>
            </TextReveal>
            <motion.p
              className="text-lg mt-6 max-w-2xl"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Chaque année apporte son lot de défis et de découvertes.
              Voici les projets qui ont marqué mon parcours.
            </motion.p>
          </div>
        </section>

        <div className="divider" />

        {/* Projets grid */}
        <section ref={ref} className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {projets.map((projet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  ease: [0.77, 0, 0.175, 1],
                }}
              >
                <Link href={projet.link}>
                  <div
                    className="group grid grid-cols-1 lg:grid-cols-[200px,1fr,auto] gap-6 lg:gap-12 py-12 border-t cursor-pointer items-start transition-colors duration-300"
                    style={{ borderColor: "var(--border)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                    }}
                  >
                    {/* Numéro + Année */}
                    <div>
                      <span
                        className="font-mono text-xs tracking-widest"
                        style={{ color: "var(--accent)" }}
                      >
                        {projet.number}
                      </span>
                      <p
                        className="font-mono text-xs tracking-wider mt-2"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {projet.year}
                      </p>
                    </div>

                    {/* Contenu */}
                    <div>
                      <h2
                        className="font-display text-3xl md:text-5xl tracking-tight mb-4 transition-colors duration-300 group-hover:text-[var(--accent)]"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {projet.title}
                      </h2>
                      <p
                        className="text-base leading-relaxed mb-6 max-w-xl"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {projet.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {projet.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 border text-xs font-mono tracking-wider"
                            style={{
                              borderColor: "var(--border)",
                              color: "var(--text-muted)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Flèche */}
                    <div className="hidden lg:flex items-center self-center">
                      <motion.span
                        className="text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ color: "var(--accent)" }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            <div className="border-t" style={{ borderColor: "var(--border)" }} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
