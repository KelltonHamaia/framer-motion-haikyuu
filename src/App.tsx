import { motion } from "motion/react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, rotate: -90 }
}

function App() {

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="bg-blue-950 min-h-screen flex flex-wrap gap-20 p-40 justify-around"
      >
        {Array.from({ length: 12 }).fill('a').map((k, v) => (
          <motion.div
            variants={item}
            key={v}
            className="size-40 bg-blue-600"
          />
        ))}
      </motion.div>
    </>

  )
}

export default App
