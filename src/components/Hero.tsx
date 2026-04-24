import { motion, useScroll, useTransform } from 'framer-motion'
import heroImg from '../assets/hero.png'
import { heroTags } from '../data/presentation'
import { FloatingCard } from './FloatingCard'

export function Hero() {
  const { scrollYProgress } = useScroll()
  const imageY = useTransform(scrollYProgress, [0, 0.3], [0, 130])
  const imageRotate = useTransform(scrollYProgress, [0, 0.3], [0, -8])

  return (
    <section className="hero-section" id="hero">
      <div className="hero-orbit" aria-hidden="true">
        {heroTags.map((tag, index) => (
          <FloatingCard key={tag} label={tag} index={index} />
        ))}
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 42, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="hero-visual"
          style={{ y: imageY, rotate: imageRotate }}
          initial={{ opacity: 0, rotateX: 24, z: -80 }}
          animate={{ opacity: 1, rotateX: 0, z: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
        >
          <img src={heroImg} alt="" />
        </motion.div>
        <p className="eyebrow">Arrivée chez Enedis</p>
        <h1>Bonjour Enedis 👋</h1>
        <p className="hero-subtitle">
          Je suis Gilles Phan — développeur, photographe, bricoleur, créatif...
          et nouveau dans l’équipe.
        </p>
      </motion.div>

      <motion.div
        className="scroll-cue"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <span />
      </motion.div>
    </section>
  )
}
