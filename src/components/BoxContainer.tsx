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
      whileInView={{ opacity: 1 }}
      className={`bg-custom-gray-600 p-4 ${className}`}
    >
      {children}
    </motion.div>
  )
}
