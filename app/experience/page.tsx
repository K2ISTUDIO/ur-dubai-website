import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import Button, { ArrowRight } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'UR Experience — Conciergerie & Séjours de Luxe à Dubaï',
  description:
    'Séjours sur mesure, conciergerie lifestyle, chauffeur et accueil VIP à Dubaï. UR Experience crée des expériences inoubliables pour les voyageurs exigeants.',
  keywords: ['conciergerie Dubai', 'tourisme luxe Dubai', 'séjour sur mesure Dubai', 'chauffeur Dubai', 'expérience VIP Dubai'],
}

const services = [
  {
    tag: 'Séjours',
    title: 'Itinéraires sur mesure',
    desc: 'Chaque séjour est conçu autour de vos préférences. Hébergements d\'exception, activités sélectionnées, rythme adapté. Vous décidez, nous orchestrons.',
  },
  {
    tag: 'Conciergerie',
    title: 'Une assistance disponible à toute heure',
    desc: 'Restaurant de dernière minute, billet sold-out, organisation d\'un dîner privé : notre conciergerie traite les demandes impossibles comme les ordinaires.',
  },
  {
    tag: 'Mobilité',
    title: 'Chauffeur & transferts privés',
    desc: 'Fleet de véhicules premium, chauffeurs professionnels bilingues. Aéroport, marina, hôtel, rendez-vous business : chaque déplacement est fluide.',
  },
  {
    tag: 'Hébergement',
    title: 'Sélection d\'hébergements d\'exception',
    desc: 'Hôtels 5 étoiles, appartements avec vue, villas privées. Nous négocions les meilleures conditions et vous garantissons un accueil prioritaire.',
  },
  {
    tag: 'Business',
    title: 'Conciergerie business',
    desc: 'Organisation de réunions, espaces de travail premium, introduction aux réseaux locaux. Pour combiner efficacité professionnelle et confort de séjour.',
  },
  {
    tag: 'Événements',
    title: 'Expériences privées & événements',
    desc: 'Yacht privatisé, soirées exclusives, expériences gastronomiques, accès VIP aux événements de la ville. Ce qui n\'existe pas sur Booking existe chez nous.',
  },
]

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        category="UR Experience"
        title="Dubaï comme vous n'avez jamais eu l'occasion de le vivre."
        subtitle="Des séjours conçus dans les moindres détails pour des clients qui savent ce qu'ils veulent — et qui méritent mieux que l'ordinaire."
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85&auto=format&fit=crop"
        imageAlt="Piscine de luxe à Dubaï"
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
              {/* Image sous le titre */}
              <div className="relative mt-8 h-60 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=85&auto=format&fit=crop"
                  alt="Lobby hôtel de luxe Dubaï"
                  fill
                  unoptimized
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-2">
              <p className="text-sm text-muted leading-relaxed">
                UR Experience ne propose pas de packages préformatés. Chaque mission commence par une conversation pour comprendre ce que vous cherchez vraiment.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Que vous visitiez Dubaï pour la première fois ou que vous y reveniez régulièrement, nous construisons une expérience qui n&apos;appartient qu&apos;à vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-4 md:py-8 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s) => (
              <div key={s.title} className="bg-cream p-8 md:p-10 flex flex-col gap-4">
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
