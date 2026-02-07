"use client";

import { motion } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Développement",
      description: "Création d'applications web robustes avec les dernières technologies",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      description: "Interfaces utilisateur modernes et intuitives",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimisation pour des expériences rapides et fluides",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            À propos de moi
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionné par le développement web, je crée des solutions élégantes et performantes.
            J&apos;aime transformer des idées en réalité à travers du code propre et des designs soignés.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
