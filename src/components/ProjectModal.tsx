"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState as useReactState } from "react";

export interface ProjectData {
  title: string;
  description: string;
  details: string;
  tags: string[];
  screenshot?: string;
  zip?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

function ScreenshotImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useReactState(false);

  if (hasError) {
    return (
      <div
        className="w-full h-full flex items-center justify-center"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <span className="font-mono text-sm uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          Capture à venir
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      onError={() => setHasError(true)}
    />
  );
}

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[100]"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(8px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto border"
              style={{
                backgroundColor: "var(--bg-primary)",
                borderColor: "var(--border)",
              }}
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center border transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] group"
                style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                aria-label="Fermer"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="1" y1="1" x2="13" y2="13" />
                  <line x1="13" y1="1" x2="1" y2="13" />
                </svg>
              </button>

              {/* Screenshot */}
              {project.screenshot && (
                <div
                  className="relative w-full aspect-video border-b overflow-hidden"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
                >
                  <ScreenshotImage
                    src={project.screenshot}
                    alt={`Capture d'écran — ${project.title}`}
                  />
                </div>
              )}

              {/* No screenshot placeholder */}
              {!project.screenshot && (
                <div
                  className="relative w-full aspect-video border-b flex items-center justify-center"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
                >
                  <span className="font-mono text-sm uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                    Capture à venir
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="p-8 md:p-10">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider border"
                      style={{ borderColor: "var(--border)", color: "var(--accent)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="font-display text-3xl md:text-4xl mb-4" style={{ color: "var(--text-primary)" }}>
                  {project.title}
                </h2>

                {/* Short description */}
                <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>

                {/* Detailed explanation */}
                <div className="border-t pt-6 mb-8" style={{ borderColor: "var(--border)" }}>
                  <h3
                    className="font-mono text-xs uppercase tracking-widest mb-4"
                    style={{ color: "var(--accent)" }}
                  >
                    Détails du projet
                  </h3>
                  <p className="text-base leading-relaxed whitespace-pre-line" style={{ color: "var(--text-secondary)" }}>
                    {project.details}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 border-t pt-6" style={{ borderColor: "var(--border)" }}>
                  {/* Download ZIP */}
                  {project.zip && (
                    <a
                      href={project.zip}
                      download
                      className="inline-flex items-center gap-3 px-6 py-3 text-sm font-mono uppercase tracking-wider border transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] hover:border-[var(--accent)]"
                      style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M8 1v10M4 8l4 4 4-4M2 14h12" />
                      </svg>
                      Télécharger .zip
                    </a>
                  )}

                  {/* GitHub */}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 text-sm font-mono uppercase tracking-wider border transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                    >
                      GitHub →
                    </a>
                  )}

                  {/* Demo */}
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 text-sm font-mono uppercase tracking-wider border transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                    >
                      Démo →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
