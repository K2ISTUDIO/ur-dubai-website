'use client'

import { useEffect, useState } from 'react'
import { useInView } from '@/lib/hooks'

interface Stat {
  prefix?: string
  end: number
  suffix?: string
  label: string
  decimals?: boolean
}

const stats: Stat[] = [
  { prefix: '+', end: 150, label: 'Clients accompagnés' },
  { end: 3, label: 'Branches d\'expertise' },
  { prefix: '+', end: 5, suffix: ' ans', label: 'À Dubaï' },
  { end: 100, suffix: '%', label: 'Sur mesure' },
]

function useCountUp(end: number, duration = 1600, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(end)
      return
    }

    let startTime: number | null = null
    let raf: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      // cubic ease-out
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * end))
      if (progress < 1) {
        raf = requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, end, duration])

  return count
}

function StatItem({ stat, active, delay }: { stat: Stat; active: boolean; delay: number }) {
  const count = useCountUp(stat.end, 1600, active)

  return (
    <div
      className="bg-ink flex flex-col items-center justify-center py-10 px-6 text-center gap-2"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: active ? 1 : 0,
        transform: active ? 'translateY(0)' : 'translateY(2rem)',
        transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <span
        className="font-display font-light text-cream tabular-nums"
        style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1 }}
      >
        {stat.prefix ?? ''}{count}{stat.suffix ?? ''}
      </span>
      <span className="label text-muted-light text-[10px]">{stat.label}</span>
    </div>
  )
}

export default function StatsSection() {
  const { ref, inView } = useInView(0.2)

  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="container-site">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-cream/5"
        >
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={inView} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
