import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BoxProps {
  children?: ReactNode
  className?: string
}

export default function BoxContainer({ children, className }: BoxProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      className={` ${className}`}
    >
      {children}
    </motion.div>
  )
}
