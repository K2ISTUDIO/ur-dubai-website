import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import Button, { ArrowRight } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'UR Experience — Activités, Conciergerie & Séjours de Luxe à Dubaï',
  description:
    'Yacht privatisé, buggy dans les dunes, skydive, hélitreuillage, conciergerie 24/7. UR Experience crée des expériences uniques à Dubaï pour les voyageurs exigeants.',
  keywords: ['activités Dubai', 'yacht Dubai', 'buggy dunes Dubai', 'conciergerie luxe Dubai', 'séjour sur mesure Dubai'],
}

const activities = [
  {
    tag: 'Nautique',
    title: 'Yacht & croisières privées',
    desc: 'Yachts de 40 à 100 pieds privatisés à la journée ou à la demi-journée. Coucher de soleil sur le Burj Al Arab, croisière le long du Palm Jumeirah, barbecue en mer.',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=700&q=80&auto=format&fit=crop',
    imageAlt: 'Yacht de luxe à Dubaï Marina',
  },
  {
    tag: 'Désert',
    title: 'Buggy & safari dans les dunes',
    desc: 'Exploration des dunes rouges de Dubaï en buggy ou en quad. Safari au coucher du soleil, dîner bédouin sous les étoiles, sandboard inclus.',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=700&q=80&auto=format&fit=crop',
    imageAlt: 'Buggy dans les dunes de Dubaï',
  },
  {
    tag: 'Adrénaline',
    title: 'Saut en parachute & sensations',
    desc: 'Skydive au-dessus du Palm Jumeirah, vol en hélicoptère sur le skyline, jet-ski en baie. Les sensations fortes dans les plus beaux décors du monde.',
    image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=700&q=80&auto=format&fit=crop',
    imageAlt: 'Parachute au-dessus de Dubaï',
  },
  {
    tag: 'Gastronomie',
    title: 'Dining & expériences culinaires',
    desc: 'Tables étoilées au sommet des plus hautes tours, dîner sur la plage, brunch VIP. Nous réservons les expériences impossibles à trouver seul.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80&auto=format&fit=crop',
    imageAlt: 'Dîner gastronomique de luxe',
  },
  {
    tag: 'Culture',
    title: 'Dubaï culturel & historique',
    desc: 'Visite privée du vieux Dubaï, Gold Souk, Al Fahidi, croisière abra sur Dubai Creek. Découvrez l\'âme authentique d\'une ville bien au-delà du luxe.',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=700&q=80&auto=format&fit=crop',
    imageAlt: 'Vieux Dubaï et quartier Al Fahidi',
  },
  {
    tag: 'Prestige',
    title: 'Expériences privées & événements',
    desc: 'Soirées exclusives, accès VIP aux grands événements, loges privées pour les concerts et compétitions. Ce qui n\'existe pas sur Booking existe chez nous.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80&auto=format&fit=crop',
    imageAlt: 'Événement VIP à Dubaï',
  },
]

const conciergeServices = [
  {
    tag: 'Séjours',
    title: 'Itinéraires sur mesure',
    desc: 'Chaque séjour est conçu autour de vos préférences. Hébergements d\'exception, activités sélectionnées, rythme adapté. Vous décidez, nous orchestrons.',
  },
  {
    tag: 'Mobilité',
    title: 'Chauffeur & transferts privés',
    desc: 'Fleet de véhicules premium, chauffeurs professionnels bilingues. Aéroport, marina, hôtel, rendez-vous : chaque déplacement est fluide et ponctuel.',
  },
  {
    tag: 'Hébergement',
    title: 'Sélection d\'hébergements d\'exception',
    desc: 'Hôtels 5 étoiles, appartements avec vue, villas privées. Nous négocions les meilleures conditions et vous garantissons un accueil prioritaire.',
  },
  {
    tag: 'Conciergerie',
    title: 'Assistance disponible 24h/24',
    desc: 'Restaurant de dernière minute, billet sold-out, organisation d\'un dîner privé : notre conciergerie traite les demandes impossibles comme les ordinaires.',
  },
]

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        category="UR Experience"
        title="Dubaï comme vous n'avez jamais eu l'occasion de le vivre."
        subtitle="Yacht, buggy dans les dunes, skydive, conciergerie 24/7 — des expériences construites autour de vous pour les voyageurs qui refusent l'ordinaire."
        image="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=85&auto=format&fit=crop"
        imageAlt="Yacht de luxe Dubaï Marina"
      />

      {/* Intro edito */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="gold-line w-8" />
                <span className="label text-gold">Notre approche</span>
              </div>
              <h2 className="font-display font-light text-ink text-display-md">
                Pas de forfait.
                <br />
                <span className="italic">Que du sur mesure.</span>
              </h2>
              <div className="relative mt-8 h-60 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=85&auto=format&fit=crop"
                  alt="Buggy dans les dunes rouges de Dubaï"
                  fill
                  unoptimized
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-2">
              <p className="text-sm text-muted leading-relaxed">
                UR Experience ne propose pas de packages préformatés. Chaque mission commence par une conversation pour comprendre ce que vous cherchez vraiment — adrénaline, détente, découverte ou prestige.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Que vous visitiez Dubaï pour la première fois ou que vous y reveniez régulièrement, nous construisons une expérience qui n&apos;appartient qu&apos;à vous : du buggy dans les dunes rouges au lever du soleil, au dîner sur un yacht privatisé face au Burj Al Arab.
              </p>
              <div className="mt-4 relative h-52 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=85&auto=format&fit=crop"
                  alt="Yacht privatisé coucher de soleil Dubaï"
                  fill
                  unoptimized
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities grid — avec photos */}
      <section className="py-10 md:py-16 bg-cream">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-10">
            <span className="gold-line w-8" />
            <span className="label text-gold">Nos activités</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {activities.map((a) => (
              <div key={a.title} className="group bg-cream flex flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.imageAlt}
                    fill
                    unoptimized
                    className="object-cover object-center transition-transform duration-600 ease-expo-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                  <span className="absolute bottom-3 left-4 label text-gold text-[9px]">{a.tag}</span>
                </div>
                <div className="p-8 flex flex-col gap-3 flex-1">
                  <h3 className="font-display font-normal text-ink text-display-sm leading-tight">{a.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concierge services */}
      <section className="py-16 md:py-24 bg-cream-dark">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-10">
            <span className="gold-line w-8" />
            <span className="label text-gold">Conciergerie</span>
          </div>
          <h2 className="font-display font-light text-ink text-display-md mb-12 max-w-lg">
            Tout le reste,
            <br />
            <span className="italic">nous nous en occupons.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {conciergeServices.map((s) => (
              <div key={s.title} className="bg-cream-dark p-8 flex flex-col gap-4">
                <span className="label text-gold">{s.tag}</span>
                <h3 className="font-display font-normal text-ink text-display-sm leading-tight">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark editorial section */}
      <section className="py-20 md:py-28 bg-dark">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="gold-line w-8" />
                <span className="label text-gold">L&apos;expérience UR</span>
              </div>
              <h2 className="font-display font-light text-cream text-display-md mb-8">
                Vous arrivez.
                <br />
                <span className="italic text-cream/60">Nous avons tout préparé.</span>
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  'Accueil aéroport personnalisé',
                  'Hébergement sélectionné et confirmé',
                  'Programme d\'activités clé en main',
                  'Chauffeur disponible sur toute la durée',
                  'Conciergerie réactive 24/7',
                  'Accès yachts & expériences privatisées',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-cream/60">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-cream/10 p-10">
              <p className="font-display font-light text-cream text-display-sm italic mb-8 leading-snug">
                &ldquo;Un séjour bien préparé, c&apos;est un séjour où vous ne pensez plus à la logistique. Vous profitez, nous gérons.&rdquo;
              </p>
              <Button href="/contact" variant="outline-light" size="md">
                Préparer mon séjour <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-cream-dark">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-display font-light text-ink text-display-sm mb-2">
              Votre prochain séjour à Dubaï, sans compromis.
            </p>
            <p className="text-sm text-muted">Dites-nous vos dates · Nous construisons l&apos;expérience</p>
          </div>
          <Button href="/contact" variant="primary" size="lg">
            Organiser mon séjour <ArrowRight />
          </Button>
        </div>
      </section>
    </>
  )
}
