"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Projet E-commerce",
      description: "Une plateforme e-commerce complète avec panier, paiement et gestion d'inventaire",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "bg-gradient-to-br from-blue-500 to-cyan-500",
      github: "#",
      demo: "#",
    },
    {
      title: "Application de gestion",
      description: "Outil de gestion de projets avec collaboration en temps réel",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      image: "bg-gradient-to-br from-purple-500 to-pink-500",
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio créatif",
      description: "Site portfolio avec animations avancées et design moderne",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      image: "bg-gradient-to-br from-orange-500 to-red-500",
      github: "#",
      demo: "#",
    },
    {
      title: "API REST",
      description: "API RESTful sécurisée avec authentification JWT et documentation",
      tags: ["Node.js", "Express", "JWT", "Swagger"],
      image: "bg-gradient-to-br from-green-500 to-teal-500",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations récentes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className={`h-48 ${project.image} group-hover:scale-105 transition-transform duration-300`} />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Démo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
