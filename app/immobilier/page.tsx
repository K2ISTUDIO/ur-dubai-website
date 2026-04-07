import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import Button, { ArrowRight } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'UR Real Estate — Investissement immobilier à Dubaï',
  description:
    'Achat, investissement et accompagnement immobilier à Dubaï. UR Real Estate sélectionne les meilleures opportunités du marché pour les investisseurs francophones.',
  keywords: ['immobilier Dubai', 'investissement immobilier Dubai', 'achat appartement Dubai', 'investissement locatif Dubai'],
}

const services = [
  {
    title: 'Acquisition résidentielle',
    desc: 'Appartements, villas, penthouses. Nous identifions les biens qui correspondent à votre projet de vie ou d\'investissement, y compris les opportunités off-market.',
  },
  {
    title: 'Investissement locatif',
    desc: 'Analyse des rendements, sélection des quartiers en croissance, gestion locative. Nous optimisons chaque étape pour maximiser la performance de votre capital.',
  },
  {
    title: 'Accompagnement investisseurs étrangers',
    desc: 'Démarches administratives, financement, ouverture de compte bancaire : nous simplifions chaque procédure pour les investisseurs non-résidents.',
  },
  {
    title: 'Sélection de projets neufs',
    desc: 'Accès prioritaire aux lancements de promoteurs premium. Nous négocions les meilleures conditions d\'acquisition pour nos clients.',
  },
]

const process = [
  { step: '01', title: 'Consultation initiale', desc: 'Nous définissons ensemble votre objectif, votre budget et votre horizon d\'investissement.' },
  { step: '02', title: 'Sélection personnalisée', desc: 'Présentation d\'une shortlist de biens correspondant exactement à vos critères.' },
  { step: '03', title: 'Visites & due diligence', desc: 'Organisation des visites, analyse juridique et financière du bien.' },
  { step: '04', title: 'Acquisition sécurisée', desc: 'Accompagnement jusqu\'à la signature, gestion des formalités et remise des clés.' },
]

export default function ImmobilierPage() {
  return (
    <>
      <PageHero
        category="UR Real Estate"
        title="L'immobilier à Dubaï, accompagné par des experts."
        subtitle="Nous sélectionnons, analysons et sécurisons les meilleures opportunités immobilières à Dubaï. Pour les investisseurs qui veulent agir avec sérénité."
        image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=85&auto=format&fit=crop"
        imageAlt="Immobilier de luxe à Dubaï"
      />

      {/* Services */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="flex items-center gap-3 mb-6">
                <span className="gold-line w-8" />
                <span className="label text-gold">Nos services</span>
              </div>
              <h2 className="font-display font-light text-ink text-display-md">
                Une expertise
                <br />
                <span className="italic">complète</span>
              </h2>
              <p className="mt-5 text-sm text-muted leading-relaxed max-w-xs">
                De la recherche à la remise des clés, chaque étape est prise en charge par notre équipe.
              </p>
            </div>

            <div className="flex flex-col gap-px bg-border">
              {services.map((s) => (
                <div key={s.title} className="bg-cream p-8 md:p-10">
                  <h3 className="font-display font-normal text-display-sm text-ink mb-3">{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-ink">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-10">
            <span className="gold-line w-8" />
            <span className="label text-gold">Notre processus</span>
          </div>
          <h2 className="font-display font-light text-cream text-display-md mb-14 max-w-lg">
            De la recherche à la remise des clés.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/5">
            {process.map((p) => (
              <div key={p.step} className="bg-ink p-8 flex flex-col gap-4">
                <span className="font-display text-4xl font-light text-gold/30">{p.step}</span>
                <h3 className="font-display font-normal text-cream text-lg">{p.title}</h3>
                <p className="text-xs text-cream/45 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dubai real estate */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="gold-line w-8" />
                <span className="label text-gold">Pourquoi Dubaï</span>
              </div>
              <h2 className="font-display font-light text-ink text-display-md mb-6">
                Un marché immobilier
                <br />
                <span className="italic">en croissance permanente.</span>
              </h2>
              <div className="flex flex-col gap-5">
                {[
                  'Zéro impôt sur les plus-values immobilières',
                  'Rendements locatifs parmi les plus élevés au monde (6–10%)',
                  'Marché réglementé et sécurisé pour les étrangers',
                  'Croissance démographique et économique soutenue',
                  'Monnaie stable, adossée au dollar américain',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm text-ink/70">
                    <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div className="relative h-80 md:h-96 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=900&q=85&auto=format&fit=crop"
                  alt="Villa de luxe avec piscine à Dubaï"
                  fill
                  unoptimized
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="bg-cream p-8 border border-t-0 border-border">
                <p className="font-display font-light text-display-sm text-ink mb-4 italic">
                  &ldquo;Dubaï est l&apos;un des rares marchés où l&apos;investisseur étranger bénéficie des mêmes droits que le résident local.&rdquo;
                </p>
                <span className="label text-muted">— L&apos;équipe UR Real Estate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-ink">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-display font-light text-cream text-display-sm mb-2">
              Votre prochain investissement commence ici.
            </p>
            <p className="text-sm text-cream/40">Consultation initiale gratuite · Réponse sous 24h</p>
          </div>
          <Button href="/contact" variant="outline-light" size="lg">
            Prendre rendez-vous <ArrowRight />
          </Button>
        </div>
      </section>
    </>
  )
}
