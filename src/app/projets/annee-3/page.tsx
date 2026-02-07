"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ProjectModal, { type ProjectData } from "@/components/ProjectModal";

export default function ProjetsAnnee3() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      title: "Projet Deep Learning",
      description:
        "Réseau de neurones pour la reconnaissance d'images avec TensorFlow. Architecture CNN, augmentation de données, transfer learning et déploiement.",
      details:
        "Développement d'un système de classification d'images basé sur les réseaux de neurones convolutifs.\n\nArchitecture et méthodologie :\n• Dataset de 40 000 images réparties en 10 classes\n• Preprocessing : redimensionnement, normalisation, augmentation (rotation, flip, zoom)\n• Architecture CNN custom inspirée de VGG avec batch normalization et dropout\n• Transfer learning avec ResNet50 pré-entraîné sur ImageNet\n• Fine-tuning des couches supérieures pour le domaine spécifique\n• Callbacks : early stopping, learning rate scheduling, model checkpoint\n• Déploiement de l'inférence via API Flask\n\nAccuracy finale : 97.1% avec le modèle fine-tuné ResNet50.",
      tags: ["Python", "TensorFlow", "Keras", "Deep Learning", "CNN"],
      screenshot: "/projects/screenshots/annee-3-projet-1.png",
      zip: "/projects/zips/annee-3-projet-1.zip",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Big Data avec Spark",
      description:
        "Analyse de données massives avec Apache Spark et PySpark. Traitement distribué, ETL pipelines et analyses à grande échelle.",
      details:
        "Projet de traitement de données massives simulant un environnement de production Big Data.\n\nInfrastructure et pipeline :\n• Cluster Spark local multi-nœuds pour le développement\n• Ingestion de fichiers CSV et JSON volumétriques (> 10 Go)\n• ETL avec PySpark : nettoyage, transformation, agrégation\n• Spark SQL pour les requêtes analytiques complexes\n• Optimisations : partitioning, caching, broadcast joins\n• Écriture des résultats en Parquet pour un stockage optimisé\n• Monitoring avec Spark UI\n\nTemps de traitement réduit de 4h (Pandas) à 12 minutes (Spark) sur le même dataset.",
      tags: ["PySpark", "Hadoop", "Big Data", "Python"],
      screenshot: "/projects/screenshots/annee-3-projet-2.png",
      zip: "/projects/zips/annee-3-projet-2.zip",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Pipeline MLOps",
      description:
        "Mise en production de modèles ML avec CI/CD et monitoring. Versioning des modèles, tests automatisés et observabilité.",
      details:
        "Mise en place d'une infrastructure MLOps complète pour industrialiser le cycle de vie des modèles ML.\n\nStack technique :\n• MLflow pour le tracking des expériences et le model registry\n• DVC pour le versioning des données et des modèles\n• Docker et Docker Compose pour la containerisation\n• GitHub Actions pour le CI/CD : tests, build, déploiement\n• FastAPI pour l'API de serving du modèle\n• Prometheus + Grafana pour le monitoring des prédictions\n• Tests automatisés : unitaires, intégration, drift detection\n\nPipeline end-to-end automatisé : du commit au déploiement en production en < 15 min.",
      tags: ["MLflow", "Docker", "Kubernetes", "FastAPI", "CI/CD"],
      screenshot: "/projects/screenshots/annee-3-projet-3.png",
      zip: "/projects/zips/annee-3-projet-3.zip",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Projet de fin d'études",
      description:
        "Système de recommandation intelligent basé sur l'IA. Architecture complète du back-end au front-end avec déploiement cloud.",
      details:
        "Projet de fin d'études : conception et développement d'un système de recommandation complet.\n\nArchitecture full-stack :\n• Backend Python avec FastAPI et PostgreSQL\n• Moteur de recommandation : collaborative filtering + content-based hybride\n• Entraînement avec TensorFlow (embeddings, neural collaborative filtering)\n• Frontend React avec interface utilisateur interactive\n• Containerisation complète avec Docker Compose\n• Déploiement sur infrastructure cloud\n• Tests de charge et optimisation des performances\n\nRésultats :\n• NDCG@10 de 0.82 sur le jeu de test\n• Temps de réponse moyen < 100ms\n• Projet noté 18/20 — mention du jury",
      tags: ["Python", "TensorFlow", "PostgreSQL", "Docker", "React"],
      screenshot: "/projects/screenshots/annee-3-projet-4.png",
      zip: "/projects/zips/annee-3-projet-4.zip",
      github: "#",
      demo: "#",
      featured: true,
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
              03 — Expertise
            </span>
            <h1 className="font-display text-display-md md:text-display-lg mb-6">
              Projets
              <br />
              <span style={{ color: "var(--accent)" }}>3ème Année</span>
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Projets majeurs en IA, deep learning et big data —
              aboutissement du parcours et maîtrise des technologies avancées.
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
                  <div className="md:col-span-1 flex flex-col items-start gap-2">
                    <span className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {project.featured && (
                      <span
                        className="text-[10px] font-mono uppercase tracking-widest px-2 py-1"
                        style={{ backgroundColor: "var(--accent)", color: "var(--bg-primary)" }}
                      >
                        Majeur
                      </span>
                    )}
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
            className="mt-20 flex justify-start"
          >
            <Link
              href="/projets/annee-2"
              className="group inline-flex items-center gap-4 font-display text-xl md:text-2xl transition-colors duration-300 hover:text-[var(--accent)]"
            >
              <span
                className="w-12 h-px transition-all duration-300 group-hover:w-20"
                style={{ backgroundColor: "var(--accent)" }}
              />
              2ème Année
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
