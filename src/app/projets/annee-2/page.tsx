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
      title: "Cartographie des McDonald's avec QGIS",
      description:
        "Cartographie complète et étude géomarketing de l'implantation des restaurants McDonald's en Poitou-Charentes pour analyser leur répartition spatiale par rapport aux infrastructures.",
      details:
        "Ce projet d'analyse géographique a consisté à réaliser une étude complète d'implantation commerciale sous QGIS pour le réseau McDonald's en Poitou-Charentes.\n\nCe qui a été fait :\n• Structuration de la base de données : Récupération, filtrage et nettoyage des données géographiques d'infrastructures (communes de Poitou-Charentes, gares SNCF `Gares_SNCF_L93.gpkg`, stations de métro `gares_metro.gpkg`) et des restaurants McDonald's (`McDo_L93.gpkg`, `McDo_PC.gpkg`).\n• Jointure et croisement spatial : Réalisation de jointures spatiales complexes (`jointure_pop.gpkg`) pour croiser la localisation des restaurants avec les données démographiques locales (Insee) et évaluer la population couverte.\n• Analyse spatiale multicritère : Création de zones de chalandise précises en calculant des zones tampons (buffers) autour des gares et en utilisant des calculs d'isochronie/isodistance pour mesurer l'accessibilité client.\n• Cartographie thématique de synthèse : Production de livrables professionnels exportés, notamment une carte de densité de la population locale (`carte_densite.jpg`) et une carte de répartition spatiale des McDonald's (`carte_poitou.jpg`) afin de mettre en évidence les zones sous-équipées et les opportunités géomarketing d'implantation.",
      tags: ["QGIS", "SIG", "Géomarketing", "Analyse Spatiale"],
      github: "#",
      demo: "#",
    },
    {
      title: "Automatisation des Inscriptions en BUT SD",
      description:
        "Développement d'une application Excel/VBA complète (avec portage collaboratif sur Google Sheets) pour automatiser l'import, le nettoyage et le tri des candidatures d'étudiants.",
      details:
        "Conception et programmation d'un outil complet de gestion automatisée pour simplifier et optimiser le processus administratif de traitement des candidatures pour le BUT Science des Données.\n\nCe qui a été fait :\n• Interfaces utilisateur interactives : Création de formulaires de saisie personnalisés (UserForms) et intégration de boutons de contrôle ActiveX sous Excel pour guider la saisie et les actions de l'administrateur.\n• Nettoyage automatisé des données : Écriture de scripts VBA avancés pour standardiser les données importées (mise en majuscule automatique des noms de famille, suppression des espaces superflus, correction des caractères spéciaux et traitement des doublons/anomalies).\n• Algorithme de scoring et de classement : Programmation d'une fonction de calcul automatique d'un score pondéré par candidat en fonction de ses notes scolaires et de critères pédagogiques, générant un classement dynamique.\n• Tableau de bord décisionnel : Création d'indicateurs clés (KPIs) sous forme de graphiques (provenance géographique des candidats par département, répartition par type de baccalauréat) pour le pilotage des admissions en temps réel.\n• Portage collaboratif : Adaptation du code VBA sous forme de scripts Google Apps Script pour un fonctionnement identique et collaboratif directement en ligne sur Google Sheets.",
      tags: ["VBA", "Excel", "Google Sheets", "UserForms", "ActiveX"],
      github: "#",
      demo: "#",
    },
    {
      title: "Modèle de Scoring Client",
      description:
        "Analyse descriptive et modélisation prédictive par régression logistique sous Python pour cibler les profils clients propices à la souscription d'une assurance.",
      details:
        "Développement d'un modèle de scoring d'appétence marketing basé sur des données financières et démographiques pour optimiser le ciblage de campagnes d'assurance.\n\nCe qui a été fait :\n• Fusion et préparation des données : Importation et jointure sécurisée de deux jeux de données (`base_campagne.csv` et `base_finance.csv`) sur les colonnes temporelles d'année et de mois de contact, suivie d'une élimination des doublons et des profils mineurs.\n• Analyse exploratoire et descriptive : Réalisation d'études univariées et bivariées (`analyse_bivariee.py`) avec exportation de graphiques de distribution (`Analyse_desc.png`) pour isoler les variables les plus discriminantes.\n• Feature Engineering : Discrétisation des variables continues (découpage en classes de revenus ou d'âges) et conversion des variables qualitatives (comme le genre) en variables indicatrices muettes (One-Hot Encoding / dummy variables).\n• Modélisation prédictive sous Scikit-Learn : Implémentation d'un modèle de régression logistique (`Partie_2.py`), calcul de la probabilité de souscription de chaque client, construction de la matrice de confusion et calcul des métriques de performance (précision, rappel, ROC/AUC).\n• Restitution commerciale : Rédaction d'un rapport de modélisation et création de diapositives de présentation synthétiques (`Régression logistique.pptx`) pour vulgariser les profils clients à fort potentiel auprès des équipes métiers.",
      tags: ["Python", "Pandas", "Scikit-Learn", "Machine Learning"],
      zip: "/projects/zips/scoring-assurance-python.zip",
      github: "#",
      demo: "#",
    },
    {
      title: "Web Scraping & API Météo",
      description:
        "Collecte automatisée de données climatiques historiques et mise en place d'une API REST de distribution sous FastAPI avec cartographie interactive.",
      details:
        "Réalisation d'une solution complète de collecte, de stockage et d'exposition de données météorologiques historiques pour plusieurs grandes communes françaises.\n\nCe qui a été fait :\n• Ingestion automatisée : Écriture d'un script de scraping interrogeant l'API SYNOP Essentials d'OpenDataSoft pour récupérer des millions d'enregistrements climatiques historiques.\n• Développement de l'API REST : Conception d'une API robuste sous FastAPI (`api_weather.py`) structurant les données en JSON et exposant des endpoints avec filtres paramétrables (par commune, plage de dates, température).\n• Calculs géodésiques et algorithmes : Implémentation de la formule de Haversine pour calculer les distances physiques entre les stations météo et des coordonnées cibles (comme l'IUT de Poitiers).\n• Visualisation et cartographie interactive : Création de cartes géographiques dynamiques avec Folium (`weather_map.html`, `scrapping_map.html`) et génération de graphiques d'historique de températures (`weather_chart.png`, `poitiers_history.png`) avec Matplotlib/Seaborn.\n• Documentation technique : Rédaction d'un rapport complet (`Rapport API WS O.ROMER T.PETIT M.LOPES.pdf`) décrivant l'architecture de la pipeline, les endpoints et le dictionnaire de données de l'API.",
      tags: ["Python", "Web Scraping", "FastAPI", "API"],
      zip: "/projects/zips/webscraping-api-meteo-python.zip",
      github: "#",
      demo: "#",
    },
    {
      title: "Pipeline de Données Esport avec Docker",
      description:
        "Mise en œuvre d'une architecture ETL conteneurisée pour collecter, nettoyer et analyser les indicateurs de performance de joueurs esport professionnels.",
      details:
        "Mise en place d'une architecture de données robuste, isolée et automatisée pour traiter de bout en bout des statistiques de joueurs d'esport.\n\nCe qui a été fait :\n• Développement de la pipeline ETL : Écriture de scripts Python modularisés : extraction des fichiers sources (`extract.py`), validation stricte et nettoyage de 7 types d'anomalies de données (`transform.py` traitant les espaces dans les pseudos, les formats d'email invalides, etc.), et chargement des données nettoyées (`load.py`).\n• Conteneurisation et orchestration : Déploiement de l'environnement de base de données PostgreSQL et de la pipeline ETL sous forme de conteneurs Docker gérés par `docker-compose` pour garantir l'isolation et la portabilité.\n• Calcul de KPIs et reporting automatisé : Création d'un module de génération automatique de rapports (`report.py`) qui interroge la base PostgreSQL pour calculer des statistiques clés (ratios KDA moyen, taux de victoire, scores d'impact) et exporte des indicateurs de performance synthétiques.",
      tags: ["Docker", "Python", "Data Pipeline", "Esports"],
      zip: "/projects/zips/pipeline-donnees-esport-docker.zip",
      github: "#",
      demo: "#",
    },
    {
      title: "Site Web de Dataviz avec D3.js",
      description:
        "Application web cartographique dynamique (GeoVilles Explorer) utilisant D3.js pour l'exploration et la visualisation interactive de données communales françaises.",
      details:
        "Conception et développement de GeoVilles Explorer, une application web interactive dédiée à la visualisation géographique et statistique de données démographiques des communes françaises.\n\nCe qui a été fait :\n• Génération dynamique de l'interface : Construction intégrale de la structure HTML et du DOM de manière synchrone et réactive à l'aide de sélections D3.js dans un script JavaScript pur (`dom-builder.js`).\n• Cartographie vectorielle : Rendu d'une carte géographique interactive des communes à partir de coordonnées spatiales issues de fichiers CSV (`donnees_communes.csv`).\n• Graphiques interactifs réactifs : Implémentation de diagrammes de dispersion (scatter plots) interactifs avec des événements au survol (tooltip affichant les détails de la commune) et au clic pour filtrer les données par région ou taille de population.\n• Gestion de session : Intégration d'un module basique d'authentification (`auth.js`) pour sécuriser l'accès et structurer le parcours utilisateur au sein de l'application.",
      tags: ["JavaScript", "D3.js", "Dataviz", "Web Dynamique"],
      zip: "/projects/zips/visualisation-donnees-d3js.zip",
      github: "#",
      demo: "#",
    },
    {
      title: "Application Web PeepeeFinder — PHP & MySQL",
      description:
        "Plateforme web de géolocalisation et d'évaluation des toilettes publiques en Île-de-France, alimentée par des données Open Data.",
      details:
        "Conception et développement d'une application web complète nommée PeepeeFinder, permettant aux utilisateurs de localiser, filtrer et noter des installations sanitaires publiques en Île-de-France.\n\nCe qui a été fait :\n• Modélisation et Base de données : Création du schéma relationnel MySQL (tables pour les toilettes, les avis des utilisateurs, et la gestion des favoris) conçu à l'aide de diagrammes de cas d'utilisation UML.\n• Backend RESTful en PHP : Écriture de scripts d'API robustes (`toilettes.php`, `get_avis.php`, `toggle_favorite.php`) gérant les opérations CRUD et proposant des filtres avancés (accès PMR, gratuité, ouverture 24h/24, note moyenne).\n• Ingestion d'Open Data : Importation automatique et nettoyage initial du jeu de données officiel `toilettes-publiques-en-ile-de-france.csv` pour alimenter le serveur.\n• Cartographie interactive : Utilisation de la bibliothèque Leaflet.js en JavaScript (`app.js`) pour afficher les marqueurs de position GPS, gérer les zooms et recentrer la carte sur la position de l'utilisateur.",
      tags: ["PHP", "MySQL", "JavaScript", "Leaflet"],
      zip: "/projects/zips/application-web-peepeefinder-php-mysql.zip",
      github: "#",
      demo: "#",
    },
    {
      title: "Théorie des Sondages et Estimation — R",
      description:
        "Application de méthodes d'échantillonnage statistique et d'estimation démographique sur la population des communes de Nouvelle-Aquitaine.",
      details:
        "Étude méthodologique de la théorie des sondages sous R pour comparer l'efficacité et la précision de différents plans d'échantillonnage pour estimer la population totale de la Nouvelle-Aquitaine.\n\nCe qui a été fait :\n• Préparation de la base de sondage : Ingestion du fichier officiel de la population des communes françaises (`population_francaise_communes.csv`), filtrage de la région Nouvelle-Aquitaine, nettoyage et formatage des variables de population.\n• Implémentation des plans de sondage : Utilisation de la bibliothèque R `sampling` (`sae Octave Matthieu.r`) pour implémenter plusieurs méthodes de tirage d'un échantillon (taille n=100) : Sondage Aléatoire Simple Sans Remise (SASSR), Sondage Systématique, et Sondage Stratifié (avec division en 4 strates basées sur les quintiles de population).\n• Estimation et calcul de précision : Calcul des estimateurs de Horvitz-Thompson pour estimer la population totale, détermination des intervalles de confiance à 95% et calcul des marges d'erreur et des variances de chaque plan de sondage.\n• Analyse comparative : Rédaction d'un rapport détaillé (`Rapport Octave Mathieu.pdf`) évaluant et classant les méthodes selon leur niveau de précision statistique.",
      tags: ["R", "Sondages", "Estimation", "Statistiques"],
      zip: "/projects/zips/theorie-sondages-estimation-r.zip",
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
          <div className="space-y-6">
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
