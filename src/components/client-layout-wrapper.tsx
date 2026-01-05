'use client'

import { ReactNode } from 'react'
import { TransitionProvider } from './transition-context'
import { PageTransition } from './page-transition'

interface ClientLayoutWrapperProps {
    children: ReactNode
    fontClassNames: string
}

export function ClientLayoutWrapper({ children, fontClassNames }: ClientLayoutWrapperProps) {
    return (
        <TransitionProvider>
            <div className={fontClassNames}>
                <PageTransition />
                {children}
            </div>
        </TransitionProvider>
    )
}
