'use client'

interface PageHeroProps {
  category: string
  title: string
  subtitle?: string
  dark?: boolean
  image?: string
  imageAlt?: string
}

export default function PageHero({
  category,
  title,
  subtitle,
  dark = true,
  image,
  imageAlt = '',
}: PageHeroProps) {
  return (
    <section
      className={`relative pt-[var(--header-height)] overflow-hidden ${
        dark ? 'bg-dark text-cream' : 'bg-cream text-ink'
      }`}
    >
      {/* Background image with Ken Burns zoom */}
      {image && (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center hero-zoom"
            style={{ backgroundImage: `url(${image})` }}
            aria-label={imageAlt}
            role="img"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/75 to-dark/40" />
        </div>
      )}

      <div className="container-site py-20 md:py-28 relative z-10">
        {/* Category label */}
        <div
          className="flex items-center gap-3 mb-8 animate-fade-up"
          style={{ animationDelay: '60ms' }}
        >
          <span className="gold-line w-8" />
          <span className="label text-gold">{category}</span>
        </div>

        {/* Title */}
        <h1
          className="font-display font-light text-display-xl max-w-3xl animate-fade-up"
          style={{ animationDelay: '160ms' }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className={`mt-6 text-base leading-relaxed max-w-xl animate-fade-up ${
              dark ? 'text-cream/60' : 'text-muted'
            }`}
            style={{ animationDelay: '260ms' }}
          >
            {subtitle}
          </p>
        )}

        {/* Decorative bottom line */}
        <div
          className={`mt-12 h-px origin-left animate-fade-in ${
            dark ? 'bg-cream/10' : 'bg-border'
          }`}
          style={{ animationDelay: '360ms' }}
        />
      </div>
    </section>
  )
}
