"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function BilanAnnee1() {


  const sections = [
    {
      title: "Introduction",
      paragraphs: [
        "Au seuil de mon entrée en alternance, je tire un bilan très positif de cette année universitaire. Elle fut à la fois une confirmation de mon orientation et une période d'apprentissage intense qui m'a permis de mieux cerner mes compétences et mes axes de progression en vue de mon futur parcours professionnel."
      ],
    },
    {
      title: "1. La collaboration comme moteur de réussite",
      paragraphs: [
        "La conduite de projets multiples fut sans conteste l'expérience la plus marquante de l'année. Chaque projet m'a immergé dans une dynamique de travail collectif, m'obligeant à développer une communication claire et une réelle capacité d'écoute pour parvenir à un consensus. J'ai constaté que mon inclination naturelle à la médiation plutôt qu'à l'imposition d'idées a été un facteur clé pour assurer la cohésion des équipes et la réussite de nos objectifs. Ces expériences pratiques ont été le véritable socle du développement de mes compétences organisationnelles."
      ],
    },
    {
      title: "2. Lucidité sur un défi majeur : les mathématiques",
      paragraphs: [
        "En toute transparence, ma principale difficulté se situe en mathématiques théoriques. L'abstraction des concepts et la complexité du vocabulaire créent chez moi une barrière initiale qui a un fort effet démotivant. Je dois reconnaître que ce découragement m'a souvent empêché de fournir l'effort soutenu et régulier qui serait indispensable pour surmonter ces obstacles. Mes résultats, en deçà de mes attentes, sont donc le reflet logique de cette situation : une matière que j'ai du mal à aborder et, par conséquent, un investissement en travail qui s'en est ressenti.",
        "Cette situation m'a cependant forcé à une introspection. Je réalise aujourd'hui que ma méthode de travail habituelle, basée sur l'écoute et la relecture, n'est absolument pas adaptée à cette discipline qui exige une approche différente."
      ],
    },
    {
      title: "3. Développement de compétences comportementales",
      paragraphs: [
        "Parallèlement aux savoirs techniques, cette année m'a contraint à développer un ensemble de compétences comportementales essentielles. La multiplication des échéances et la complexité des projets m'ont appris à mieux structurer mon travail, à hiérarchiser les priorités et, par conséquent, à gérer plus sereinement la pression. Je me sens aujourd'hui bien mieux armé pour faire face aux exigences du monde professionnel."
      ],
    },
    {
      title: "Conclusion et plan d'action",
      paragraphs: [
        "Au final, je sors de cette année non pas seulement avec de nouvelles connaissances, mais avec une meilleure compréhension de mon propre fonctionnement. J'ai pu confirmer mes forces en matière de collaboration tout en identifiant avec précision un point de vigilance qui nécessitera une approche nouvelle et plus stratégique."
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
              01 — Fondation
            </span>
            <h1 className="font-display text-display-md md:text-display-lg mb-6">
              Bilan
              <br />
              <span style={{ color: "var(--accent)" }}>1ère Année</span>
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
