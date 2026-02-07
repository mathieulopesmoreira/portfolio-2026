"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/a-propos" },
    { name: "Projets", href: "/projets" },
    { name: "Compétences", href: "/competences" },
    { name: "Bilans", href: "/bilans" },
    { name: "Contact", href: "/contact" },
  ];

  const socials = [
    { name: "GitHub", href: "https://github.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Email", href: "mailto:contact@example.com" },
  ];

  return (
    <footer
      className="relative border-t"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border)",
      }}
    >
      {/* Grande typo décorative */}
      <div className="overflow-hidden py-12 md:py-20">
        <motion.div
          className="font-display font-bold text-center select-none"
          style={{
            fontSize: "clamp(3rem, 12vw, 12rem)",
            lineHeight: "0.9",
            color: "var(--bg-tertiary)",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          MLM
        </motion.div>
      </div>

      {/* Contenu */}
      <div
        className="border-t px-6 md:px-12 py-12"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Colonne 1 — Identité */}
          <div>
            <p
              className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              Mathieu Lopes Moreira
            </p>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              Étudiant en Science des Données. Transformant la curiosité
              en compétence, les données en récits.
            </p>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <p
              className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              Navigation
            </p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline text-sm transition-colors duration-300"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Social */}
          <div>
            <p
              className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              Liens
            </p>
            <ul className="space-y-2">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-sm transition-colors duration-300"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                  >
                    {social.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="border-t px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between"
        style={{ borderColor: "var(--border)" }}
      >
        <p
          className="text-xs font-mono tracking-wider"
          style={{ color: "var(--text-muted)" }}
        >
          © {currentYear} — Tous droits réservés
        </p>
        <p
          className="text-xs font-mono tracking-wider mt-2 md:mt-0"
          style={{ color: "var(--text-muted)" }}
        >
          Conçu avec précision
        </p>
      </div>
    </footer>
  );
}
