"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ProjectModal, { type ProjectData } from "@/components/ProjectModal";

export default function ProjetsAnnee2() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      title: "Machine Learning — Classification",
      description:
        "Modèle de classification avec scikit-learn pour prédire des résultats. Entraînement, validation croisée et optimisation d'hyperparamètres.",
      details:
        "Développement d'un pipeline complet de machine learning pour un problème de classification binaire.\n\nÉtapes du projet :\n• Exploration et préparation des données (feature engineering, encodage, scaling)\n• Entraînement de plusieurs modèles : régression logistique, Random Forest, SVM, XGBoost\n• Validation croisée k-fold et comparaison des performances\n• Optimisation des hyperparamètres avec GridSearchCV et RandomizedSearchCV\n• Analyse de la matrice de confusion, courbes ROC/AUC, rapport de classification\n• Sérialisation du meilleur modèle avec joblib\n\nPrécision finale obtenue : 94.2% sur le jeu de test.",
      tags: ["Python", "Scikit-learn", "Pandas", "ML"],
      screenshot: "/projects/screenshots/annee-2-projet-1.png",
      zip: "/projects/zips/annee-2-projet-1.zip",
      github: "#",
      demo: "#",
    },
    {
      title: "Dashboard Power BI",
      description:
        "Tableau de bord interactif pour l'analyse de données business. Mesures DAX, modélisation de données et visualisations avancées.",
      details:
        "Création d'un dashboard Power BI complet pour le suivi des KPIs d'une entreprise fictive.\n\nComposants du tableau de bord :\n• Modèle de données en étoile avec tables de faits et dimensions\n• Mesures DAX avancées : YTD, comparaison N-1, moyennes mobiles\n• Visualisations interactives : cartes, treemaps, graphiques en cascade\n• Drill-through entre pages pour l'analyse détaillée\n• Row-Level Security (RLS) pour la gestion des accès\n• Publication et partage via Power BI Service\n\nCe projet m'a formé aux outils de BI utilisés en entreprise.",
      tags: ["Power BI", "DAX", "SQL", "Visualisation"],
      screenshot: "/projects/screenshots/annee-2-projet-2.png",
      zip: "/projects/zips/annee-2-projet-2.zip",
      github: "#",
      demo: "#",
    },
    {
      title: "Analyse prédictive",
      description:
        "Prédiction de tendances avec régression linéaire et séries temporelles. Modélisation statistique et évaluation de la performance.",
      details:
        "Projet d'analyse prédictive sur des données de ventes pour anticiper les tendances futures.\n\nMéthodologie :\n• Analyse exploratoire et identification des patterns saisonniers\n• Décomposition de séries temporelles (tendance, saisonnalité, résidus)\n• Modèles implémentés : régression linéaire, ARIMA, SARIMA\n• Évaluation avec RMSE, MAE et MAPE\n• Visualisation des prédictions vs valeurs réelles\n• Intervalles de confiance pour quantifier l'incertitude\n\nLe modèle SARIMA a atteint un MAPE de 8.3% sur les 3 mois suivants.",
      tags: ["Python", "Statsmodels", "Matplotlib"],
      screenshot: "/projects/screenshots/annee-2-projet-3.png",
      zip: "/projects/zips/annee-2-projet-3.zip",
      github: "#",
      demo: "#",
    },
    {
      title: "Web Scraping",
      description:
        "Extraction et analyse de données depuis des sites web. Automatisation de la collecte, parsing HTML et stockage structuré.",
      details:
        "Développement d'un système de web scraping automatisé pour collecter des données publiques.\n\nArchitecture :\n• Scraper Python avec BeautifulSoup et Requests\n• Gestion des headers, timeouts et respect du robots.txt\n• Parsing de pages HTML complexes avec sélecteurs CSS\n• Stockage structuré des données en CSV et dans une base SQLite\n• Planification automatique avec cron\n• Nettoyage et validation des données collectées\n\nPlus de 50 000 enregistrements collectés et structurés en base de données.",
      tags: ["Python", "BeautifulSoup", "Requests"],
      screenshot: "/projects/screenshots/annee-2-projet-4.png",
      zip: "/projects/zips/annee-2-projet-4.zip",
      github: "#",
      demo: "#",
    },
    {
      title: "API REST avec FastAPI",
      description:
        "Création d'une API pour servir des modèles de ML. Endpoints, documentation automatique, containerisation Docker.",
      details:
        "Mise en place d'une API REST professionnelle pour exposer des modèles de machine learning.\n\nFonctionnalités :\n• Endpoints CRUD avec validation Pydantic\n• Endpoint de prédiction chargeant un modèle sérialisé\n• Documentation Swagger/OpenAPI automatique\n• Authentification par token JWT\n• Tests unitaires et d'intégration avec pytest\n• Containerisation Docker avec multi-stage build\n• CI/CD basique avec GitHub Actions\n\nL'API est capable de traiter 500+ requêtes/seconde.",
      tags: ["Python", "FastAPI", "Docker", "API"],
      screenshot: "/projects/screenshots/annee-2-projet-5.png",
      zip: "/projects/zips/annee-2-projet-5.zip",
      github: "#",
      demo: "#",
    },
    {
      title: "Clustering K-means",
      description:
        "Segmentation de clients avec algorithmes de clustering. Analyse exploratoire, détermination du nombre optimal de clusters et interprétation.",
      details:
        "Projet de segmentation client pour un cas d'usage marketing.\n\nApproche :\n• Analyse exploratoire multivariée des comportements d'achat\n• Scaling des features et réduction dimensionnelle (PCA)\n• Méthode du coude et score silhouette pour déterminer k optimal\n• Implémentation K-means et DBSCAN pour comparaison\n• Profilage détaillé de chaque segment\n• Visualisation 2D/3D des clusters avec PCA\n• Recommandations marketing personnalisées par segment\n\n5 segments clients distincts identifiés avec des profils exploitables.",
      tags: ["Python", "Scikit-learn", "Seaborn"],
      screenshot: "/projects/screenshots/annee-2-projet-6.png",
      zip: "/projects/zips/annee-2-projet-6.zip",
      github: "#",
      demo: "#",
    },
    {
      title: "NLP — Analyse de sentiments",
      description:
        "Traitement du langage naturel pour analyser des avis clients. Tokenisation, vectorisation et classification de textes.",
      details:
        "Système d'analyse de sentiments sur des avis clients en français.\n\nPipeline NLP :\n• Prétraitement : tokenisation, lemmatisation, suppression des stopwords\n• Vectorisation : Bag of Words, TF-IDF, Word2Vec\n• Modèles testés : Naive Bayes, SVM, LSTM\n• Évaluation : accuracy, F1-score, matrice de confusion\n• Interface Streamlit pour tester en temps réel\n• Analyse des mots les plus discriminants par classe\n\nLe modèle SVM avec TF-IDF a atteint un F1-score de 0.89 sur le corpus de test.",
      tags: ["Python", "NLTK", "SpaCy", "NLP"],
      screenshot: "/projects/screenshots/annee-2-projet-7.png",
      zip: "/projects/zips/annee-2-projet-7.zip",
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
              02 — Spécialisation
            </span>
            <h1 className="font-display text-display-md md:text-display-lg mb-6">
              Projets
              <br />
              <span style={{ color: "var(--accent)" }}>2ème Année</span>
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Projets avancés en data science, machine learning et visualisation —
              montée en compétence sur les algorithmes et les outils professionnels.
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
            className="mt-20 flex justify-between"
          >
            <Link
              href="/projets/annee-1"
              className="group inline-flex items-center gap-4 font-display text-xl md:text-2xl transition-colors duration-300 hover:text-[var(--accent)]"
            >
              <span
                className="w-12 h-px transition-all duration-300 group-hover:w-20"
                style={{ backgroundColor: "var(--accent)" }}
              />
              1ère Année
            </Link>
            <Link
              href="/projets/annee-3"
              className="group inline-flex items-center gap-4 font-display text-xl md:text-2xl transition-colors duration-300 hover:text-[var(--accent)]"
            >
              3ème Année
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
