"use client"

import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

interface ScrollRevealProps {
  children: ReactNode
  animation?: "fadeIn" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scaleUp" | "rotateIn"
  delay?: number
  duration?: number
  className?: string
}

export function ScrollReveal({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.6,
  className = "",
}: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 })

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ease-out`
    const durationClass = `duration-${Math.round(duration * 1000)}`
    const delayClass = delay > 0 ? `delay-${Math.round(delay * 1000)}` : ""

    if (!isVisible) {
      switch (animation) {
        case "fadeIn":
          return `${baseClasses} opacity-0 ${durationClass} ${delayClass}`
        case "slideUp":
          return `${baseClasses} opacity-0 translate-y-8 ${durationClass} ${delayClass}`
        case "slideDown":
          return `${baseClasses} opacity-0 -translate-y-8 ${durationClass} ${delayClass}`
        case "slideLeft":
          return `${baseClasses} opacity-0 translate-x-8 ${durationClass} ${delayClass}`
        case "slideRight":
          return `${baseClasses} opacity-0 -translate-x-8 ${durationClass} ${delayClass}`
        case "scaleUp":
          return `${baseClasses} opacity-0 scale-95 ${durationClass} ${delayClass}`
        case "rotateIn":
          return `${baseClasses} opacity-0 rotate-3 scale-95 ${durationClass} ${delayClass}`
        default:
          return `${baseClasses} opacity-0 ${durationClass} ${delayClass}`
      }
    } else {
      return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0 ${durationClass} ${delayClass}`
    }
  }

  return (
    <div ref={elementRef} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}
