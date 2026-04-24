import { motion } from 'framer-motion'
import { timelineItems } from '../data/presentation'

export function Timeline() {
  return (
    <div className="timeline-wrap">
      <div className="timeline" aria-label="Parcours">
        {timelineItems.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={item.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -48 : 48, rotateY: index % 2 === 0 ? -8 : 8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, amount: 0.45 }}
            transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="timeline-index">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.aside
        className="terminal-card"
        initial={{ opacity: 0, y: 60, rotateX: 16 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="terminal-bar">
          <span />
          <span />
          <span />
        </div>
        <p className="terminal-line muted">$ ai pair --from sofa</p>
        <p className="terminal-line">✓ SaaS photo développé avec l’IA</p>
        <p className="terminal-line">✓ Merge request créée depuis le téléphone</p>
        <p className="terminal-line accent">ready for review</p>
      </motion.aside>
    </div>
  )
}
