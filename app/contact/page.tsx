import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import { Callout, Email, LegalList, LegalPage, LegalSection, Strong } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Contact Us | ProSolutions',
  description: 'Contact ProSolutions Global Advisory about this page, how referral links work, or to report someone misusing our name.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <LegalPage title="Contact Us" intro={<p>We usually reply within 2 working days.</p>}>
      <a href="mailto:info@prosolga.com" className="flex items-center gap-4 rounded-2xl border border-[#e2e7f0] bg-white p-6 shadow-[0_20px_45px_-28px_rgba(11,31,75,0.45)] transition hover:-translate-y-0.5">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#0b1f4b] text-white"><Mail className="size-5" /></span>
        <span><span className="block text-xs font-bold uppercase tracking-[0.13em] text-[#d62839]">Email</span><span className="text-lg font-semibold text-[#12213f]">info@prosolga.com</span></span>
      </a>

      <Callout><Strong>Please note:</Strong> We are an independent referral partner. For problems with an application, assessment, project or payment, contact the platform directly (Outlier, Mercor or micro1), as we cannot see or change your account.</Callout>

      <LegalSection title="What we can help with">
        <LegalList items={['Questions about this page and how referral links work', 'Reporting someone who is misusing our name']} />
      </LegalSection>

      <p>We will never ask you for a password, ID document or payment. If someone claiming to be us does, please do not respond and email us at <Email />.</p>
    </LegalPage>
  )
}
