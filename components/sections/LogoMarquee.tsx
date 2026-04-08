'use client'

interface Developer {
  name: string
  logoUrl: string
  /** Height in px — all rendered to consistent visual weight */
  h?: number
}

const developers: Developer[] = [
  {
    name: 'Emaar Properties',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Emaar_Properties_logo.svg',
    h: 22,
  },
  {
    name: 'DAMAC Properties',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Damac_logo.svg',
    h: 26,
  },
  {
    name: 'Nakheel Properties',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Nakheel_Logo.png/320px-Nakheel_Logo.png',
    h: 30,
  },
  {
    name: 'Sobha Realty',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Sobha_%28company%29.svg',
    h: 26,
  },
  {
    name: 'Meraas',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Meraas-logo.svg',
    h: 24,
  },
  {
    name: 'Dubai Properties',
    logoUrl: 'https://www.dp.ae/pictures/logo-dark-en.png',
    h: 28,
  },
  {
    name: 'Omniyat',
    logoUrl: 'https://cdn.prod.website-files.com/64cd0df1806781d956403b26/64d0f5a02c9c892bbd0bd804_omniyat-logo.svg',
    h: 22,
  },
  {
    name: 'Ellington Properties',
    logoUrl: 'https://ellingtonproperties.ae/wp-content/uploads/Ellington-properties-Logo.png',
    h: 26,
  },
  {
    name: 'Binghatti Developers',
    logoUrl: 'https://binghattiweb.imgix.net/logo.svg',
    h: 28,
  },
  {
    name: 'Azizi Developments',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Azizi_Developments_Logo.png/320px-Azizi_Developments_Logo.png',
    h: 28,
  },
  {
    name: 'Danube Properties',
    logoUrl: 'https://danubeproperties.com/wp-content/uploads/2024/02/header-logo.png',
    h: 28,
  },
  {
    name: 'Samana Developers',
    logoUrl: 'https://www.samanadevelopers.com/assets/img/updated-logo/white.png',
    h: 26,
  },
]

// Duplicate for seamless loop
const track = [...developers, ...developers]

interface LogoMarqueeProps {
  theme?: 'dark' | 'light'
}

export default function LogoMarquee({ theme = 'dark' }: LogoMarqueeProps) {
  const isDark = theme === 'dark'
  // brightness(0) invert(1) = converts any logo to pure white (consistent on dark bg)
  const logoFilter = 'brightness(0) invert(1)'

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
          className="absolute left-0 top-0 bottom-0 w-16 md:w-28 z-10 pointer-events-none"
          style={{
            background: isDark
              ? 'linear-gradient(to right, #0C0A07, transparent)'
              : 'linear-gradient(to right, #F8F5EE, transparent)',
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-16 md:w-28 z-10 pointer-events-none"
          style={{
            background: isDark
              ? 'linear-gradient(to left, #0C0A07, transparent)'
              : 'linear-gradient(to left, #F8F5EE, transparent)',
          }}
        />

        <div className="marquee-viewport">
          <div className="marquee-track">
            {track.map((dev, i) => (
              <div
                key={`${dev.name}-${i}`}
                className="flex items-center flex-shrink-0 px-10 md:px-14"
              >
                {/* Logo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={dev.logoUrl}
                  alt={dev.name}
                  draggable={false}
                  className="select-none flex-shrink-0 transition-opacity duration-400"
                  style={{
                    height: `${dev.h ?? 26}px`,
                    width: 'auto',
                    maxWidth: '120px',
                    opacity: isDark ? 0.4 : 0.35,
                    filter: isDark ? logoFilter : 'none',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.opacity = isDark ? '0.85' : '0.7'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.opacity = isDark ? '0.4' : '0.35'
                  }}
                  onError={(e) => {
                    // Graceful fallback: show styled name text
                    const el = e.currentTarget as HTMLImageElement
                    const span = document.createElement('span')
                    span.textContent = dev.name.toUpperCase()
                    span.style.cssText = `
                      font-size: 9px;
                      font-weight: 600;
                      letter-spacing: 0.18em;
                      color: ${isDark ? 'rgba(248,245,238,0.4)' : 'rgba(12,10,7,0.35)'};
                      white-space: nowrap;
                    `
                    el.parentNode?.replaceChild(span, el)
                  }}
                />
                {/* Separator dot */}
                <span
                  className="flex-shrink-0 ml-10 md:ml-14 w-[3px] h-[3px] rounded-full bg-gold/20"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
