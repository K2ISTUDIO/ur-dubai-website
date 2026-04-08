'use client'

import Button, { ArrowRight } from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-dark flex flex-col justify-end overflow-hidden"
    >
      {/* Background image with Ken Burns zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center hero-zoom"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=85&auto=format&fit=crop)',
          }}
        />
      </div>

      {/* Dark gradient overlay — bottom-heavy for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/30" />

      {/* Subtle warm vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-dark/40" />

      {/* Vertical accent line — CSS animation */}
      <div
        className="absolute top-0 left-1/2 w-px bg-gold/20 hero-line"
      />

      {/* Main content */}
      <div className="container-site relative z-10 pb-16 md:pb-24 pt-[var(--header-height)]">
        <div className="flex flex-col gap-6 max-w-5xl mx-auto md:mx-0">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 animate-fade-up"
            style={{ animationDelay: '80ms' }}
          >
            <span className="gold-line w-8" />
            <span className="label text-gold">L'écosystème premium à Dubaï</span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-light text-cream text-display-hero leading-[1.02] animate-fade-up"
            style={{ animationDelay: '180ms' }}
          >
            Vivre, investir
            <br />
            <span className="italic text-cream/70">et entreprendre</span>
            <br />à Dubaï.
          </h1>

          {/* Sub */}
          <p
            className="text-cream/50 text-base md:text-lg leading-relaxed max-w-lg animate-fade-up"
            style={{ animationDelay: '320ms' }}
          >
            UR Dubai réunit immobilier, conciergerie et création d&apos;entreprise sous un même toit.
            Un interlocuteur unique. Une expertise totale.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-up"
            style={{ animationDelay: '440ms' }}
          >
            <Button href="/contact" variant="outline-light" size="lg">
              Démarrer votre projet <ArrowRight />
            </Button>
            <Button href="#branches" variant="ghost" size="lg" className="text-cream/50 hover:text-cream">
              Explorer nos branches <ArrowRight />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom bar — 3 branches */}
      <div
        className="relative z-10 border-t border-cream/10 animate-fade-up"
        style={{ animationDelay: '580ms' }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-cream/10">
            {[
              { label: 'UR Real Estate', desc: 'Immobilier & investissement', href: '/immobilier' },
              { label: 'UR Experience', desc: 'Conciergerie & séjours VIP', href: '/experience' },
              { label: 'UR Business', desc: 'Création de société', href: '/business' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between py-5 px-0 md:px-8 first:pl-0 last:pr-0 hover:bg-cream/[0.03] transition-colors duration-300"
              >
                <div>
                  <p className="label text-cream/80 group-hover:text-gold transition-colors duration-300">
                    {item.label}
                  </p>
                  <p className="text-xs text-cream/35 mt-1">{item.desc}</p>
                </div>
                <ArrowRight className="text-cream/20 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
