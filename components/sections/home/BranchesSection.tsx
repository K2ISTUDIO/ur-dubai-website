'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useInView } from '@/lib/hooks'
import { ArrowRight } from '@/components/ui/Button'

const branches = [
  {
    id: '01',
    tag: 'UR Real Estate',
    href: '/immobilier',
    title: 'Investir dans l\'immobilier à Dubaï',
    description:
      'Sélection rigoureuse de biens, accompagnement de l\'achat à la gestion locative. Nous identifions les opportunités que le marché local ne montre pas.',
    services: ['Acquisition de biens', 'Investissement locatif', 'Accompagnement investisseurs', 'Sélection off-market'],
    color: 'bg-[#1A1612]',
    accent: 'text-gold',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Appartement de luxe à Dubaï',
  },
  {
    id: '02',
    tag: 'UR Experience',
    href: '/experience',
    title: 'Des séjours pensés dans les moindres détails',
    description:
      'Conciergerie lifestyle & business, hébergements d\'exception, chauffeur, activités VIP. Vous vivez Dubaï comme une résidence, pas comme un touriste.',
    services: ['Séjours sur mesure', 'Conciergerie 24/7', 'Chauffeur & transferts', 'Accueil & assistance VIP'],
    color: 'bg-[#0E1318]',
    accent: 'text-[#7EB8C9]',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Piscine de luxe à Dubaï',
  },
  {
    id: '03',
    tag: 'UR Business',
    href: '/business',
    title: 'Créez votre société à Dubaï sans friction',
    description:
      'De la structure juridique adaptée à l\'ouverture de compte bancaire, nous gérons l\'intégralité de votre implantation entrepreneuriale à Dubaï.',
    services: ['Création de société', 'Structure Free Zone', 'Ouverture de compte', 'Accompagnement stratégique'],
    color: 'bg-[#111614]',
    accent: 'text-[#7EB89A]',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Bureau moderne à Dubaï',
  },
]

function BranchCard({ branch, index }: { branch: typeof branches[0]; index: number }) {
  const { ref, inView } = useInView(0.1)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative overflow-hidden transition-all duration-800 ease-expo-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <Link href={branch.href} className={`block ${branch.color} h-full`}>
        {/* Image top section */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={branch.image}
            alt={branch.imageAlt}
            fill
            unoptimized
            className="object-cover object-center transition-transform duration-700 ease-expo-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* Gradient overlay on image */}
          <div className={`absolute inset-0 ${branch.color} opacity-50`} />
          {/* Number badge */}
          <span className="absolute top-4 left-5 font-display text-5xl font-light text-cream/10">
            {branch.id}
          </span>
          {/* Tag badge */}
          <span className={`absolute bottom-4 right-5 label ${branch.accent}`}>
            {branch.tag}
          </span>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          {/* Title */}
          <h3 className="font-display font-light text-cream text-display-sm mb-5 leading-tight">
            {branch.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-cream/50 leading-relaxed mb-8">{branch.description}</p>

          {/* Services */}
          <ul className="flex flex-col gap-2 mb-10">
            {branch.services.map((s) => (
              <li key={s} className="flex items-center gap-2.5 text-xs text-cream/40">
                <span className={`w-1 h-1 rounded-full ${branch.accent} bg-current flex-shrink-0`} />
                {s}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-2 text-cream/40 group-hover:text-cream transition-all duration-300">
            <span className="label">En savoir plus</span>
            <ArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </div>

          {/* Hover border accent */}
          <div
            className={`absolute bottom-0 left-0 h-0.5 ${branch.accent} bg-current w-0 group-hover:w-full transition-all duration-600 ease-expo-out`}
          />
        </div>
      </Link>
    </div>
  )
}

export default function BranchesSection() {
  const { ref: titleRef, inView: titleInView } = useInView()

  return (
    <section id="branches" className="py-20 md:py-32 bg-ink">
      <div className="container-site">
        {/* Section header */}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 transition-all duration-800 ease-expo-out ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-line w-8" />
              <span className="label text-gold">Notre écosystème</span>
            </div>
            <h2 className="font-display font-light text-cream text-display-lg">
              Trois branches.<br />Un seul cap.
            </h2>
          </div>
          <p className="text-sm text-cream/40 max-w-sm md:text-right leading-relaxed">
            Chaque branche est une expertise à part entière, renforcée par la synergie des deux autres.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/5">
          {branches.map((branch, i) => (
            <BranchCard key={branch.id} branch={branch} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
