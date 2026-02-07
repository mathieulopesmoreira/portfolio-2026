"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";

export default function BilansPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bilans = [
    {
      number: "01",
      year: "1ère année",
      title: "Découverte",
      description: "Les fondamentaux de la data science, les premières lignes de code, et la découverte d'un univers qui deviendra une passion.",
      link: "/bilans/annee-1",
      period: "2023 — 2024",
    },
    {
      number: "02",
      year: "2ème année",
      title: "Approfondissement",
      description: "Machine Learning, bases de données avancées, et projets de plus en plus ambitieux. Le moment où la théorie rencontre la pratique.",
      link: "/bilans/annee-2",
      period: "2024 — 2025",
    },
    {
      number: "03",
      year: "3ème année",
      title: "Spécialisation",
      description: "Intelligence artificielle, Big Data, et projets à grande échelle. La dernière marche avant le monde professionnel.",
      link: "/bilans/annee-3",
      period: "2025 — 2026",
    },
  ];

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-primary)" }}>
        {/* Header */}
        <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <span className="section-number">05 — Bilans</span>
            <TextReveal as="h1" className="heading-lg mt-4" delay={0.2}>
              Bilans<br />
              <span style={{ color: "var(--accent)" }}>personnels</span>
            </TextReveal>
            <motion.p
              className="text-lg mt-6 max-w-2xl"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Retour réflexif sur chaque année de formation.
              Ce que j&apos;ai appris, ce que j&apos;ai compris,
              ce qui me reste à explorer.
            </motion.p>
          </div>
        </section>

        <div className="divider" />

        {/* Bilans */}
        <section ref={ref} className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {bilans.map((bilan, index) => (
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
                <Link href={bilan.link}>
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
                    {/* Gauche */}
                    <div>
                      <span
                        className="font-mono text-xs tracking-widest"
                        style={{ color: "var(--accent)" }}
                      >
                        {bilan.number}
                      </span>
                      <p
                        className="font-mono text-xs tracking-wider mt-2"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {bilan.period}
                      </p>
                    </div>

                    {/* Centre */}
                    <div>
                      <h2
                        className="font-display text-3xl md:text-5xl tracking-tight mb-2 transition-colors duration-300 group-hover:text-[var(--accent)]"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {bilan.title}
                      </h2>
                      <p
                        className="font-mono text-xs tracking-wider mb-4"
                        style={{ color: "var(--accent)" }}
                      >
                        {bilan.year}
                      </p>
                      <p
                        className="text-base leading-relaxed max-w-xl"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {bilan.description}
                      </p>
                    </div>

                    {/* Droite */}
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
