'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface TransitionContextType {
    isTransitioning: boolean
    targetPage: string
    startTransition: (href: string, label: string) => void
}

const TransitionContext = createContext<TransitionContextType | null>(null)

export function useTransition() {
    const context = useContext(TransitionContext)
    if (!context) {
        throw new Error('useTransition must be used within TransitionProvider')
    }
    return context
}

interface TransitionProviderProps {
    children: ReactNode
}

export function TransitionProvider({ children }: TransitionProviderProps) {
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [targetPage, setTargetPage] = useState('')
    const router = useRouter()

    const startTransition = useCallback((href: string, label: string) => {
        if (isTransitioning) return

        setTargetPage(label)
        setIsTransitioning(true)

        // Navigate after the screen has covered the viewport (halfway through animation)
        setTimeout(() => {
            router.push(href)
        }, 600) // Navigate after screen slides in + text appears

        // End transition after full animation
        setTimeout(() => {
            setIsTransitioning(false)
            setTargetPage('')
        }, 1200) // Total animation duration
    }, [isTransitioning, router])

    return (
        <TransitionContext.Provider value={{ isTransitioning, targetPage, startTransition }}>
            {children}
        </TransitionContext.Provider>
    )
}
