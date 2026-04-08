import type { Metadata } from 'next'
import HeroSection from '@/components/sections/home/HeroSection'
import BranchesSection from '@/components/sections/home/BranchesSection'
import WhySection from '@/components/sections/home/WhySection'
import StatsSection from '@/components/sections/home/StatsSection'
import LogoMarquee from '@/components/sections/LogoMarquee'
import ContactCTA from '@/components/sections/home/ContactCTA'

export const metadata: Metadata = {
  title: 'UR Dubai — L\'écosystème premium pour vivre, investir et entreprendre à Dubaï',
  description:
    'UR Dubai vous accompagne dans l\'immobilier, les expériences sur mesure et la création de société à Dubaï. Un interlocuteur unique. Une expertise locale totale.',
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <BranchesSection />
      <WhySection />
      <StatsSection />
      <LogoMarquee theme="dark" />
      <ContactCTA />
    </>
  )
}
