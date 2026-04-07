import Link from 'next/link'

const branches = [
  { href: '/immobilier', label: 'UR Real Estate', sub: 'Investissement immobilier' },
  { href: '/experience', label: 'UR Experience', sub: 'Conciergerie & séjours' },
  { href: '/business', label: 'UR Business', sub: 'Création de société' },
]

const pages = [
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/60 pt-16 pb-10">
      <div className="container-site">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 pb-12 border-b border-cream/10">
          {/* Brand block */}
          <div className="lg:w-1/3">
            <p className="font-display font-light text-2xl text-cream tracking-[0.18em] uppercase mb-4">
              UR<span className="mx-2 text-gold">·</span>Dubai
            </p>
            <p className="text-sm leading-relaxed max-w-xs text-cream/50">
              L&apos;écosystème premium pour vivre, investir et entreprendre à Dubaï. Un seul interlocuteur. Une expertise totale.
            </p>
          </div>

          {/* Branches */}
          <div className="lg:w-1/3">
            <p className="label text-cream/30 mb-5">Nos branches</p>
            <ul className="flex flex-col gap-3">
              {branches.map((b) => (
                <li key={b.href}>
                  <Link
                    href={b.href}
                    className="group flex flex-col gap-0.5 hover:text-cream transition-colors duration-300"
                  >
                    <span className="text-sm font-medium text-cream/80 group-hover:text-gold transition-colors duration-300">
                      {b.label}
                    </span>
                    <span className="text-xs text-cream/40">{b.sub}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact block */}
          <div className="lg:w-1/3">
            <p className="label text-cream/30 mb-5">Contact</p>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="mailto:contact@ur-dubai.com"
                  className="text-cream/60 hover:text-gold transition-colors duration-300"
                >
                  contact@ur-dubai.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/971500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/60 hover:text-gold transition-colors duration-300"
                >
                  WhatsApp · +971 50 000 0000
                </a>
              </li>
              <li className="text-cream/40">Dubaï, Émirats Arabes Unis</li>
            </ul>
            <div className="mt-6">
              {pages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="label text-cream/40 hover:text-gold mr-6 transition-colors duration-300"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-cream/25">
            © {new Date().getFullYear()} UR Dubai. Tous droits réservés.
          </p>
          <p className="text-xs text-cream/25 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold/60" />
            Dubaï · Accompagnement premium francophone
          </p>
        </div>
      </div>
    </footer>
  )
}
