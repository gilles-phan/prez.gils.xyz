import { useState } from 'react'
import { motion } from 'framer-motion'
import { pollQuestions } from '../data/presentation'

export function Poll() {
  // Compteurs volontaires côté front : suffisant pour animer la présentation en live.
  const [votes, setVotes] = useState(() => pollQuestions.map(() => 0))

  const increment = (index: number) => {
    setVotes((currentVotes) =>
      currentVotes.map((vote, voteIndex) => (voteIndex === index ? vote + 1 : vote)),
    )
  }

  return (
    <div className="poll-grid">
      {pollQuestions.map((question, index) => (
        <motion.article
          className="poll-card"
          key={question}
          initial={{ opacity: 0, y: 42, rotateX: 16 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, amount: 0.45 }}
          transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>{question}</p>
          <div className="poll-card__footer">
            <button type="button" onClick={() => increment(index)}>
              Moi
            </button>
            <span aria-label={`${votes[index]} votes`}>{votes[index]}</span>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
