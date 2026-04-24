import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  eyebrow?: string
  title?: string
  intro?: string
  className?: string
  children: ReactNode
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  className = '',
  children,
}: SectionProps) {
  return (
    <section id={id} className={`section ${className}`}>
      <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        {title ? <h2>{title}</h2> : null}
        {intro ? <p className="section__intro">{intro}</p> : null}
      </motion.div>
      {children}
    </section>
  )
}
