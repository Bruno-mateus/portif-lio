import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TextProps {
  className?: string
  children?: ReactNode
  delayValue?: number
}

export default function Text({
  children,
  className,
  delayValue = 1,
}: TextProps) {
  return (
    <motion.p
      className={`${className}`}
      initial={{ x: 10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: delayValue }}
    >
      {children}
    </motion.p>
  )
}
