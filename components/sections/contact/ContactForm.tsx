'use client'

import { useState } from 'react'
import Button, { ArrowRight } from '@/components/ui/Button'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const subjects = [
  { value: '', label: 'Sélectionnez votre projet' },
  { value: 'immobilier', label: 'UR Real Estate — Immobilier & investissement' },
  { value: 'experience', label: 'UR Experience — Séjour & conciergerie' },
  { value: 'business', label: 'UR Business — Création de société' },
  { value: 'global', label: 'Accompagnement global (plusieurs branches)' },
  { value: 'autre', label: 'Autre demande' },
]

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    // Simulate async submission — replace with your API call
    await new Promise((r) => setTimeout(r, 1200))
    setState('success')
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-start gap-5 py-8">
        <div className="flex items-center gap-3">
          <span className="gold-line w-8" />
          <span className="label text-gold">Message reçu</span>
        </div>
        <h3 className="font-display font-light text-ink text-display-sm">
          Nous vous répondons sous 24h.
        </h3>
        <p className="text-sm text-muted max-w-sm leading-relaxed">
          Merci pour votre message. Notre équipe va l&apos;étudier et revenir vers vous avec une proposition personnalisée.
        </p>
        <button
          onClick={() => { setState('idle'); setForm({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' }) }}
          className="label text-muted hover:text-ink transition-colors duration-300 mt-2"
        >
          Envoyer une nouvelle demande
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="firstName" className="label text-muted">Prénom</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={form.firstName}
            onChange={handleChange}
            required
            placeholder="Votre prénom"
            className="w-full bg-transparent border border-border px-4 py-3.5 text-sm text-ink placeholder:text-muted-light focus:outline-none focus:border-gold transition-colors duration-300"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lastName" className="label text-muted">Nom</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={form.lastName}
            onChange={handleChange}
            required
            placeholder="Votre nom"
            className="w-full bg-transparent border border-border px-4 py-3.5 text-sm text-ink placeholder:text-muted-light focus:outline-none focus:border-gold transition-colors duration-300"
          />
        </div>
      </div>

      {/* Contact row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="label text-muted">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="votre@email.com"
            className="w-full bg-transparent border border-border px-4 py-3.5 text-sm text-ink placeholder:text-muted-light focus:outline-none focus:border-gold transition-colors duration-300"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="label text-muted">Téléphone <span className="text-muted-light font-normal normal-case">(optionnel)</span></label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+33 6 00 00 00 00"
            className="w-full bg-transparent border border-border px-4 py-3.5 text-sm text-ink placeholder:text-muted-light focus:outline-none focus:border-gold transition-colors duration-300"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="label text-muted">Votre projet</label>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full bg-cream border border-border px-4 py-3.5 text-sm text-ink focus:outline-none focus:border-gold transition-colors duration-300 appearance-none cursor-pointer"
        >
          {subjects.map((s) => (
            <option key={s.value} value={s.value} disabled={s.value === ''}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="label text-muted">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Décrivez votre projet, vos objectifs, votre calendrier..."
          className="w-full bg-transparent border border-border px-4 py-3.5 text-sm text-ink placeholder:text-muted-light focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
        />
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <p className="text-xs text-muted-light max-w-xs">
          Vos informations sont confidentielles. Nous répondons sous 24h, souvent moins.
        </p>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={state === 'loading'}
          className="flex-shrink-0"
        >
          {state === 'loading' ? 'Envoi en cours…' : <>Envoyer ma demande <ArrowRight /></>}
        </Button>
      </div>
    </form>
  )
}
