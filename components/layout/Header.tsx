'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useScrolled } from '@/lib/hooks'
import Logo from '@/components/ui/Logo'

const navLinks = [
  { href: '/immobilier', label: 'UR Real Estate' },
  { href: '/experience', label: 'UR Experience' },
  { href: '/business', label: 'UR Business' },
  { href: '/a-propos', label: 'À propos' },
]

export default function Header() {
  const pathname = usePathname()
  const scrolled = useScrolled(40)
  const [menuOpen, setMenuOpen] = useState(false)

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isHome = pathname === '/'
  const isDark = isHome && !scrolled && !menuOpen

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-expo-out ${
          scrolled || menuOpen || !isHome
            ? 'bg-cream/95 backdrop-blur-sm border-b border-border'
            : 'bg-transparent'
        }`}
        style={{ height: 'var(--header-height)' }}
      >
        <div className="container-site h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="UR Dubai — Accueil">
            <Logo variant={isDark ? 'light' : 'dark'} width={68} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`label transition-colors duration-300 hover:text-gold ${
                  pathname === link.href
                    ? 'text-gold'
                    : isDark
                    ? 'text-cream/70 hover:text-cream'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`label border px-5 py-2.5 transition-all duration-300 ${
                isDark
                  ? 'border-cream/30 text-cream hover:border-gold hover:text-gold'
                  : 'border-ink/20 text-ink hover:border-gold hover:text-gold'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex flex-col gap-[5px] w-7 h-7 items-center justify-center transition-colors duration-300 ${
              isDark && !menuOpen ? 'text-cream' : 'text-ink'
            }`}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span
              className={`block h-px w-6 bg-current transition-all duration-400 ease-expo-out ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-400 ease-expo-out ${
                menuOpen ? 'w-0 opacity-0' : 'w-6 opacity-100'
              }`}
            />
            <span
              className={`block h-px w-6 bg-current transition-all duration-400 ease-expo-out ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream flex flex-col transition-all duration-600 ease-expo-out md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-site flex flex-col justify-center h-full gap-2 pt-24 pb-12">
          {/* Branch links */}
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-4 border-b border-border font-display text-display-sm text-ink hover:text-gold transition-all duration-400 ease-expo-out ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 60 + 100}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`mt-8 inline-block border border-ink px-8 py-4 label text-center hover:bg-ink hover:text-cream transition-all duration-300 ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: menuOpen ? '360ms' : '0ms' }}
          >
            Nous contacter
          </Link>

          {/* Bottom info */}
          <p
            className={`mt-auto label text-muted-light transition-all duration-400 ${
              menuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: menuOpen ? '420ms' : '0ms' }}
          >
            Dubaï · Accompagnement premium
          </p>
        </div>
      </div>
    </>
  )
}
