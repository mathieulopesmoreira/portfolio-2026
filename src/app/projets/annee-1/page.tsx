"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ProjectModal, { type ProjectData } from "@/components/ProjectModal";

export default function ProjetsAnnee1() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      title: "Analyse de données COVID-19",
      description:
        "Visualisation et analyse des données de la pandémie avec Python. Exploration de datasets massifs, création de visualisations interactives et identification de tendances clés.",
      details:
        "Ce projet consistait à exploiter les données ouvertes de la pandémie COVID-19 pour en extraire des insights pertinents.\n\nObjectifs principaux :\n• Collecte et nettoyage de données issues de sources multiples (Johns Hopkins, WHO)\n• Création de visualisations interactives : courbes de tendance, cartes choroplèthes, histogrammes\n• Analyse des corrélations entre variables (densité de population, mesures sanitaires, taux de mortalité)\n• Rédaction d'un rapport de synthèse avec recommandations\n\nCe projet m'a permis de maîtriser le workflow complet d'analyse de données, de la collecte à la présentation des résultats.",
      tags: ["Python", "Pandas", "Matplotlib"],
      screenshot: "/projects/screenshots/annee-1-projet-1.png",
      zip: "/projects/zips/annee-1-projet-1.zip",
      github: "#",
      demo: "#",
    },
    {
      title: "Dashboard Excel interactif",
      description:
        "Création de tableaux de bord dynamiques pour l'analyse de ventes. Automatisation de rapports avec VBA et extraction de données avec Power Query.",
      details:
        "Développement d'un tableau de bord Excel complet pour le suivi des performances commerciales.\n\nFonctionnalités :\n• Tableaux croisés dynamiques avec segmenteurs interactifs\n• Macros VBA pour l'automatisation de la mise à jour des données\n• Connexion Power Query à des sources de données externes\n• Graphiques dynamiques avec mise en forme conditionnelle\n• Export automatique de rapports PDF hebdomadaires\n\nCe projet a démontré ma capacité à produire des outils d'aide à la décision accessibles et professionnels.",
      tags: ["Excel", "VBA", "Power Query"],
      screenshot: "/projects/screenshots/annee-1-projet-2.png",
      zip: "/projects/zips/annee-1-projet-2.zip",
      github: "#",
      demo: "#",
    },
    {
      title: "Base de données SQL",
      description:
        "Conception et gestion d'une base de données relationnelle. Modélisation de schémas, requêtes complexes et optimisation des performances.",
      details:
        "Projet de conception d'un système de base de données relationnelle complet pour une application fictive de gestion.\n\nÉtapes réalisées :\n• Modélisation conceptuelle (MCD/MLD) avec identification des entités et relations\n• Création du schéma physique avec contraintes d'intégrité\n• Écriture de requêtes SQL avancées (jointures, sous-requêtes, fonctions d'agrégation)\n• Optimisation des performances avec index et analyse des plans d'exécution\n• Procédures stockées et triggers pour la logique métier\n\nJ'ai acquis une solide compréhension des SGBD relationnels et des bonnes pratiques de modélisation.",
      tags: ["SQL", "PostgreSQL", "Modélisation"],
      screenshot: "/projects/screenshots/annee-1-projet-3.png",
      zip: "/projects/zips/annee-1-projet-3.zip",
      github: "#",
      demo: "#",
    },
    {
      title: "Nettoyage de données",
      description:
        "Traitement et nettoyage d'un dataset volumineux avec Python. Gestion des valeurs manquantes, détection d'anomalies et normalisation.",
      details:
        "Prise en charge d'un dataset brut de plus de 100 000 enregistrements pour le rendre exploitable en analyse.\n\nTraitements effectués :\n• Identification et traitement des valeurs manquantes (imputation, suppression raisonnée)\n• Détection et correction des doublons\n• Normalisation et standardisation des formats (dates, adresses, catégories)\n• Détection d'outliers avec méthodes statistiques (IQR, Z-score)\n• Documentation complète du pipeline de nettoyage\n\nCe projet m'a appris que 80% du temps d'un data scientist est consacré à la préparation des données.",
      tags: ["Python", "Pandas", "NumPy"],
      screenshot: "/projects/screenshots/annee-1-projet-4.png",
      zip: "/projects/zips/annee-1-projet-4.zip",
      github: "#",
      demo: "#",
    },
    {
      title: "Statistiques descriptives",
      description:
        "Analyse statistique approfondie et visualisation de données. Tests d'hypothèses, corrélations et représentations graphiques avancées.",
      details:
        "Projet d'analyse statistique complète sur un jeu de données réel (données socio-économiques).\n\nAnalyses réalisées :\n• Statistiques descriptives : mesures de tendance centrale, dispersion, forme\n• Tests d'hypothèses : t-test, chi², ANOVA\n• Analyse de corrélations et régressions simples\n• Visualisations avancées : boxplots, heatmaps, pair plots, distributions\n• Rédaction d'un rapport statistique avec interprétation des résultats\n\nCe projet a consolidé mes bases en statistiques et en interprétation rigoureuse des données.",
      tags: ["Python", "Scipy", "Seaborn"],
      screenshot: "/projects/screenshots/annee-1-projet-5.png",
      zip: "/projects/zips/annee-1-projet-5.zip",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <PageTransition>
      <Navbar />
      <main
        className="min-h-screen pt-32 pb-24"
        style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/projets"
              className="inline-flex items-center gap-3 text-sm font-mono uppercase tracking-widest mb-16 group"
              style={{ color: "var(--text-secondary)" }}
            >
              <span
                className="w-8 h-px transition-all duration-300 group-hover:w-12"
                style={{ backgroundColor: "var(--accent)" }}
              />
              Retour aux projets
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
              01 — Fondamentaux
            </span>
            <h1 className="font-display text-display-md md:text-display-lg mb-6">
              Projets
              <br />
              <span style={{ color: "var(--accent)" }}>1ère Année</span>
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Mes premiers projets en data science — apprentissage des fondamentaux,
              découverte des outils et construction d&apos;une méthodologie rigoureuse.
            </p>
          </motion.header>

          {/* Projects list */}
          <div>
            {projects.map((project, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
                className="group py-10 border-b transition-colors duration-300 cursor-pointer"
                style={{ borderColor: "var(--border)" }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                  <div className="md:col-span-1">
                    <span className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-7">
                    <h2 className="text-2xl md:text-3xl font-display mb-3 transition-colors duration-300 group-hover:text-[var(--accent)]">
                      {project.title}
                    </h2>
                    <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {project.description}
                    </p>
                  </div>
                  <div className="md:col-span-4 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider border transition-colors duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]"
                          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span
                      className="text-sm font-mono uppercase tracking-wider transition-colors duration-300 group-hover:text-[var(--accent)]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Voir le détail →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Project Modal */}
          <ProjectModal
            project={selectedProject}
            isOpen={selectedProject !== null}
            onClose={() => setSelectedProject(null)}
          />

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 flex justify-end"
          >
            <Link
              href="/projets/annee-2"
              className="group inline-flex items-center gap-4 font-display text-xl md:text-2xl transition-colors duration-300 hover:text-[var(--accent)]"
            >
              2ème Année
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
