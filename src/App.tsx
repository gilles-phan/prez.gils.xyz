import { motion } from 'framer-motion'
import { Hero } from './components/Hero'
import { Poll } from './components/Poll'
import { Section } from './components/Section'
import { Timeline } from './components/Timeline'
import {
  contributions,
  firstWeekSignals,
  interests,
} from './data/presentation'

function App() {
  return (
    <main>
      <Hero />

      <Section
        id="qui-je-suis"
        eyebrow="Qui je suis"
        title="Ce qui nous définit, c’est souvent ce qu’on aime et ce qu’on fait."
      >
        <div className="interest-grid">
          {interests.map((interest, index) => (
            <motion.article
              className="glass-card interest-card"
              key={interest.label}
              initial={{ opacity: 0, y: 44, rotateX: 18, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.62, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="interest-card__icon" aria-hidden="true">
                {interest.icon}
              </span>
              <h3>{interest.label}</h3>
              <p>{interest.text}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        id="parcours"
        eyebrow="Ce que j’ai fait"
        title="Un parcours front, produit, lead, et pas mal de terrain."
        intro="J’ai navigué entre grands groupes, scale-ups, produit SaaS et projets menés avec l’IA."
        className="section--timeline"
      >
        <Timeline />
      </Section>

      <Section
        id="sondage"
        eyebrow="Petit sondage IA"
        title="Trois questions, un bouton, zero backend."
        intro="Le compteur reste local au navigateur : parfait pour ouvrir une discussion en live."
      >
        <Poll />
      </Section>

      <Section
        id="premiere-semaine"
        eyebrow="Ce que j’ai vu cette première semaine"
        title="De l’énergie, des sujets riches, et une matière à organiser ensemble."
      >
        <div className="signal-grid">
          {firstWeekSignals.map((signal, index) => (
            <motion.article
              className="signal-card"
              key={signal}
              initial={{ opacity: 0, y: 48, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: false, amount: 0.38 }}
              transition={{ duration: 0.64, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              {signal}
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        id="apports"
        eyebrow="Ce que je peux apporter"
        title="Du pragmatisme, de l’expérience, et un peu de carburant du matin."
      >
        <div className="contribution-list">
          {contributions.map((contribution, index) => (
            <motion.div
              className="contribution-item"
              key={contribution}
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ duration: 0.58, delay: index * 0.055 }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{contribution}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <section className="final-section" id="conclusion">
        <motion.div
          className="final-content"
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Conclusion</p>
          <h2>Content de rejoindre l’équipe.</h2>
          <a href="#hero" className="coffee-cta">
            On commence par un café ?
          </a>
        </motion.div>
      </section>
    </main>
  )
}

export default App
