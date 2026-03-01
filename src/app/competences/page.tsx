"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";

interface Skill {
  name: string;
  tooltip: string;
}

function SkillTag({
  skill,
  catIndex,
  skillIndex,
  isInView,
}: {
  skill: Skill;
  catIndex: number;
  skillIndex: number;
  isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const tagRef = useRef<HTMLDivElement>(null);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (hovered && tagRef.current) {
      const rect = tagRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const tooltipWidth = 280;
      const margin = 12;

      let left = centerX - tooltipWidth / 2;
      // Empêcher le débordement à gauche
      if (left < margin) left = margin;
      // Empêcher le débordement à droite
      if (left + tooltipWidth > window.innerWidth - margin) {
        left = window.innerWidth - margin - tooltipWidth;
      }

      setTooltipStyle({
        position: "fixed" as const,
        top: rect.top - 12,
        left,
        width: tooltipWidth,
        transform: "translateY(-100%)",
      });
    }
  }, [hovered]);

  return (
    <motion.div
      ref={tagRef}
      className="relative"
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.4,
        delay: catIndex * 0.2 + skillIndex * 0.05,
      }}
    >
      <div
        className="group relative px-5 py-3 border text-sm font-mono tracking-wider cursor-default transition-all duration-300 flex items-center gap-2.5"
        style={{
          borderColor: hovered ? "var(--accent)" : "var(--border)",
          color: hovered ? "var(--accent)" : "var(--text-secondary)",
          backgroundColor: hovered ? "var(--accent-subtle)" : "transparent",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Petit diamant décoratif */}
        <span
          className="inline-block w-1.5 h-1.5 rotate-45 flex-shrink-0 transition-colors duration-300"
          style={{
            backgroundColor: hovered ? "var(--accent)" : "var(--text-muted)",
          }}
        />
        <span className="whitespace-nowrap">{skill.name}</span>
      </div>

      {/* Infobulle */}
      <AnimatePresence>
        {hovered && (
          <div
            className="z-50 pointer-events-none"
            style={tooltipStyle}
          >
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div
                className="px-4 py-3 text-xs leading-relaxed text-left border backdrop-blur-sm"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--accent)",
                  color: "var(--text-primary)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                {skill.tooltip}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function SkillsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      number: "01",
      title: "Data Science & Analyse",
      skills: [
        { name: "Python", tooltip: "Langage principal pour l'analyse de données, le scripting et le machine learning." },
        { name: "Pandas", tooltip: "Manipulation et nettoyage de jeux de données tabulaires." },
        { name: "NumPy", tooltip: "Calculs numériques et opérations matricielles performantes." },
        { name: "Scikit-learn", tooltip: "Modèles de machine learning : classification, régression, clustering." },
        { name: "Matplotlib", tooltip: "Création de graphiques et visualisations statiques." },
        { name: "Seaborn", tooltip: "Visualisations statistiques élégantes basées sur Matplotlib." },
        { name: "R", tooltip: "Analyses statistiques et visualisations avancées." },
        { name: "Jupyter Notebook", tooltip: "Environnement interactif pour l'exploration de données." },
      ],
    },
    {
      number: "02",
      title: "Bases de Données & BI",
      skills: [
        { name: "SQL", tooltip: "Requêtes, jointures et manipulation de bases relationnelles." },
        { name: "PostgreSQL", tooltip: "SGBD relationnel avancé pour la gestion de données structurées." },
        { name: "MongoDB", tooltip: "Base NoSQL orientée documents pour données flexibles." },
        { name: "Power BI", tooltip: "Tableaux de bord interactifs et rapports analytiques." },
        { name: "Tableau", tooltip: "Visualisation de données et exploration interactive." },
        { name: "Excel Avancé", tooltip: "Formules complexes, tableaux croisés dynamiques et macros." },
      ],
    },
    {
      number: "03",
      title: "Développement & Outils",
      skills: [
        { name: "Git", tooltip: "Gestion de versions et suivi des modifications du code." },
        { name: "GitHub", tooltip: "Hébergement de dépôts, collaboration et CI/CD." },
        { name: "Docker", tooltip: "Conteneurisation d'applications pour un déploiement reproductible." },
        { name: "Linux", tooltip: "Administration système, scripts shell et serveurs." },
        { name: "Auto-hébergement", tooltip: "Déploiement de services personnels sur infrastructure propre." },
        { name: "VS Code", tooltip: "Éditeur de code principal pour le développement au quotidien." },
        { name: "HTML / CSS", tooltip: "Structuration et mise en forme de pages web." },
        { name: "Next.js", tooltip: "Framework React pour le rendu côté serveur et les sites statiques." },
      ],
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
              Survolez une compétence pour en savoir plus.
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
                    <SkillTag
                      key={skill.name}
                      skill={skill}
                      catIndex={catIndex}
                      skillIndex={skillIndex}
                      isInView={isInView}
                    />
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
