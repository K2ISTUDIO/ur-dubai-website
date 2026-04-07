'use client'

import { useEffect, useState } from 'react'

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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 40)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className={`relative pt-[var(--header-height)] overflow-hidden ${
        dark ? 'bg-dark text-cream' : 'bg-cream text-ink'
      }`}
      style={
        image
          ? {
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Dark overlay when image is set */}
      {image && (
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/75 to-dark/40" />
      )}

      <div className="container-site py-20 md:py-28 relative z-10">
        {/* Category label */}
        <div
          className={`flex items-center gap-3 mb-8 transition-all duration-700 ease-expo-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="gold-line w-8" />
          <span className="label text-gold">{category}</span>
        </div>

        {/* Title */}
        <h1
          className={`font-display font-light text-display-xl max-w-3xl transition-all duration-800 ease-expo-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '120ms' }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className={`mt-6 text-base leading-relaxed max-w-xl transition-all duration-700 ease-expo-out ${
              dark ? 'text-cream/60' : 'text-muted'
            } ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '220ms' }}
          >
            {subtitle}
          </p>
        )}

        {/* Decorative bottom line */}
        <div
          className={`mt-12 h-px transition-all duration-1000 ease-expo-out origin-left ${
            dark ? 'bg-cream/10' : 'bg-border'
          } ${mounted ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}
          style={{ transitionDelay: '300ms' }}
        />
      </div>
    </section>
  )
}
