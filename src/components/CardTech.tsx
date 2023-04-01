import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardTechProps {
  delayValue: number
  title: string
  children?: ReactNode
}

export default function CardTech({
  children,
  delayValue,
  title,
}: CardTechProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: delayValue }}
      className=" rounded-lg "
    >
      <div className="flex flex-col items-center justify-center h-full w-full">
        {children}
      </div>
    </motion.div>
  )
}
