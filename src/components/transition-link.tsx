'use client'

import { usePathname } from 'next/navigation'
import { useTransition } from './transition-context'
import { ReactNode, MouseEvent } from 'react'

interface TransitionLinkProps {
    href: string
    label: string
    children: ReactNode
    className?: string
    onClick?: () => void
}

export function TransitionLink({ href, label, children, className, onClick }: TransitionLinkProps) {
    const pathname = usePathname()
    const { startTransition, isTransitioning } = useTransition()

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()

        // Don't transition if already on the same page or currently transitioning
        if (pathname === href || isTransitioning) {
            onClick?.()
            return
        }

        onClick?.()
        startTransition(href, label)
    }

    return (
        <a href={href} onClick={handleClick} className={className}>
            {children}
        </a>
    )
}
