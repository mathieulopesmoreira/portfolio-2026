"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function BilanAnnee2() {


  const sections = [
    {
      title: "Introduction",
      paragraphs: [
        "Cette deuxième année de BUT Science des Données a été une année importante dans mon parcours, marquée à la fois par des défis et une évolution personnelle significative. Elle m'a permis de mieux me connaître en tant qu'étudiant, notamment dans ma manière d'apprendre, de m'organiser et de faire face aux difficultés."
      ],
    },
    {
      title: "1. De la théorie à la pratique : la force des projets",
      paragraphs: [
        "Tout au long de l'année, j'ai été confronté à des enseignements variés, mêlant théorie et pratique. Les projets réalisés ont été particulièrement marquants, car ils m'ont permis de sortir du cadre purement académique pour travailler sur des problématiques concrètes. Ce sont ces situations, plus proches de la réalité professionnelle, qui m'ont le plus motivé et qui ont renforcé mon intérêt pour le domaine de la donnée. Ils m'ont aussi permis de développer une certaine autonomie dans ma manière de travailler et de mieux comprendre comment mobiliser mes connaissances dans des contextes différents."
      ],
    },
    {
      title: "2. Face aux obstacles : persévérance en mathématiques",
      paragraphs: [
        "Cependant, cette année n'a pas été exempte de difficultés, notamment dans les matières à dominante mathématique. Au début, certains concepts étaient plus complexes à appréhender, ce qui a pu me freiner dans ma progression. Avec le recul, cette difficulté m'a permis de développer de la persévérance. En m'investissant davantage et en retravaillant les notions, j'ai progressivement réussi à progresser, ce qui constitue pour moi une réelle satisfaction."
      ],
    },
    {
      title: "3. Concilier cours et alternance : gestion du temps",
      paragraphs: [
        "Au-delà des aspects académiques, cette année m'a également appris à mieux gérer mon temps et ma charge de travail. Le fait de devoir concilier formation et alternance m'a poussé à m'organiser de manière plus rigoureuse et à gagner en efficacité."
      ],
    },
    {
      title: "Conclusion et perspectives d'avenir",
      paragraphs: [
        "Enfin, cette année a confirmé mon projet personnel. Je souhaite m'orienter vers le métier de data engineer, en lien avec mon intérêt pour la manipulation et la structuration des données. Dans cette continuité, j'envisage de poursuivre mes études dans une école, idéalement à Paris, tout en ayant pour objectif de rester au sein du groupe Covéa si l'opportunité se présente."
      ],
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
              <div className="space-y-4">
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-lg leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
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
