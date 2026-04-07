import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import ContactForm from '@/components/sections/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Démarrez votre projet avec UR Dubai',
  description:
    'Contactez UR Dubai pour un accompagnement en immobilier, conciergerie ou création de société à Dubaï. Réponse sous 24h.',
}

const contactMethods = [
  {
    type: 'Email',
    value: 'contact@ur-dubai.com',
    href: 'mailto:contact@ur-dubai.com',
    desc: 'Pour toute demande écrite',
  },
  {
    type: 'WhatsApp',
    value: '+971 50 000 0000',
    href: 'https://wa.me/971500000000',
    desc: 'Réponse rapide, disponible 7j/7',
  },
  {
    type: 'Téléphone',
    value: '+971 50 000 0000',
    href: 'tel:+971500000000',
    desc: 'Du lundi au samedi, 9h–19h (GST)',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        category="Contactez-nous"
        title="Parlons de votre projet à Dubaï."
        subtitle="Remplissez le formulaire ou contactez-nous directement. Un premier échange suffit souvent pour cadrer l'essentiel."
        image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=85&auto=format&fit=crop"
        imageAlt="Dubaï Marina"
      />

      <section className="py-20 md:py-28 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 lg:gap-24">
            {/* Form */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="gold-line w-8" />
                <span className="label text-gold">Votre demande</span>
              </div>
              <ContactForm />
            </div>

            {/* Side info */}
            <div className="flex flex-col gap-10">
              {/* Direct contacts */}
              <div>
                <p className="label text-muted mb-6">Contact direct</p>
                <div className="flex flex-col gap-6">
                  {contactMethods.map((m) => (
                    <a
                      key={m.type}
                      href={m.href}
                      target={m.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-1 border border-border p-5 hover:border-gold transition-colors duration-300"
                    >
                      <span className="label text-muted group-hover:text-gold transition-colors duration-300">
                        {m.type}
                      </span>
                      <span className="font-medium text-ink text-sm">{m.value}</span>
                      <span className="text-xs text-muted-light">{m.desc}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Reassurance block */}
              <div className="bg-cream-dark p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="label text-muted">Notre engagement</span>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    'Réponse sous 24 heures',
                    'Consultation initiale gratuite',
                    'Confidentialité garantie',
                    'Sans engagement',
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-2.5 text-xs text-muted">
                      <span className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <p className="label text-muted mb-2">Localisation</p>
                <p className="text-sm text-ink font-medium">Dubaï, Émirats Arabes Unis</p>
                <p className="text-xs text-muted-light mt-1">
                  Équipe présente sur place · Accompagnement en français
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final reassurance band */}
      <section className="py-12 bg-ink">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {[
              'Immobilier · Expériences · Business',
              'Un seul interlocuteur pour tout',
              'Experts à Dubaï depuis +5 ans',
            ].map((item, i) => (
              <div key={item} className="flex items-center gap-3">
                {i > 0 && <span className="hidden md:block w-1 h-1 rounded-full bg-cream/10" />}
                <span className="label text-cream/30">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
