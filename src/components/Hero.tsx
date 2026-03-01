"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

/* ── Composant image de profil avec fallback ── */
function ProfileImage({ className = "", rounded = false }: { className?: string; rounded?: boolean }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative w-full h-full overflow-hidden ${rounded ? "rounded-full" : ""} ${className}`}>
      {!imgError ? (
        <motion.img
          src="/profile.jpg"
          alt="Mathieu Lopes Moreira"
          className={`w-full h-full object-cover ${rounded ? "rounded-full" : ""}`}
          style={{ filter: "grayscale(20%) contrast(1.05)" }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.77, 0, 0.175, 1] }}
          onError={() => setImgError(true)}
        />
      ) : (
        <motion.div
          className={`w-full h-full flex flex-col items-center justify-center ${rounded ? "rounded-full" : ""}`}
          style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-3xl md:text-5xl lg:text-7xl font-display font-bold"
            style={{ color: "var(--accent)", opacity: 0.4 }}
          >
            ML
          </span>
        </motion.div>
      )}

      {/* Overlay dégradé — uniquement pour le format rectangle */}
      {!rounded && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to top, var(--bg-primary) 0%, transparent 30%)`,
          }}
        />
      )}
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Grille décorative en arrière-plan */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Accent orbe */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[120px]"
        style={{
          background: "var(--accent)",
          y,
        }}
      />

      {/* Contenu principal */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-28"
        style={{ opacity }}
      >
        {/* ═══════════════════════════════════════════
            LAYOUT DESKTOP (lg+) : deux colonnes + barre verticale
            ═══════════════════════════════════════════ */}
        <div className="hidden lg:flex flex-row items-stretch max-w-7xl w-full">

          {/* Colonne gauche : Nom + infos */}
          <div className="flex-1 flex flex-col justify-center pr-16">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="section-number">01 — Accueil</span>
            </motion.div>

            <div>
              <TextReveal as="h1" className="heading-xl mb-2" delay={0.3}>
                Mathieu
              </TextReveal>
              <TextReveal as="h1" className="heading-xl" delay={0.5}>
                <span style={{ color: "var(--accent)" }}>Lopes</span>{" "}
                Moreira
              </TextReveal>
            </div>

            <motion.div
              className="my-10 h-[1px] max-w-md origin-left"
              style={{ background: "var(--accent)" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.77, 0, 0.175, 1] }}
            />

            <div className="grid grid-cols-[1fr,2fr] gap-16 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <p
                  className="font-mono text-xs tracking-widest uppercase mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  Spécialisation
                </p>
                <p className="text-lg font-display" style={{ color: "var(--text-primary)" }}>
                  Science des Données
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <p
                  className="font-mono text-xs tracking-widest uppercase mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  À propos
                </p>
                <p
                  className="text-base leading-relaxed max-w-lg"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Étudiant en BUT Science des Données. De la cuisine à la data,
                  je transforme les données en histoires. Passionné d&apos;auto-hébergement,
                  de jeux vidéo et d&apos;autonomie numérique.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="flex flex-wrap gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <MagneticButton>
                <Link
                  href="/projets"
                  className="group inline-flex items-center gap-3 px-8 py-4 border text-sm font-medium tracking-wider uppercase transition-all duration-500"
                  style={{
                    borderColor: "var(--accent)",
                    color: "var(--accent)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--bg-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                >
                  <span>Voir les projets</span>
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wider uppercase transition-colors duration-300"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  Me contacter
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Barre verticale esthétique */}
          <div className="flex flex-col items-center relative mx-4 flex-shrink-0">
            <motion.div
              className="w-[1px] flex-1"
              style={{ background: "var(--accent)" }}
              initial={{ scaleY: 0, transformOrigin: "top" }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.77, 0, 0.175, 1] }}
            />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rotate-45"
              style={{ backgroundColor: "var(--accent)" }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            />
            <motion.div
              className="absolute top-[25%] w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--accent)", opacity: 0.4 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            />
            <motion.div
              className="absolute top-[75%] w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--accent)", opacity: 0.4 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            />
          </div>

          {/* Colonne droite : Photo rectangle */}
          <motion.div
            className="w-[380px] xl:w-[420px] flex-shrink-0 flex flex-col justify-center pl-16"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className="relative aspect-[3/4] w-full">
              {/* Cadres décoratifs dorés */}
              <motion.div
                className="absolute -inset-3 pointer-events-none"
                style={{ border: "1px solid var(--accent)", opacity: 0.3 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
              <motion.div
                className="absolute -inset-6 pointer-events-none"
                style={{ border: "1px solid var(--accent)", opacity: 0.1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1.2, delay: 1.4 }}
              />
              <ProfileImage />
            </div>

            <motion.p
              className="font-mono text-[10px] tracking-[0.3em] uppercase mt-6"
              style={{ color: "var(--text-muted)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              Mathieu Lopes Moreira — 2026
            </motion.p>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════
            LAYOUT MOBILE / TABLETTE (< lg) : portrait circulaire intégré
            ═══════════════════════════════════════════ */}
        <div className="lg:hidden max-w-2xl w-full">

          {/* En-tête : Nom + portrait circulaire à droite */}
          <div className="flex items-start gap-5 sm:gap-8">

            {/* Partie texte (nom) */}
            <div className="flex-1 min-w-0">
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="section-number">01 — Accueil</span>
              </motion.div>

              <div>
                <TextReveal as="h1" className="heading-xl mb-1" delay={0.3}>
                  Mathieu
                </TextReveal>
                <TextReveal as="h1" className="heading-xl" delay={0.5}>
                  <span style={{ color: "var(--accent)" }}>Lopes</span>{" "}
                  Moreira
                </TextReveal>
              </div>
            </div>

            {/* Portrait circulaire avec liseré doré */}
            <motion.div
              className="flex-shrink-0 mt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.77, 0, 0.175, 1] }}
            >
              <div className="relative">
                {/* Anneau doré extérieur */}
                <motion.div
                  className="absolute -inset-[3px] rounded-full"
                  style={{ border: "1.5px solid var(--accent)", opacity: 0.6 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 0.6, rotate: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                />
                {/* Anneau doré intérieur subtil */}
                <motion.div
                  className="absolute -inset-[8px] rounded-full hidden sm:block"
                  style={{ border: "1px solid var(--accent)", opacity: 0.2 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
                <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full overflow-hidden">
                  <ProfileImage rounded />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Ligne de séparation */}
          <motion.div
            className="my-6 md:my-8 h-[1px] origin-left"
            style={{ background: "var(--accent)" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.77, 0, 0.175, 1] }}
          />

          {/* Infos */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr,2fr] gap-5 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <p
                className="font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-2"
                style={{ color: "var(--accent)" }}
              >
                Spécialisation
              </p>
              <p className="text-base sm:text-lg font-display" style={{ color: "var(--text-primary)" }}>
                Science des Données
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <p
                className="font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-2"
                style={{ color: "var(--accent)" }}
              >
                À propos
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Étudiant en BUT Science des Données. De la cuisine à la data,
                je transforme les données en histoires. Gamer et passionné de tech.
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <MagneticButton>
              <Link
                href="/projets"
                className="group inline-flex items-center gap-2 px-6 py-3 border text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-500"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--bg-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--accent)";
                }}
              >
                <span>Voir les projets</span>
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-medium tracking-wider uppercase transition-colors duration-300"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                }}
              >
                Me contacter
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Marquee en bas — bande défilante infinie */}
      <div
        className="relative z-10 border-t py-5 overflow-hidden"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="marquee-container">
          <div className="marquee-content">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="inline-flex items-center gap-8 mx-8">
                <span
                  className="font-display text-sm tracking-widest uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  Data Science
                </span>
                <span style={{ color: "var(--accent)" }}>✦</span>
                <span
                  className="font-display text-sm tracking-widest uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  Python
                </span>
                <span style={{ color: "var(--accent)" }}>✦</span>
                <span
                  className="font-display text-sm tracking-widest uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  Machine Learning
                </span>
                <span style={{ color: "var(--accent)" }}>✦</span>
                <span
                  className="font-display text-sm tracking-widest uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  Auto-hébergement
                </span>
                <span style={{ color: "var(--accent)" }}>✦</span>
                <span
                  className="font-display text-sm tracking-widest uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  Gaming
                </span>
                <span style={{ color: "var(--accent)" }}>✦</span>
                <span
                  className="font-display text-sm tracking-widest uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  SQL
                </span>
                <span style={{ color: "var(--accent)" }}>✦</span>
                <span
                  className="font-display text-sm tracking-widest uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  Visualisation
                </span>
                <span style={{ color: "var(--accent)" }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator — uniquement desktop */}
      <motion.div
        className="absolute bottom-24 left-6 md:left-12 hidden lg:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span
          className="font-mono text-[10px] tracking-widest uppercase"
          style={{ color: "var(--text-muted)", writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-12"
          style={{ transformOrigin: "top", background: "var(--accent)" }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
