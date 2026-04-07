'use client'

import { useInView } from '@/lib/hooks'

const stats = [
  { value: '+150', label: 'Clients accompagnés' },
  { value: '3', label: 'Branches d\'expertise' },
  { value: '+5 ans', label: 'À Dubaï' },
  { value: '100%', label: 'Sur mesure' },
]

export default function StatsSection() {
  const { ref, inView } = useInView(0.2)

  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="container-site">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-cream/5 transition-all duration-800 ease-expo-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-ink flex flex-col items-center justify-center py-10 px-6 text-center gap-2"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span
                className="font-display font-light text-cream"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1 }}
              >
                {stat.value}
              </span>
              <span className="label text-muted-light text-[10px]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
