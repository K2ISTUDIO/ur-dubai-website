'use client'

interface Developer {
  name: string
  logoUrl: string
  /** Apply CSS filter to make logo appear white on dark background */
  invert?: boolean
  /** Height override in px (default 28) */
  h?: number
}

const developers: Developer[] = [
  {
    name: 'Emaar Properties',
    logoUrl: 'https://www.emaar.com/images/emaar-logo.svg',
    invert: true,
    h: 22,
  },
  {
    name: 'DAMAC Properties',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Damac_logo.svg',
    invert: true,
    h: 28,
  },
  {
    name: 'Nakheel Properties',
    logoUrl: 'https://www.nakheel.com/images/nakheelcorporatelibraries/logos/nakheel-log.svg',
    invert: true,
    h: 32,
  },
  {
    name: 'Sobha Realty',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Sobha_%28company%29.svg',
    invert: true,
    h: 26,
  },
  {
    name: 'Meraas',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Meraas-logo.svg',
    invert: true,
    h: 24,
  },
  {
    name: 'Dubai Properties',
    logoUrl: 'https://www.dp.ae/pictures/logo-dark-en.png',
    invert: true,
    h: 30,
  },
  {
    name: 'Omniyat',
    logoUrl: 'https://cdn.prod.website-files.com/64cd0df1806781d956403b26/64d0f5a02c9c892bbd0bd804_omniyat-logo.svg',
    invert: false,
    h: 22,
  },
  {
    name: 'Ellington Properties',
    logoUrl: 'https://ellingtonproperties.ae/wp-content/uploads/Ellington-properties-Logo.png',
    invert: true,
    h: 28,
  },
  {
    name: 'Binghatti Developers',
    logoUrl: 'https://binghattiweb.imgix.net/logo.svg',
    invert: false,
    h: 30,
  },
  {
    name: 'Azizi Developments',
    logoUrl: 'https://logo.clearbit.com/azizidevelopments.com',
    invert: false,
    h: 28,
  },
  {
    name: 'Danube Properties',
    logoUrl: 'https://danubeproperties.com/wp-content/uploads/2024/02/header-logo.png',
    invert: false,
    h: 30,
  },
  {
    name: 'Samana Developers',
    logoUrl: 'https://www.samanadevelopers.com/assets/img/updated-logo/white.png',
    invert: false,
    h: 26,
  },
]

// Duplicate for seamless infinite loop
const track = [...developers, ...developers]

interface LogoMarqueeProps {
  theme?: 'dark' | 'light'
}

export default function LogoMarquee({ theme = 'dark' }: LogoMarqueeProps) {
  const isDark = theme === 'dark'

  return (
    <section
      className={`marquee-section py-14 ${
        isDark
          ? 'bg-ink border-y border-cream/[0.06]'
          : 'bg-cream border-y border-border'
      }`}
    >
      {/* Section label */}
      <div className="container-site mb-10">
        <div className="flex items-center gap-3">
          <span className="gold-line w-8" />
          <span className="label text-gold">Promoteurs partenaires</span>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
          style={{
            background: isDark
              ? 'linear-gradient(to right, #0C0A07, transparent)'
              : 'linear-gradient(to right, #F8F5EE, transparent)',
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
          style={{
            background: isDark
              ? 'linear-gradient(to left, #0C0A07, transparent)'
              : 'linear-gradient(to left, #F8F5EE, transparent)',
          }}
        />

        {/* Scrolling track — hover pauses via CSS (.marquee-viewport:hover .marquee-track) */}
        <div className="marquee-viewport">
          <div className="marquee-track">
            {track.map((dev, i) => (
              <div
                key={`${dev.name}-${i}`}
                className="flex items-center flex-shrink-0 px-10 md:px-14"
              >
                {/* Logo image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={dev.logoUrl}
                  alt={dev.name}
                  height={dev.h ?? 28}
                  draggable={false}
                  className="select-none max-w-none transition-all duration-500"
                  style={{
                    height: `${dev.h ?? 28}px`,
                    width: 'auto',
                    opacity: 0.35,
                    filter: dev.invert
                      ? 'invert(1) brightness(2)'
                      : 'brightness(1.1)',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.opacity = '0.75')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.opacity = '0.35')
                  }
                  onError={(e) => {
                    // Fallback: hide broken images gracefully
                    const el = e.currentTarget as HTMLImageElement
                    el.style.display = 'none'
                  }}
                />

                {/* Dot separator */}
                <span
                  className="flex-shrink-0 ml-10 md:ml-14 w-[3px] h-[3px] rounded-full bg-gold/25"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
