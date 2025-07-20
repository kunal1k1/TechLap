"use client"

import type { ReactNode } from "react"
import { ScrollReveal } from "./ScrollReveal"

interface StaggeredRevealProps {
  children: ReactNode[]
  animation?: "fadeIn" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scaleUp" | "rotateIn"
  staggerDelay?: number
  className?: string
}

export function StaggeredReveal({
  children,
  animation = "slideUp",
  staggerDelay = 0.1,
  className = "",
}: StaggeredRevealProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollReveal key={index} animation={animation} delay={index * staggerDelay}>
          {child}
        </ScrollReveal>
      ))}
    </div>
  )
}
