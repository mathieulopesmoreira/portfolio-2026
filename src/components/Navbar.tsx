"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navItems = [
    { name: "Accueil", href: "/", number: "01" },
    { name: "À propos", href: "/a-propos", number: "02" },
    { name: "Projets", href: "/projets", number: "03" },
    { name: "Compétences", href: "/competences", number: "04" },
    { name: "Bilans", href: "/bilans", number: "05" },
    { name: "Contact", href: "/contact", number: "06" },
  ];

  const menuVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    closed: { y: 60, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] },
    },
  };

  return (
    <>
      {/* Top bar — toujours visible */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled && !isOpen
            ? "backdrop-blur-xl"
            : ""
        }`}
        style={{
          backgroundColor: isScrolled && !isOpen ? "var(--overlay)" : "transparent",
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 h-20">
          {/* Logo — typographie pure */}
          <Link
            href="/"
            className="relative z-[60] font-display text-xl tracking-tight"
            style={{ color: isOpen ? "var(--text-primary)" : "var(--text-primary)" }}
          >
            <span className="font-semibold">MLM</span>
            <span
              className="ml-2 text-xs font-mono tracking-widest uppercase hidden sm:inline"
              style={{ color: "var(--accent)" }}
            >
              Portfolio
            </span>
          </Link>

          <div className="flex items-center gap-6 relative z-[60]">
            {/* Theme toggle — discret, élégant */}
            <button
              onClick={toggleTheme}
              className="group flex items-center gap-2 text-xs font-mono tracking-widest uppercase transition-colors duration-300"
              style={{ color: "var(--text-muted)" }}
              aria-label="Basculer le thème"
            >
              <div
                className="w-8 h-4 rounded-full relative transition-colors duration-300 border"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--bg-tertiary)",
                }}
              >
                <motion.div
                  className="w-3 h-3 rounded-full absolute top-[1px]"
                  style={{ backgroundColor: "var(--accent)" }}
                  animate={{ left: theme === "dark" ? "1px" : "15px" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
              <span className="hidden md:inline group-hover:text-[var(--accent)] transition-colors">
                {theme === "dark" ? "Dark" : "Light"}
              </span>
            </button>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`link-underline text-sm tracking-wide transition-colors duration-300 ${
                    pathname === item.href
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Hamburger — le geste premium */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col items-end gap-[5px] w-8 group"
              aria-label="Menu"
            >
              <motion.span
                className="block h-[1.5px] rounded-full transition-colors"
                style={{ backgroundColor: "var(--text-primary)" }}
                animate={{
                  width: isOpen ? 32 : 32,
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 6.5 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-[1.5px] rounded-full"
                style={{ backgroundColor: "var(--text-primary)" }}
                animate={{
                  width: isOpen ? 0 : 20,
                  opacity: isOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-[1.5px] rounded-full transition-colors"
                style={{ backgroundColor: "var(--text-primary)" }}
                animate={{
                  width: isOpen ? 32 : 26,
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -6.5 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Menu plein écran — mobile & tablette */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[55] flex items-center justify-center lg:hidden"
            style={{ backgroundColor: "var(--bg-primary)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.nav
              className="flex flex-col items-start px-12 w-full max-w-lg"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  variants={itemVariants}
                  className="w-full border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-5 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-baseline gap-4">
                      <span
                        className="font-mono text-xs tracking-widest"
                        style={{ color: "var(--accent)" }}
                      >
                        {item.number}
                      </span>
                      <span
                        className={`font-display text-3xl md:text-4xl tracking-tight transition-colors duration-300 ${
                          pathname === item.href
                            ? "text-[var(--accent)]"
                            : "text-[var(--text-primary)] group-hover:text-[var(--accent)]"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>
                    <motion.span
                      className="text-lg"
                      style={{ color: "var(--text-muted)" }}
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
