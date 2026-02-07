"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";

export default function AboutPage() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  const parcours = [
    {
      number: "01",
      period: "Avant le BUT",
      title: "La Cuisine",
      lieu: "Parc de Fierbois",
      description:
        "Ma première passion. La cuisine m'a enseigné la rigueur, le sens du détail et la capacité de créer quelque chose de mémorable à partir d'ingrédients simples. Ces compétences me suivent encore aujourd'hui dans tout ce que j'entreprends.",
    },
    {
      number: "02",
      period: "2024 — Présent",
      title: "Science des Données",
      lieu: "BUT SD — IUT de Niort",
      description:
        "La découverte de la data science a été un tournant. Analyser, modéliser, visualiser — transformer le chaos en clarté. Actuellement en 2ème année, je me spécialise en machine learning et en visualisation de données.",
    },
    {
      number: "03",
      period: "En continu",
      title: "Auto-hébergement",
      lieu: "Projets personnels",
      description:
        "L'autonomie numérique est une conviction. Je gère mes propres serveurs, déploie mes services, et explore les limites de ce que l'on peut construire soi-même. Chaque configuration est un puzzle que je prends plaisir à résoudre.",
    },
  ];

  const valeurs = [
    { label: "Rigueur", description: "Chaque détail compte, chaque donnée a du sens." },
    { label: "Curiosité", description: "Apprendre est un mode de vie, pas une obligation." },
    { label: "Autonomie", description: "Comprendre les systèmes pour ne pas en dépendre aveuglément." },
    { label: "Créativité", description: "Les meilleures solutions naissent de perspectives inattendues." },
  ];

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-primary)" }}>
        {/* Hero section */}
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <span className="section-number">02 — À propos</span>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
              <div>
                <TextReveal as="h1" className="heading-lg" delay={0.2}>
                  Un parcours
                  <br />
                  <span style={{ color: "var(--accent)" }}>atypique.</span>
                </TextReveal>
              </div>
              <motion.div
                className="flex flex-col justify-end"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Je suis <strong style={{ color: "var(--text-primary)" }}>Mathieu Lopes Moreira</strong>,
                  actuellement en 2ème année de BUT Science des Données.
                  Mon chemin — de la cuisine professionnelle à l&apos;analyse
                  de données — n&apos;a rien de linéaire. Et c&apos;est
                  précisément ce qui fait ma force.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ligne de séparation */}
        <div className="divider" />

        {/* Timeline — Parcours */}
        <section ref={timelineRef} className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {parcours.map((item, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-[200px,1fr] gap-8 lg:gap-16 py-12 border-t"
                style={{ borderColor: "var(--border)" }}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  ease: [0.77, 0, 0.175, 1],
                }}
              >
                {/* Gauche — numéro + période */}
                <div>
                  <span
                    className="font-mono text-xs tracking-widest"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.number}
                  </span>
                  <p
                    className="font-mono text-xs tracking-wider mt-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.period}
                  </p>
                </div>

                {/* Droite — contenu */}
                <div>
                  <h2
                    className="font-display text-3xl md:text-4xl tracking-tight mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h2>
                  <p
                    className="font-mono text-xs tracking-wider mb-6"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.lieu}
                  </p>
                  <p
                    className="text-base leading-relaxed max-w-2xl"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="border-t" style={{ borderColor: "var(--border)" }} />
          </div>
        </section>

        {/* Valeurs */}
        <section
          className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t"
          style={{
            backgroundColor: "var(--bg-secondary)",
            borderColor: "var(--border)",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <span className="section-number">Ce que je porte</span>
            <TextReveal as="h2" className="heading-md mt-4 mb-16">
              Mes <span style={{ color: "var(--accent)" }}>valeurs</span>
            </TextReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "var(--border)" }}>
              {valeurs.map((valeur, index) => (
                <motion.div
                  key={index}
                  className="p-8 md:p-12 transition-colors duration-300"
                  style={{ backgroundColor: "var(--bg-secondary)" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--bg-card)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--bg-secondary)";
                  }}
                >
                  <span
                    className="font-mono text-xs tracking-widest"
                    style={{ color: "var(--accent)" }}
                  >
                    0{index + 1}
                  </span>
                  <h3
                    className="font-display text-2xl mt-3 mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {valeur.label}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {valeur.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
