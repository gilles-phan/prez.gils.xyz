import { motion, useScroll, useTransform } from 'framer-motion'

type FloatingCardProps = {
  label: string
  index: number
}

const positions = [
  'floating-card--top-left',
  'floating-card--top-right',
  'floating-card--middle-left',
  'floating-card--middle-right',
  'floating-card--bottom-left',
  'floating-card--bottom-right',
  'floating-card--far-left',
  'floating-card--far-right',
]

export function FloatingCard({ label, index }: FloatingCardProps) {
  const { scrollYProgress } = useScroll()
  // Les cartes du hero gardent un mouvement lié au scroll sans dépendre d'un moteur lourd.
  const y = useTransform(scrollYProgress, [0, 0.35], [0, (index % 2 ? -1 : 1) * 90])
  const rotate = useTransform(scrollYProgress, [0, 0.35], [0, (index % 2 ? 1 : -1) * 9])

  return (
    <motion.span
      className={`floating-card ${positions[index % positions.length]}`}
      style={{ y, rotate }}
      initial={{ opacity: 0, scale: 0.74, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{
        delay: 0.38 + index * 0.08,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {label}
    </motion.span>
  )
}
