"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";

/* ── Section Teaser Projets ── */
function ProjectsTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      number: "01",
      title: "Data Science",
      subtitle: "Analyse & Visualisation",
      year: "1ère année",
    },
    {
      number: "02",
      title: "Machine Learning",
      subtitle: "Modèles prédictifs",
      year: "2ème année",
    },
    {
      number: "03",
      title: "IA & Big Data",
      subtitle: "Projets avancés",
      year: "3ème année",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <span className="section-number">02 — Projets</span>
            <TextReveal as="h2" className="heading-lg mt-4">
              Travaux<br />
              <span style={{ color: "var(--accent)" }}>sélectionnés</span>
            </TextReveal>
          </div>
          <MagneticButton>
            <Link
              href="/projets"
              className="link-underline text-sm font-mono tracking-widest uppercase transition-colors duration-300"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              Tout voir →
            </Link>
          </MagneticButton>
        </div>

        {/* Liste de projets */}
        <div>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.77, 0, 0.175, 1],
              }}
            >
              <Link href={`/projets/annee-${index + 1}`}>
                <div
                  className="group flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-10 border-t cursor-pointer transition-colors duration-300"
                  style={{ borderColor: "var(--border)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span
                      className="font-mono text-xs tracking-widest"
                      style={{ color: "var(--accent)" }}
                    >
                      {project.number}
                    </span>
                    <div>
                      <h3
                        className="font-display text-2xl md:text-4xl tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)]"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <span
                      className="font-mono text-xs tracking-wider"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {project.year}
                    </span>
                    <motion.span
                      className="text-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ color: "var(--accent)" }}
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          {/* Dernière bordure */}
          <div
            className="border-t"
            style={{ borderColor: "var(--border)" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ── Section Teaser À Propos ── */
function AboutTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Gauche */}
          <div>
            <span className="section-number">03 — À propos</span>
            <TextReveal as="h2" className="heading-lg mt-4 mb-8">
              Un parcours
              <br />
              <span style={{ color: "var(--accent)" }}>atypique</span>
            </TextReveal>
          </div>

          {/* Droite */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              De la cuisine à la data science, chaque étape de mon parcours
              m&apos;a appris la rigueur, la créativité et le goût du détail.
              Aujourd&apos;hui, je transforme les données en récits visuels
              et les idées en solutions concrètes.
            </p>
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: "var(--text-secondary)" }}
            >
              Passionné d&apos;auto-hébergement, je crois en l&apos;autonomie
              numérique et la maîtrise de ses propres outils.
            </p>
            <MagneticButton>
              <Link
                href="/a-propos"
                className="link-underline text-sm font-mono tracking-widest uppercase transition-colors duration-300"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                En savoir plus →
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Section Compétences Teaser ── */
function SkillsTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "Python", "Pandas", "NumPy", "Scikit-learn",
    "SQL", "PostgreSQL", "Power BI", "Docker",
    "Git", "Linux", "Jupyter", "R",
  ];

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <span className="section-number">04 — Compétences</span>
        <TextReveal as="h2" className="heading-lg mt-4 mb-16">
          Outils &<br />
          <span style={{ color: "var(--accent)" }}>technologies</span>
        </TextReveal>

        <motion.div
          className="flex flex-wrap gap-3 md:gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.77, 0, 0.175, 1],
              }}
              className="px-5 py-2.5 border text-sm font-mono tracking-wider transition-all duration-300 cursor-default"
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
        </motion.div>

        <div className="mt-12">
          <MagneticButton>
            <Link
              href="/competences"
              className="link-underline text-sm font-mono tracking-widest uppercase transition-colors duration-300"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              Toutes les compétences →
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

/* ── CTA Contact ── */
function ContactCTA() {
  return (
    <section
      className="py-24 md:py-40 px-6 md:px-12 lg:px-24 border-t text-center"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <span className="section-number">05 — Contact</span>
        <TextReveal as="h2" className="heading-xl mt-6 mb-8">
          Travaillons<br />
          <span style={{ color: "var(--accent)" }}>ensemble</span>
        </TextReveal>
        <motion.p
          className="text-lg mb-12 max-w-xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Un projet, une question, ou simplement envie d&apos;échanger ?
        </motion.p>
        <MagneticButton>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 border text-sm font-medium tracking-widest uppercase transition-all duration-500"
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
            Me contacter
          </Link>
        </MagneticButton>
      </div>
    </section>
  );
}

/* ── Page Principale ── */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectsTeaser />
      <AboutTeaser />
      <SkillsTeaser />
      <ContactCTA />
      <Footer />
    </main>
  );
}
