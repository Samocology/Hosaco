import { ReactNode } from "react";
import { motion } from "framer-motion";

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
  align = "left",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <section className={`mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 ${className}`}>
      {(eyebrow || title || description) && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center rounded-full border bg-accent/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-accent-foreground">
              {eyebrow}
            </div>
          )}
          {title && <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>}
          {description && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>}
        </motion.div>
      )}
      {children}
    </section>
  );
}
