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
      title: "Création d'un reporting Excel/VBA",
      description: "Développement d'un outil de reporting automatisé avec Excel et VBA.",
      details: "La création d'un reporting Excel VBA pour un BUT SD en première année repose sur une application dotée de UserForms reliés à une base de données contenant les notes et les coefficients des modules. L'utilisateur saisit ou sélectionne l'étudiant via le UserForm et accède à un tableau de bord interactif où chaque module affiche sa note ainsi que son coefficient. Le code VBA récupère ces informations pour calculer directement la moyenne pondérée en fonction des coefficients, puis affiche le résultat sur le tableau de bord. Un simple clic permet de mettre à jour le rapport et de suivre l'évolution des performances pédagogiques.",
      tags: ["Excel", "VBA", "Reporting"],
      zip: "/projects/zips/vba.xlsm",
    },
    {
      title: "Écriture et lecture de fichier",
      description: "Manipulation de fichiers (JSON, CSV) en Python pour le traitement de données.",
      details: "Le projet d'écriture et lecture de fichiers consiste à créer un script Python qui lit un fichier JSON, extrait les données structurées (par exemple des objets contenant des clés « nom », « date », « valeur ») puis les convertit en un format CSV exploitable. En pratique, on utilise le module json pour charger le contenu du JSON dans des dictionnaires Python, puis le module csv pour écrire chaque enregistrement sous forme de ligne, en définissant les en-têtes à partir des clés communes.",
      tags: ["Python", "JSON", "CSV"],
    },
    {
      title: "Analyse exploratoire avec Sphinx",
      description: "Documentation et analyse initiale de jeux de données avec l'outil Sphinx.",
      details: "Le projet d'analyse exploratoire avec Sphinx IQ3 consistait à importer l'enquête sur la vie étudiante à Niort, puis à construire plusieurs graphiques (histogrammes, diagrammes en barres, camemberts, nuages de points) pour visualiser les principaux indicateurs : répartition démographique, niveau de satisfaction vis-à-vis des infrastructures (logement, restauration, loisirs), temps de trajet domicile-campus, et taux de participation aux activités associatives. À l'aide des fonctions de filtres et de croisements dynamiques de Sphinx IQ3, on a pu identifier les profils d'étudiants les plus concernés par certaines problématiques.",
      tags: ["Sphinx IQ3", "Statistiques", "Enquêtes"],
      zip: "/projects/zips/sphinx.zip",
    },
    {
      title: "Production de données en entreprise",
      description: "Compréhension du cycle de vie et des enjeux de la donnée en milieu professionnel.",
      details: "Le projet « Production de données en entreprise » avec Excel consistait à importer les fichiers open data de l'Insee, nettoyer et structurer les données, puis utiliser des tableaux croisés dynamiques pour calculer le taux de chômage par région et par tranche d'âge, ainsi que la répartition hommes/femmes. Des formules de base (pourcentages, totaux) ont permis de synthétiser ces indicateurs. Enfin, des graphiques (barres pour la répartition hommes/femmes, courbes pour l'évolution du chômage) ont mis en évidence les principales disparités régionales et de genre.",
      tags: ["Excel", "Open Data", "INSEE"],
      zip: "/projects/zips/insee.pdf",
    },
    {
      title: "Présentation d'un territoire économique",
      description: "Analyse et présentation des caractéristiques socio-économiques d'une région.",
      details: "Le projet « Présentation d'un territoire économique » consistait à élaborer un PowerPoint professionnel présentant les territoires ayant accueilli les Jeux Olympiques, avec un focus sur Séoul 1988. Via des diapositives claires et structurées, on décrivait le contexte économique de la ville hôte : ses infrastructures développées pour l'événement (stades, réseaux de transport), l'impact sur l'emploi et l'urbanisme, et l'attractivité touristique générée. Chaque diapositive utilisait des graphiques synthétiques pour illustrer l'évolution du PIB local, les investissements publics et l'essor des secteurs clés (construction, hôtellerie), offrant ainsi une vision globale de l'influence économique des JO de Séoul.",
      tags: ["PowerPoint", "Économie", "JO 1988"],
      zip: "/projects/zips/seoul.pptx",
    },
    {
      title: "Mise en œuvre d'une enquête",
      description: "Conception, réalisation et analyse des résultats d'une enquête.",
      details: "Le projet « Mise en œuvre d'une enquête » consistait à créer, paramétrer et diffuser un questionnaire sous Sphinx IQ3 destiné aux étudiants pour recueillir leurs habitudes et perceptions liées au sport. À partir de grilles de questions fermées et ouvertes (pratiques sportives, fréquence, satisfaction des installations, motivations), on a configuré les différents types de questions (choix multiples, échelle de Likert, zones de saisie libre). L'interface de Sphinx IQ3 a permis de suivre en temps réel le taux de réponse, de vérifier la cohérence des données et de préparer ultérieurement des analyses statistiques selon les profils (année d'étude, filière, genre).",
      tags: ["Sphinx IQ3", "Questionnaire", "Sport"],
    },
    {
      title: "Conception d'une base de données",
      description: "Modélisation (MCD, MLD) et création d'une base de données relationnelle.",
      details: "Le projet « Conception d'une base de données » pour les sauniers de l'Île de Ré reposait sur la modélisation conceptuelle avec Looping MCD afin de structurer les entités (sauniers, bassins, récoltes, ventes). À partir de ce MCD, on a généré le schéma relationnel puis créé la base MySQL via phpMyAdmin. Enfin, une interface Tkinter en Python a été développée pour automatiser la saisie, la modification et l'interrogation des données des sauniers.",
      tags: ["MySQL", "Looping MCD", "Python", "Tkinter"],
      zip: "/projects/zips/selmarin.zip",
    },
    {
      title: "Datavisualisation",
      description: "Création de graphiques et tableaux de bord interactifs pour l'exploration de données.",
      details: "Le projet de datavisualisation consiste à créer une infographie synthétique à partir de données de l'INSEE. L'objectif est d'extraire et de visualiser les informations clés sur la population des 15-29 ans et leurs études entre 2010 et 2021. L'infographie visera à rendre ces données complexes accessibles et compréhensibles pour en tirer le maximum de connaissances sur cette tranche d'âge.",
      tags: ["INSEE", "Infographie", "Dataviz"],
      zip: "/projects/zips/dataviz.pdf",
    },
    {
      title: "ADRD (Analyse, Reporting & Dataviz)",
      description: "Projet complet : analyse de données, reporting et datavisualisation.",
      details: "Le projet a englobé l'intégralité du cycle de vie de la donnée, de sa source à sa présentation visuelle. Il a commencé par la collecte et le nettoyage de données brutes issues de Calyxis et de l'Observatoire MaVie, processus méticuleusement exécuté via Python. Ensuite, une interface graphique conviviale a été développée à l'aide de Tkinter, offrant une interaction facilitée avec les données. Au cœur de l'analyse, le projet a mis l'accent sur le calcul et l'interprétation d'indicateurs de performance clés, incluant l'application du test statistique du Chi-deux pour dégager des relations significatives. Enfin, toutes ces étapes ont convergé vers la création d'un tableau de bord de datavisualisation dynamique sur Power BI, servant de support pour un reporting clair et percutant, transformant ainsi des informations complexes en insights exploitables.",
      tags: ["Python", "Tkinter", "Power BI", "Chi-deux"],
    },
    {
      title: "Portfolio",
      description: "Création du portfolio professionnel en ligne.",
      details: "Conception et développement du présent site web portfolio. Ce projet a permis de mettre en pratique les technologies web front-end (HTML5, CSS3, JavaScript) pour créer une vitrine professionnelle présentant mes compétences, mes expériences et les projets réalisés au cours de ma formation.",
      tags: ["HTML", "CSS", "JavaScript", "Frontend"],
    },
    {
      title: "Estimation par échantillonnage",
      description: "Application des techniques d'échantillonnage pour l'estimation statistique.",
      details: "Le projet d'estimation par échantillonnage a consisté à réaliser des estimations d'une population à l'aide de strates, en utilisant le langage R. Ce travail a impliqué la conception d'un plan d'échantillonnage stratifié pour garantir la représentativité et la précision des estimations, suivi de l'application des méthodes statistiques appropriées dans R pour calculer les estimateurs et leurs intervalles de confiance.",
      tags: ["R", "Statistiques", "Échantillonnage"],
      zip: "/projects/zips/estimation.zip",
    },
    {
      title: "Régression sur des données réelles",
      description: "Modélisation prédictive avec des techniques de régression linéaire.",
      details: "Le projet de régression sur données réelles a consisté à prédire le prix des ventes immobilières dans les Deux-Sèvres. Pour ce faire, des modèles de régression linéaire simple ont été développés et appliqués en utilisant le langage R, permettant d'établir des relations prédictives basées sur des caractéristiques immobilières concrètes.",
      tags: ["R", "Régression linéaire", "Immobilier"],
      zip: "/projects/zips/regression.zip",
    },
    {
      title: "Indicateurs de performance",
      description: "Définition, calcul et suivi d'indicateurs clés de performance (KPI).",
      details: "Ce projet a consisté à mener une analyse approfondie et concrète de la performance de l'entreprise Fleury Michon. L'objectif principal était d'identifier, de calculer et d'interpréter des indicateurs clés de performance pertinents pour l'activité de l'entreprise. Cette démarche a abouti à la création d'un tableau de bord synthétique et visuel. Ce tableau de bord a permis de consolider toutes les données d'analyse, offrant ainsi une vue d'ensemble claire et rapide de la santé financière, opérationnelle, ou commerciale de Fleury Michon. Il servait à transformer des données brutes en informations exploitables pour le suivi et potentiellement la prise de décision.",
      tags: ["KPI", "Tableau de bord", "Analyse financière"],
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
          <div className="space-y-20">
            {/* Semestre 1 */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 border-b pb-4"
                style={{ borderColor: "var(--border)" }}
              >
                <h2 className="text-xl md:text-2xl font-mono uppercase tracking-wider" style={{ color: "var(--accent)" }}>
                  Semestre 1
                </h2>
              </motion.div>
              <div>
                {projects.slice(0, 6).map((project, index) => (
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
                        <h3 className="text-2xl md:text-3xl font-display mb-3 transition-colors duration-300 group-hover:text-[var(--accent)]">
                          {project.title}
                        </h3>
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
            </div>

            {/* Semestre 2 */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8 border-b pb-4"
                style={{ borderColor: "var(--border)" }}
              >
                <h2 className="text-xl md:text-2xl font-mono uppercase tracking-wider" style={{ color: "var(--accent)" }}>
                  Semestre 2
                </h2>
              </motion.div>
              <div>
                {projects.slice(6).map((project, index) => {
                  const absoluteIndex = index + 6;
                  return (
                    <motion.article
                      key={absoluteIndex}
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
                            {String(absoluteIndex + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div className="md:col-span-7">
                          <h3 className="text-2xl md:text-3xl font-display mb-3 transition-colors duration-300 group-hover:text-[var(--accent)]">
                            {project.title}
                          </h3>
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
                  );
                })}
              </div>
            </div>
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
