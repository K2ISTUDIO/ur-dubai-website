import Link from 'next/link'

type ButtonVariant = 'primary' | 'outline' | 'outline-light' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  className?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-ink text-cream hover:bg-ink-soft active:scale-[0.98]',
  outline:
    'border border-ink text-ink hover:bg-ink hover:text-cream active:scale-[0.98]',
  'outline-light':
    'border border-cream/30 text-cream hover:border-gold hover:text-gold active:scale-[0.98]',
  ghost:
    'text-ink hover:text-gold active:scale-[0.98]',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-xs tracking-label',
  md: 'px-7 py-3.5 text-xs tracking-label',
  lg: 'px-10 py-4 text-xs tracking-label',
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  external = false,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center gap-2.5 font-sans font-medium uppercase tracking-label
    transition-all duration-300 ease-expo-out whitespace-nowrap
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? 'opacity-40 pointer-events-none' : ''}
    ${className}
  `.trim()

  if (href) {
    const isExternal = external || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('https://wa')
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}

/* Inline arrow icon for CTAs */
export function ArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`w-3.5 h-3.5 ${className}`}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 7h12M7.5 1.5L13 7l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
