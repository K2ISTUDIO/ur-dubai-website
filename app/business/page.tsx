import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import Button, { ArrowRight } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'UR Business — Création de Société, Visas & Expatriation à Dubaï',
  description:
    'Créez votre société à Dubaï, obtenez votre visa résident ou investisseur, et accompagnez toute votre famille dans l\'expatriation. UR Business gère tout de A à Z.',
  keywords: ['création société Dubai', 'free zone Dubai', 'visa résident Dubai', 'visa investisseur Dubai', 'expatriation Dubai', 'famille expatriée Dubai'],
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

const visaTypes = [
  {
    type: 'Visa Investisseur',
    duration: '3 ans renouvelable',
    desc: 'Pour les créateurs de société et les investisseurs immobiliers. Inclut le visa pour conjoint et enfants à charge.',
    conditions: ['Création d\'une société aux EAU', 'Investissement immobilier min. 750 000 AED', 'Renouvellement simplifié'],
    highlight: false,
  },
  {
    type: 'Golden Visa',
    duration: '10 ans renouvelable',
    desc: 'Résidence longue durée pour investisseurs, talents et entrepreneurs. La solution idéale pour une implantation pérenne à Dubaï.',
    conditions: ['Investissement min. 2M AED', 'Talent reconnu ou entrepreneur', 'Inclut toute la famille'],
    highlight: true,
  },
  {
    type: 'Visa Résident',
    duration: '2 ans renouvelable',
    desc: 'Pour les salariés d\'une société aux EAU. Couvre le travail, la résidence et l\'accès aux services locaux (banque, école, santé).',
    conditions: ['Contrat de travail aux EAU', 'Sponsor employeur', 'Emirates ID inclus'],
    highlight: false,
  },
  {
    type: 'Visa Touriste',
    duration: '30 à 90 jours',
    desc: 'Pour découvrir Dubaï, préparer votre installation ou réaliser des visites de biens immobiliers. Extension possible sur place.',
    conditions: ['Entrée sans visa pour fr/be/ch', 'Extension 30 jours possible', 'Visa à l\'arrivée ou en ligne'],
    highlight: false,
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
        subtitle="Structure adaptée à votre activité, démarches simplifiées, ouverture de compte bancaire, visa et accompagnement à l'expatriation. Une implantation clé en main."
        image="/images/business/city-1.jpg"
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

      {/* Visas & Résidence */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-line w-8" />
            <span className="label text-gold">Visas & Résidence</span>
          </div>
          <h2 className="font-display font-light text-ink text-display-md mb-4 max-w-xl">
            Touriste, résident
            <br />
            <span className="italic">ou investisseur à long terme.</span>
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-14 max-w-lg">
            Dubaï offre une gamme complète de visas adaptés à chaque situation. Nous gérons l&apos;intégralité du dossier — de la constitution des pièces au dépôt auprès des autorités.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {visaTypes.map((v) => (
              <div
                key={v.type}
                className={`p-8 md:p-10 flex flex-col gap-4 ${
                  v.highlight ? 'bg-ink text-cream' : 'bg-cream-dark'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className={`label text-[9px] ${v.highlight ? 'text-gold' : 'text-gold'}`}>
                      {v.highlight ? '★ Recommandé' : 'Visa'}
                    </span>
                    <h3 className={`font-display font-normal text-display-sm mt-1 ${v.highlight ? 'text-cream' : 'text-ink'}`}>
                      {v.type}
                    </h3>
                  </div>
                  <span className={`label text-[9px] px-2.5 py-1.5 border whitespace-nowrap flex-shrink-0 ${
                    v.highlight ? 'border-gold/40 text-gold' : 'border-border text-muted'
                  }`}>
                    {v.duration}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${v.highlight ? 'text-cream/60' : 'text-muted'}`}>
                  {v.desc}
                </p>
                <ul className="flex flex-col gap-2 pt-3 border-t border-current/10">
                  {v.conditions.map((c) => (
                    <li key={c} className={`flex items-center gap-2 text-xs ${v.highlight ? 'text-cream/40' : 'text-muted'}`}>
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expatriation & famille */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="gold-line w-8" />
                <span className="label text-gold">Expatriation</span>
              </div>
              <h2 className="font-display font-light text-ink text-display-md mb-6">
                Toute la famille
                <br />
                <span className="italic">bien installée.</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-8 max-w-sm">
                S&apos;expatrier à Dubaï, c&apos;est aussi trouver les bonnes écoles, le bon quartier, les bons repères. Nous accompagnons toute la famille dans cette nouvelle vie.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { title: 'Scolarisation', desc: 'Sélection des meilleures écoles francophones et internationales selon le niveau et le quartier.' },
                  { title: 'Logement & installation', desc: 'Recherche de logement, état des lieux, mise en service — tout est géré avant votre arrivée.' },
                  { title: 'Vie quotidienne', desc: 'Banque, assurance santé, permis de conduire, carte SIM : nous accompagnons chaque démarche.' },
                  { title: 'Intégration & réseau', desc: 'Mise en relation avec la communauté francophone, associations et réseaux business locaux.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-5 border border-border">
                    <span className="w-1 h-1 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-ink text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/business/team-1.jpg"
                  alt="Famille heureuse dans un parc à Dubaï"
                  fill
                  unoptimized
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/business/office-1.jpg"
                    alt="Enfants à l'école internationale de Dubaï"
                    fill
                    unoptimized
                    className="object-cover object-center"
                    sizes="25vw"
                  />
                </div>
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/experience/activity-4.jpg"
                    alt="Famille au Dubai Mall"
                    fill
                    unoptimized
                    className="object-cover object-center"
                    sizes="25vw"
                  />
                </div>
              </div>
              <div className="bg-cream-dark p-6 border border-border">
                <p className="font-display font-light text-display-sm text-ink italic mb-4 leading-snug">
                  &ldquo;Dubaï est l&apos;une des villes les plus sûres au monde pour élever ses enfants. Avec les bons partenaires, l&apos;installation est plus simple qu&apos;on ne le pense.&rdquo;
                </p>
                <span className="label text-muted">— L&apos;équipe UR Business</span>
              </div>
            </div>
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
            <p className="text-sm text-cream/40">Consultation gratuite · Société + Visa + Installation · Accompagnement de A à Z</p>
          </div>
          <Button href="/contact" variant="outline-light" size="lg">
            Démarrer mon projet <ArrowRight />
          </Button>
        </div>
      </section>
    </>
  )
}
