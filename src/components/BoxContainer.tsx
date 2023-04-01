import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BoxProps {
  children?: ReactNode
  className?: string
}

export default function BoxContainer({ children, className }: BoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ delay: 0.25 }}
      className={` ${className}`}
    >
      {children}
    </motion.div>
  )
}
