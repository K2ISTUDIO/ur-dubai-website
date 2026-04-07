'use client'

import { useInView } from '@/lib/hooks'

const arguments_ = [
  {
    num: '01',
    title: 'Un seul interlocuteur',
    desc: 'Immobilier, séjour, création d\'entreprise : une équipe coordonnée qui vous accompagne de A à Z, sans jongler entre plusieurs prestataires.',
  },
  {
    num: '02',
    title: 'Expertise locale, ancrée sur place',
    desc: 'Notre équipe est présente à Dubaï. Nous connaissons les quartiers, les notaires, les administrations et les partenaires qui comptent vraiment.',
  },
  {
    num: '03',
    title: 'Accompagnement sur mesure',
    desc: 'Aucun client ne ressemble à un autre. Nous construisons une relation personnalisée, adaptée à vos objectifs et à votre rythme.',
  },
  {
    num: '04',
    title: 'Résultats concrets, projets menés à terme',
    desc: 'Nous ne vendons pas des promesses. Chaque mission a un début, un suivi rigoureux et un résultat livrable.',
  },
]

function ArgItem({ arg, index }: { arg: typeof arguments_[0]; index: number }) {
  const { ref, inView } = useInView(0.15)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`flex flex-col md:flex-row gap-6 md:gap-10 py-10 border-b border-border last:border-0 transition-all duration-700 ease-expo-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Number */}
      <div className="flex-shrink-0 md:w-16">
        <span className="font-display text-4xl font-light text-gold/30">{arg.num}</span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-display font-normal text-display-sm text-ink mb-3">{arg.title}</h3>
        <p className="text-sm text-muted leading-relaxed max-w-lg">{arg.desc}</p>
      </div>
    </div>
  )
}

export default function WhySection() {
  const { ref: titleRef, inView: titleInView } = useInView()

  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          {/* Left: sticky heading */}
          <div
            ref={titleRef as React.RefObject<HTMLDivElement>}
            className={`lg:sticky lg:top-24 lg:self-start transition-all duration-800 ease-expo-out ${
              titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-line w-8" />
              <span className="label text-gold">Pourquoi UR Dubai</span>
            </div>
            <h2 className="font-display font-light text-ink text-display-lg leading-tight">
              Ce qui nous
              <br />
              <span className="italic">distingue</span>
            </h2>
            <p className="mt-6 text-sm text-muted leading-relaxed max-w-xs">
              Dubaï est une ville d&apos;opportunités. Encore faut-il avoir les bons guides pour les saisir.
            </p>
          </div>

          {/* Right: arguments list */}
          <div>
            {arguments_.map((arg, i) => (
              <ArgItem key={arg.num} arg={arg} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
