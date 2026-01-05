'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTransition } from './transition-context'

export function PageTransition() {
    const { isTransitioning, targetPage } = useTransition()

    return (
        <AnimatePresence>
            {isTransitioning && (
                <>
                    {/* Sliding background */}
                    <motion.div
                        className="fixed inset-0 z-[100] bg-[oklch(0.12_0_0)]"
                        initial={{ x: '-100%' }}
                        animate={{ x: '0%' }}
                        exit={{ x: '100%' }}
                        transition={{
                            duration: 0.5,
                            ease: [0.76, 0, 0.24, 1],
                        }}
                    />
                    {/* Text (independent of slide) */}
                    <motion.div
                        className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none"
                    >
                        <motion.span
                            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.4, ease: [0.33, 1, 0.68, 1] } }}
                            exit={{ opacity: 0, y: -60, transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] } }}
                        >
                            {targetPage}
                        </motion.span>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
