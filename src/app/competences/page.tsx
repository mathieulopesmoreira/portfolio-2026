"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";

export default function SkillsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      number: "01",
      title: "Data Science & Analyse",
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "R", "Jupyter Notebook"],
    },
    {
      number: "02",
      title: "Bases de Données & BI",
      skills: ["SQL", "PostgreSQL", "MongoDB", "Power BI", "Tableau", "Excel Avancé"],
    },
    {
      number: "03",
      title: "Développement & Outils",
      skills: ["Git", "GitHub", "Docker", "Linux", "Auto-hébergement", "VS Code", "HTML/CSS", "Next.js"],
    },
  ];

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-primary)" }}>
        {/* Header */}
        <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <span className="section-number">04 — Compétences</span>
            <TextReveal as="h1" className="heading-lg mt-4" delay={0.2}>
              Outils &<br />
              <span style={{ color: "var(--accent)" }}>technologies</span>
            </TextReveal>
            <motion.p
              className="text-lg mt-6 max-w-2xl"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Les technologies que j&apos;utilise au quotidien, organisées par domaine d&apos;expertise.
            </motion.p>
          </div>
        </section>

        <div className="divider" />

        {/* Compétences par catégorie */}
        <section ref={ref} className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto space-y-0">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className="grid grid-cols-1 lg:grid-cols-[200px,1fr] gap-8 lg:gap-16 py-12 border-t"
                style={{ borderColor: "var(--border)" }}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: catIndex * 0.2,
                  ease: [0.77, 0, 0.175, 1],
                }}
              >
                {/* Gauche */}
                <div>
                  <span
                    className="font-mono text-xs tracking-widest"
                    style={{ color: "var(--accent)" }}
                  >
                    {category.number}
                  </span>
                  <h2
                    className="font-display text-xl mt-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {category.title}
                  </h2>
                </div>

                {/* Droite — Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: catIndex * 0.2 + skillIndex * 0.05,
                      }}
                      className="px-5 py-2.5 border text-sm font-mono tracking-wider cursor-default transition-all duration-300"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--text-secondary)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.color = "var(--accent)";
                        e.currentTarget.style.backgroundColor = "var(--accent-subtle)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--text-secondary)";
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
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
