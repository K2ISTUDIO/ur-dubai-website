'use client'

import { useInView } from '@/lib/hooks'
import Button, { ArrowRight } from '@/components/ui/Button'

export default function ContactCTA() {
  const { ref, inView } = useInView(0.2)

  return (
    <section className="py-20 md:py-32 bg-cream-dark">
      <div className="container-site">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`flex flex-col md:flex-row items-start md:items-end justify-between gap-12 transition-all duration-800 ease-expo-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-line w-8" />
              <span className="label text-gold">Prenez contact</span>
            </div>
            <h2 className="font-display font-light text-ink text-display-lg leading-tight">
              Votre projet mérite
              <br />
              <span className="italic">une conversation.</span>
            </h2>
            <p className="mt-6 text-sm text-muted leading-relaxed max-w-md">
              Dites-nous ce que vous cherchez — immobilier, séjour ou implantation entrepreneuriale.
              Nous répondons sous 24h avec une proposition personnalisée.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 md:items-end">
            <Button href="/contact" variant="primary" size="lg">
              Démarrer un projet <ArrowRight />
            </Button>
            <a
              href="https://wa.me/33660417111"
              target="_blank"
              rel="noopener noreferrer"
              className="label text-muted hover:text-gold transition-colors duration-300 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              WhatsApp disponible
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
