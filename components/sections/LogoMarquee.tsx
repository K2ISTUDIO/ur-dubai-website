'use client'

const developers = [
  'Emaar Properties',
  'DAMAC Properties',
  'Nakheel Properties',
  'Sobha Realty',
  'Meraas',
  'Dubai Properties',
  'Omniyat',
  'Ellington Properties',
  'Binghatti Developers',
  'Azizi Developments',
  'Danube Properties',
  'Samana Developers',
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
      className={`py-12 overflow-hidden ${
        isDark
          ? 'bg-ink border-y border-cream/[0.06]'
          : 'bg-cream border-y border-border'
      }`}
    >
      {/* Label */}
      <div className="container-site mb-8">
        <div className="flex items-center gap-3">
          <span className="gold-line w-8" />
          <span className="label text-gold">Promoteurs partenaires</span>
        </div>
      </div>

      {/* Marquee wrapper — fade edges */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{
            background: isDark
              ? 'linear-gradient(to right, #0C0A07 0%, transparent 100%)'
              : 'linear-gradient(to right, #F8F5EE 0%, transparent 100%)',
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{
            background: isDark
              ? 'linear-gradient(to left, #0C0A07 0%, transparent 100%)'
              : 'linear-gradient(to left, #F8F5EE 0%, transparent 100%)',
          }}
        />

        {/* Scrolling track */}
        <div className="marquee-track flex items-center">
          {track.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center flex-shrink-0"
            >
              {/* Developer wordmark */}
              <span
                className={`whitespace-nowrap text-[11px] font-sans font-semibold tracking-[0.2em] uppercase px-10 ${
                  isDark ? 'text-cream/25 hover:text-cream/50' : 'text-ink/25 hover:text-ink/50'
                } transition-colors duration-300 cursor-default select-none`}
              >
                {name}
              </span>
              {/* Dot separator */}
              <span
                className={`flex-shrink-0 w-[3px] h-[3px] rounded-full ${
                  isDark ? 'bg-gold/30' : 'bg-gold/50'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
