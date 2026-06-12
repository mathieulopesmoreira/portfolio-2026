"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";

export default function AboutPage() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  const parcours = [
    {
      number: "01",
      period: "Étés 2024 & 2025",
      title: "La Cuisine",
      lieu: "Parc de Fierbois",
      description:
        "Une immersion totale dans le monde de la restauration saisonnière. Les étés en cuisine, c'est une école de vie incroyable. On y apprend à travailler en équipe dans des conditions extrêmes, à communiquer efficacement et rapidement pour se faire entendre au milieu du bruit, et à garder son calme quand tout s'accélère. J'y ai découvert la discipline pure, la gestion de l'urgence et une organisation méthodique sans faille au rythme effréné des services. C'est l'apprentissage de la rigueur opérationnelle, de la ponctualité et de la cohésion d'équipe face à la pression d'un service de 150 couverts. Cette expérience m'a aussi donné le goût de l'effort collectif, du travail bien fait et du détail esthétique et gustatif qui fait toute la différence.",
    },
    {
      number: "02",
      period: "2024 — Présent",
      title: "Science des Données",
      lieu: "BUT SD — IUT de Niort",
      description:
        "Le début d'une aventure passionnante. Mon BUT en Science des Données m'a ouvert les portes d'un univers fascinant centré sur l'architecture et la conception des systèmes d'information. J'y apprends à modéliser des bases de données complexes, à concevoir des architectures d'information logiques et à structurer des bases de données cohérentes. Ce cursus me permet de comprendre comment organiser la donnée pour la rendre exploitable, sécurisée et fluide. De la définition des schémas relationnels à la mise en place de flux d'intégration, chaque projet est pour moi l'opportunité de concevoir des systèmes d'information propres, optimisés et bien pensés pour répondre à des besoins concrets.",
    },
    {
      number: "03",
      period: "2025 — Présent",
      title: "Alternance",
      lieu: "Groupe Covéa — Data Manager",
      description:
        "Ma première vraie plongée dans le monde de l'entreprise à grande échelle. En tant que Data Manager en alternance au sein du Groupe Covéa, je découvre la réalité de la gestion des données dans le secteur des assurances, où la qualité de l'information est un enjeu stratégique majeur. Mes missions au quotidien consistent à veiller à la fiabilité et à la gouvernance des données, à automatiser des flux pour faire gagner du temps aux équipes opérationnelles, et à collaborer avec différents métiers pour comprendre leurs besoins en données. C'est un terrain de jeu formidable pour appliquer ce que j'apprends en cours, tout en me confrontant aux problématiques réelles de sécurité, de confidentialité et de volumétrie propres à un grand groupe.",
    },
  ];



  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-primary)" }}>
        {/* Hero section */}
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <span className="section-number">02 — À propos</span>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
              <div>
                <TextReveal as="h1" className="heading-lg" delay={0.2}>
                  Mon parcours
                  <br />
                  <span style={{ color: "var(--accent)" }}>&amp; mon histoire.</span>
                </TextReveal>
              </div>
              <motion.div
                className="flex flex-col justify-end space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Je m&apos;appelle Mathieu Lopes Moreira. Après l&apos;obtention de mon Bac STI2D, j&apos;ai choisi de m&apos;orienter vers un BUT Science des Données, un cursus que je suis actuellement en alternance en tant que Data Manager au sein du Groupe Covéa. Mon parcours combine des études en informatique décisionnelle et des expériences concrètes sur le terrain, notamment durant mes étés passés en tant que saisonnier dans les cuisines professionnelles, où j&apos;ai développé une grande rigueur et le sens du travail en équipe sous pression.
                </p>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Passionné d&apos;informatique et d&apos;infrastructures technologiques, je consacre également une grande partie de mon temps libre au self-hosting et à la gestion de mes propres réseaux. J&apos;apprécie comprendre en profondeur le fonctionnement des systèmes afin de concevoir et de déployer des solutions fiables et autonomes.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ligne de séparation */}
        <div className="divider" />

        {/* Timeline — Parcours */}
        <section ref={timelineRef} className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {parcours.map((item, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-[200px,1fr] gap-8 lg:gap-16 py-12 border-t"
                style={{ borderColor: "var(--border)" }}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  ease: [0.77, 0, 0.175, 1],
                }}
              >
                {/* Gauche — numéro + période */}
                <div>
                  <span
                    className="font-mono text-xs tracking-widest"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.number}
                  </span>
                  <p
                    className="font-mono text-xs tracking-wider mt-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.period}
                  </p>
                </div>

                {/* Droite — contenu */}
                <div>
                  <h2
                    className="font-display text-3xl md:text-4xl tracking-tight mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h2>
                  <p
                    className="font-mono text-xs tracking-wider mb-6"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.lieu}
                  </p>
                  <p
                    className="text-base leading-relaxed max-w-2xl"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="border-t" style={{ borderColor: "var(--border)" }} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
