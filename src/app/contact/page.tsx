"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Une erreur est survenue.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Impossible d'envoyer le message. V\u00e9rifiez votre connexion.");
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactLinks = [
    {
      label: "Email",
      value: "mathieu.lopes.moreira@etu.univ-poitiers.fr",
      href: "mailto:mathieu.lopes.moreira@etu.univ-poitiers.fr",
    },
    {
      label: "Localisation",
      value: "IUT de Poitiers — Site de Niort",
      href: "https://maps.app.goo.gl/VkRmjAR9oLG7eDDU9",
    },
    {
      label: "GitHub",
      value: "github.com",
      href: "https://github.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com",
      href: "https://linkedin.com",
    },
  ];

  const inputClasses = (field: string) =>
    `w-full bg-transparent border-b py-4 text-base outline-none transition-colors duration-300 placeholder:tracking-wider placeholder:text-xs placeholder:uppercase`;

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "var(--bg-primary)" }}>
        {/* Header */}
        <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <span className="section-number">06 — Contact</span>
            <TextReveal as="h1" className="heading-xl mt-4" delay={0.2}>
              Parlons.
            </TextReveal>
          </div>
        </section>

        <div className="divider" />

        {/* Contenu */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Gauche — Infos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p
                className="text-lg leading-relaxed mb-12"
                style={{ color: "var(--text-secondary)" }}
              >
                Un projet en tête, une collaboration, ou simplement
                envie d&apos;échanger ? N&apos;hésitez pas à me contacter.
                Je réponds généralement sous 24h.
              </p>

              <div className="space-y-0">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-5 border-t transition-colors duration-300"
                    style={{ borderColor: "var(--border)" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                    }}
                  >
                    <div>
                      <span
                        className="font-mono text-xs tracking-widest uppercase"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {link.label}
                      </span>
                      <p
                        className="text-base mt-1 transition-colors duration-300 group-hover:text-[var(--accent)]"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {link.value}
                      </p>
                    </div>
                    <span
                      className="text-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ color: "var(--accent)" }}
                    >
                      ↗
                    </span>
                  </motion.a>
                ))}
                <div
                  className="border-t"
                  style={{ borderColor: "var(--border)" }}
                />
              </div>
            </motion.div>

            {/* Droite — Formulaire */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    required
                    placeholder="Votre nom"
                    className={inputClasses("name")}
                    style={{
                      borderColor:
                        focused === "name" ? "var(--accent)" : "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    required
                    placeholder="Votre email"
                    className={inputClasses("email")}
                    style={{
                      borderColor:
                        focused === "email"
                          ? "var(--accent)"
                          : "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    required
                    rows={6}
                    placeholder="Votre message"
                    className={`${inputClasses("message")} resize-none`}
                    style={{
                      borderColor:
                        focused === "message"
                          ? "var(--accent)"
                          : "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                <div className="pt-8 space-y-4">
                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm font-mono tracking-wider"
                      style={{ color: "var(--accent)" }}
                    >
                      ✦ Message envoyé avec succès. Je vous répondrai sous 24h.
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm font-mono tracking-wider text-red-400"
                    >
                      {errorMsg}
                    </motion.p>
                  )}
                  <MagneticButton>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="px-10 py-4 border text-sm font-medium tracking-widest uppercase transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        borderColor: "var(--accent)",
                        color: "var(--accent)",
                      }}
                      onMouseEnter={(e) => {
                        if (status !== "loading") {
                          e.currentTarget.style.backgroundColor = "var(--accent)";
                          e.currentTarget.style.color = "var(--bg-primary)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                    >
                      {status === "loading" ? "Envoi en cours..." : "Envoyer →"}
                    </button>
                  </MagneticButton>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
