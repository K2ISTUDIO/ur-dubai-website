import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import Button, { ArrowRight } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'UR Business — Création de Société et Implantation à Dubaï',
  description:
    'Créez votre société à Dubaï avec un accompagnement complet. Free Zone, Mainland, ouverture de compte bancaire, visa : UR Business gère tout pour vous.',
  keywords: ['création société Dubai', 'free zone Dubai', 'implantation entreprise Dubai', 'visa entrepreneur Dubai', 'offshore Dubai'],
}

const structures = [
  {
    type: 'Free Zone',
    desc: 'Propriété étrangère à 100%, exonération fiscale, facilité de rapatriement des bénéfices. Idéal pour les activités internationales, le consulting ou le commerce en ligne.',
    avantages: ['100% de propriété étrangère', 'Zéro impôt sur les sociétés', 'Rapatriement libre des fonds', 'Création rapide (7–14 jours)'],
  },
  {
    type: 'Mainland',
    desc: 'Activité sur l\'ensemble du territoire des Émirats, accès aux marchés locaux et aux appels d\'offres publics. Pour ceux qui souhaitent s\'implanter durablement.',
    avantages: ['Accès marché local illimité', 'Participation aux marchés publics', 'Pas de restriction de secteur', 'Implantation durable'],
  },
  {
    type: 'Holding & Offshore',
    desc: 'Structure de détention d\'actifs, optimisation fiscale légale, protection du patrimoine. Accompagnement par nos partenaires juridiques et fiscaux.',
    avantages: ['Optimisation patrimoniale', 'Protection des actifs', 'Confidentialité', 'Flexibilité internationale'],
  },
]

const steps = [
  { num: '01', title: 'Diagnostic & conseil', desc: 'Analyse de votre activité, de vos objectifs et recommandation de la structure la plus adaptée.' },
  { num: '02', title: 'Choix de la Free Zone', desc: 'Sélection parmi +40 Free Zones en fonction de votre secteur, vos besoins et votre budget.' },
  { num: '03', title: 'Dépôt du dossier', desc: 'Constitution du dossier, traduction, dépôt auprès des autorités compétentes. Nous gérons tout.' },
  { num: '04', title: 'Ouverture de compte', desc: 'Introduction auprès de banques partenaires, accompagnement pour l\'ouverture du compte professionnel.' },
  { num: '05', title: 'Visa & installation', desc: 'Visa investisseur ou employé, Emirates ID, installation logistique et mise en réseau local.' },
  { num: '06', title: 'Suivi post-création', desc: 'Comptabilité, renouvellement de licence, accompagnement continu pour votre développement.' },
]

export default function BusinessPage() {
  return (
    <>
      <PageHero
        category="UR Business"
        title="Créez votre société à Dubaï. Nous gérons le reste."
        subtitle="Structure adaptée à votre activité, démarches simplifiées, ouverture de compte bancaire et visa entrepreneur. Une implantation clé en main."
        image="https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1920&q=85&auto=format&fit=crop"
        imageAlt="Quartier business de Dubaï"
      />

      {/* Why Dubai for business */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="gold-line w-8" />
                <span className="label text-gold">Pourquoi Dubaï</span>
              </div>
              <h2 className="font-display font-light text-ink text-display-md">
                L&apos;environnement business
                <br />
                <span className="italic">le plus favorable au monde.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-5 pt-2">
              {[
                { title: '0% d\'impôt sur les sociétés', desc: 'Exonération totale pour la plupart des activités en Free Zone.' },
                { title: '0% d\'impôt sur le revenu personnel', desc: 'Rémunération nette sans prélèvements à la source.' },
                { title: 'Création en 7 à 14 jours', desc: 'Des procédures digitalisées, rapides et transparentes.' },
                { title: 'Accès au monde entier', desc: 'Hub stratégique entre Europe, Asie et Afrique.' },
              ].map((point) => (
                <div key={point.title} className="flex items-start gap-4 p-5 border border-border">
                  <span className="w-1 h-1 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-ink text-sm mb-1">{point.title}</p>
                    <p className="text-xs text-muted">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Structures */}
      <section className="py-20 md:py-28 bg-ink">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-line w-8" />
            <span className="label text-gold">Structures disponibles</span>
          </div>
          <h2 className="font-display font-light text-cream text-display-md mb-14 max-w-lg">
            La bonne structure pour chaque projet.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/5">
            {structures.map((s) => (
              <div key={s.type} className="bg-ink p-8 md:p-10 flex flex-col gap-5">
                <span className="label text-gold">{s.type}</span>
                <p className="text-sm text-cream/50 leading-relaxed flex-1">{s.desc}</p>
                <ul className="flex flex-col gap-2 pt-4 border-t border-cream/10">
                  {s.avantages.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-xs text-cream/40">
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-line w-8" />
            <span className="label text-gold">Notre processus</span>
          </div>
          <h2 className="font-display font-light text-ink text-display-md mb-14">
            De l&apos;idée à l&apos;ouverture de compte.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {steps.map((s) => (
              <div key={s.num} className="bg-cream-dark p-8 flex flex-col gap-4">
                <span className="font-display text-4xl font-light text-gold/30">{s.num}</span>
                <h3 className="font-display font-normal text-ink text-lg">{s.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-ink">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-display font-light text-cream text-display-sm mb-2">
              Prêt à vous implanter à Dubaï ?
            </p>
            <p className="text-sm text-cream/40">Consultation gratuite · Accompagnement complet de A à Z</p>
          </div>
          <Button href="/contact" variant="outline-light" size="lg">
            Créer ma société <ArrowRight />
          </Button>
        </div>
      </section>
    </>
  )
}
