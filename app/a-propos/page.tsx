import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import Button, { ArrowRight } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'À propos — UR Dubai',
  description:
    'UR Dubai est un écosystème premium fondé par des experts locaux pour accompagner entrepreneurs, investisseurs et voyageurs dans leurs projets à Dubaï.',
}

const values = [
  {
    title: 'Expertise locale, vision globale',
    desc: 'Notre équipe vit et travaille à Dubaï. Nous connaissons les règles du jeu, les acteurs clés, les quartiers qui montent. Cette connaissance terrain, nous la mettons au service de vos projets.',
  },
  {
    title: 'Un guichet unique, pas un annuaire',
    desc: 'Nous ne vous redirigeons pas. Nous gérons. Qu\'il s\'agisse d\'une acquisition immobilière, d\'un séjour de direction ou d\'une immatriculation de société, UR Dubai prend en charge l\'intégralité de la mission.',
  },
  {
    title: 'La discrétion comme standard',
    desc: 'Nos clients sont des profils exigeants qui valorisent la confidentialité. Nous traitons chaque dossier avec la même rigueur et la même discrétion.',
  },
  {
    title: 'Une relation, pas une transaction',
    desc: 'Nous construisons des liens durables. La plupart de nos clients reviennent — pour un nouveau projet, un renouvellement, une recommandation. C\'est notre meilleure mesure de succès.',
  },
]

export default function AProposPage() {
  return (
    <>
      <PageHero
        category="Notre histoire"
        title="UR Dubai est né d'un constat simple : Dubaï mérite mieux que des prestations fragmentées."
        subtitle="Nous avons réuni sous une même marque l'immobilier, l'expérience et le business pour offrir à nos clients un accompagnement complet, cohérent et exigeant."
        image="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&q=85&auto=format&fit=crop"
        imageAlt="Dubaï vue panoramique"
      />

      {/* Vision */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="gold-line w-8" />
                <span className="label text-gold">Notre vision</span>
              </div>
              <h2 className="font-display font-light text-ink text-display-md leading-tight">
                Le premier
                <br />
                écosystème premium
                <br />
                <span className="italic">francophone à Dubaï.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-6 pt-2">
              <p className="text-sm text-muted leading-relaxed">
                Trop d&apos;entrepreneurs et d&apos;investisseurs francophones arrivent à Dubaï sans repères fiables. Ils jonglent entre un agent immobilier, une agence de création de société, un hotel.com et un chauffeur trouvé sur internet.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                UR Dubai est la réponse à cette fragmentation. Nous sommes la seule structure à proposer les trois dimensions d&apos;un projet à Dubaï : se loger ou investir, vivre l&apos;expérience, développer son activité.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Notre positionnement de guichet unique n&apos;est pas un argument commercial. C&apos;est une architecture pensée pour que chaque dimension de votre projet renforce les autres.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-line w-8" />
            <span className="label text-gold">Ce qui nous anime</span>
          </div>
          <h2 className="font-display font-light text-ink text-display-md mb-14">
            Nos engagements.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {values.map((v) => (
              <div key={v.title} className="bg-cream-dark p-8 md:p-10">
                <h3 className="font-display font-normal text-ink text-display-sm mb-4">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-20 md:py-28 bg-ink">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-line w-8" />
            <span className="label text-gold">L&apos;écosystème UR</span>
          </div>
          <h2 className="font-display font-light text-cream text-display-md mb-14 max-w-xl">
            Trois branches.
            <br />
            <span className="italic">Une seule ambition.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/5">
            {[
              {
                branch: 'UR Real Estate',
                role: 'Votre patrimoine à Dubaï',
                desc: 'Acquisition, investissement locatif, accompagnement acheteur. Nous construisons votre patrimoine immobilier avec méthode.',
                href: '/immobilier',
              },
              {
                branch: 'UR Experience',
                role: 'Votre qualité de vie à Dubaï',
                desc: 'Séjours sur mesure, conciergerie, hébergement. Vous vivez Dubaï pleinement, sans contrainte logistique.',
                href: '/experience',
              },
              {
                branch: 'UR Business',
                role: 'Votre activité à Dubaï',
                desc: 'Création de société, visa, compte bancaire. Votre implantation entrepreneuriale, de A à Z.',
                href: '/business',
              },
            ].map((b) => (
              <div key={b.branch} className="bg-ink p-8 md:p-10 flex flex-col gap-4">
                <span className="label text-gold">{b.branch}</span>
                <p className="font-display font-normal text-cream text-lg">{b.role}</p>
                <p className="text-xs text-cream/40 leading-relaxed flex-1">{b.desc}</p>
                <a
                  href={b.href}
                  className="label text-cream/30 hover:text-gold transition-colors duration-300 flex items-center gap-2 mt-2"
                >
                  Découvrir <ArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-display font-light text-ink text-display-sm mb-2">
              Rencontrons-nous.
            </p>
            <p className="text-sm text-muted">Un échange de 30 minutes pour comprendre votre projet.</p>
          </div>
          <Button href="/contact" variant="primary" size="lg">
            Prendre contact <ArrowRight />
          </Button>
        </div>
      </section>
    </>
  )
}
