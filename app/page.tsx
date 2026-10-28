'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, ChevronDown, Globe2, Menu, ShieldCheck, Zap, X } from 'lucide-react'
import { useState } from 'react'
import { faqs } from '@/lib/site'

const platforms = [
  {
    number: '01',
    eyebrow: 'AI training & expertise',
    name: 'Outlier',
    partner: 'Outlier AI',
    description: 'Improve AI models through writing, reviewing, translating and evaluating responses in your field.',
    fit: 'Writers, translators, generalists, domain experts',
    type: 'Flexible, project-based, remote',
    pay: 'Hourly in USD; varies by project and skill',
    accent: 'bg-[#eef3ff] text-[#3156b8]',
    href: 'https://app.outlier.ai/expert/referrals/link/_QneZXP03Gq4_br1a4WY8msurJM',
  },
  {
    number: '02',
    eyebrow: 'Engineering & data',
    name: 'Mercor',
    partner: 'Mercor',
    description: 'An AI-driven talent marketplace matching technical professionals with contract roles at AI companies.',
    fit: 'Software engineers, AI/ML, data scientists, Python specialists',
    type: 'Contract roles matched to your profile',
    pay: 'Set per role; shown before you accept',
    accent: 'bg-[#eaf8f4] text-[#11836b]',
    href: 'https://t.mercor.com/qwvej',
  },
  {
    number: '03',
    eyebrow: 'Expert matching',
    name: 'micro1',
    partner: 'micro1',
    description: 'An AI-led interview and matching platform connecting vetted experts with AI labs and tech companies.',
    fit: 'Engineers, specialists and experts across technical fields',
    type: 'AI-led interview, then project matching',
    pay: 'Set per opportunity; confirmed by the platform',
    accent: 'bg-[#fff1ec] text-[#c45b35]',
    href: 'https://refer.micro1.ai/referral/jobs?referralCode=31084f90-ef8c-4b90-9cd8-72f832cfcb2a&utm_source=referral&utm_medium=share&utm_campaign=job_referral',
  },
]

const steps = [
  ['Choose a track', 'Pick the platform that best fits your skills.'],
  ['Create your profile', 'Sign up and submit your CV or credentials.'],
  ['Complete screening', 'Take the platform assessment or interview.'],
  ['Get matched & paid', 'Start on projects under the platform’s terms.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f8fb] text-[#12213f]">
      <header className="sticky top-0 z-20 border-b border-[#e7ebf2] bg-white/95 text-[#12213f] shadow-[0_10px_30px_-24px_rgba(11,31,75,0.55)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="ProSolutions home">
            <img src="/logo.png" alt="ProSolutions Global Advisory" width={632} height={395} fetchPriority="high" className="h-16 w-auto object-contain" />
          </a>
          <nav className="hidden items-center gap-7 text-sm text-[#5e6a7f] md:flex">
            <a href="#tracks" className="font-semibold transition hover:text-[hsl(350_80%_50%)]">Opportunities</a><a href="#how-it-works" className="font-semibold transition hover:text-[hsl(350_80%_50%)]">How it works</a><a href="#faq" className="font-semibold transition hover:text-[hsl(350_80%_50%)]">FAQ</a>
            <a href="#tracks" className="rounded-full bg-[hsl(215_100%_30%)] px-5 py-2.5 font-semibold text-white shadow-[0_8px_18px_-10px_rgba(11,79,152,0.8)] transition hover:-translate-y-0.5 hover:bg-[#083d77]">Find your track <ArrowUpRight className="ml-1 inline size-3.5" /></a>
          </nav>
          <button className="rounded-lg p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        <AnimatePresence>
          {menuOpen && <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="flex flex-col gap-4 overflow-hidden border-t border-white/10 px-5 py-5 text-sm font-semibold text-[#c1cce3] md:hidden"><a href="#tracks" onClick={() => setMenuOpen(false)}>Opportunities</a><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></motion.nav>}
        </AnimatePresence>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-[#0b1f4b] text-white">
          <div className="hero-grid absolute inset-0 opacity-30" aria-hidden="true" /><div className="hero-glow hero-glow-one" aria-hidden="true" /><div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-5 pb-28 pt-20 lg:px-8 lg:pb-36 lg:pt-28">
            <div className="max-w-3xl animate-fade-up">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#ff9da7]"><span className="size-1.5 rounded-full bg-[#ff6876]" /> Remote AI & tech opportunities</div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[4.4rem]">Find your next <span className="text-[#ff6876]">remote opportunity.</span></h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-[#b9c4dc] sm:text-lg">We guide skilled engineers, writers, linguists and subject-matter experts to established platforms hiring contributors for AI projects, paid in USD.</p>
              <div className="mt-9 flex flex-wrap items-center gap-4"><a href="#tracks" className="inline-flex items-center gap-2 rounded-lg bg-[#d62839] px-5 py-3.5 text-sm font-semibold shadow-xl shadow-[#d62839]/20 transition hover:-translate-y-0.5 hover:bg-[#ed3b4d]">Find your track <ArrowDown className="size-4" /></a><span className="text-sm text-[#aebbd8]">Independent referral partner</span></div>
              <div className="mt-12 flex flex-wrap gap-2.5">{['South Africa', 'India', 'UAE'].map((region) => <span key={region} className="rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 text-xs text-[#c6d0e3]">{region}</span>)}</div>
            </div>
          </div>
          <div className="absolute -right-24 bottom-0 hidden size-80 rounded-full border border-white/10 lg:block" /><div className="absolute -right-8 bottom-16 hidden size-56 rounded-full border border-[#ff6876]/20 lg:block" />
        </section>

        <section id="tracks" className="relative z-10 mx-auto -mt-16 max-w-7xl px-5 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {platforms.map((platform, index) => <motion.article key={platform.name} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08 }} className="group flex h-full flex-col rounded-2xl border border-[#e2e7f0] bg-white p-6 shadow-[0_20px_45px_-28px_rgba(11,31,75,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_-25px_rgba(11,31,75,0.32)] sm:p-7">
              <div className="flex items-start justify-between"><span className={`rounded-md px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] ${platform.accent}`}>Track {platform.number}</span><ArrowUpRight className="size-5 text-[#b3bdd0] transition group-hover:text-[#d62839]" /></div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.13em] text-[#d62839]">{platform.eyebrow}</p><h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#12213f]">{platform.name}</h2><p className="mt-3 min-h-[96px] text-sm leading-6 text-[#66738b]">{platform.description}</p>
              <div className="mt-5 flex min-h-[132px] flex-col gap-3 border-t border-[#edf0f5] pt-5 text-sm"><Meta label="Best for" text={platform.fit} /><Meta label="Work type" text={platform.type} /><Meta label="Pay" text={platform.pay} /></div>
              <a href={platform.href} target="_blank" rel="sponsored noopener noreferrer" className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b1f4b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#d62839]">Apply via {platform.name} <ArrowUpRight className="size-4" /></a><p className="mt-2 text-center text-[11px] text-[#8b96aa]">Opens {platform.name}’s own site</p>
            </motion.article>)}
          </div>
        </section>

        <motion.section id="how-it-works" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7 }} className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><SectionIntro eyebrow="A clear path forward" title="How it works" description="Four simple steps from interest to your first assessment." /><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{steps.map(([title, description], index) => <div key={title} className="relative rounded-2xl border border-[#e2e7f0] bg-white p-6"><span className="grid size-9 place-items-center rounded-full bg-[#0b1f4b] text-sm font-bold text-white">0{index + 1}</span><h3 className="mt-5 text-base font-semibold text-[#12213f]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#6c7890]">{description}</p>{index < 3 && <ArrowUpRight className="absolute right-5 top-7 hidden size-4 text-[#ccd3df] lg:block" />}</div>)}</div></motion.section>

        <section className="bg-white"><div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28"><SectionIntro eyebrow="At a glance" title="Compare the platforms" description="A quick guide. Details change often, so always confirm current terms on each platform." /><div className="mt-12 overflow-x-auto rounded-2xl border border-[#e2e7f0]"><table className="w-full min-w-[720px] border-collapse text-left text-sm"><thead><tr className="bg-[#0b1f4b] text-white"><th className="px-5 py-4 font-medium"> </th><th className="px-5 py-4 font-semibold">Outlier</th><th className="px-5 py-4 font-semibold">Mercor</th><th className="px-5 py-4 font-semibold">micro1</th></tr></thead><tbody>{[['Strongest fit', 'Writing, languages, generalist expertise', 'Software, data and AI engineering', 'Technical and specialist experts'], ['Screening', 'Onboarding and skills assessments', 'Profile review and role matching', 'AI-led interview'], ['Engagement', 'Project-based', 'Contract roles', 'Project or role matching'], ['Payment', 'USD, per platform terms', 'USD, per platform terms', 'USD, per platform terms']].map((row) => <tr key={row[0]} className="border-b border-[#edf0f5] last:border-0"><th className="px-5 py-4 font-semibold text-[#12213f]">{row[0]}</th>{row.slice(1).map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`} className="px-5 py-4 text-[#68758d]">{cell}</td>)}</tr>)}</tbody></table></div></div></section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28"><SectionIntro eyebrow="Before you apply" title="Set yourself up for success" description="Each platform sets its own requirements. These are the common ones to have ready." /><div className="mt-12 grid gap-5 md:grid-cols-3">{[['Identity verification', 'A valid government-issued photo ID, such as a passport or national ID, is typically required.', ShieldCheck], ['Payment method', 'Check supported providers such as PayPal or bank transfer in your country.', Globe2], ['Equipment & time', 'Bring a reliable computer, stable internet and a quiet space for assessments.', Zap]].map(([title, description, Icon]) => <div key={title as string} className="rounded-2xl border border-[#e2e7f0] bg-white p-6"><Icon className="size-5 text-[#d62839]" /><h3 className="mt-5 font-semibold text-[#12213f]">{title as string}</h3><p className="mt-2 text-sm leading-6 text-[#6c7890]">{description as string}</p></div>)}</div></section>

        <section id="faq" className="bg-[#eef2f8]"><div className="mx-auto max-w-3xl px-5 py-24 lg:py-28"><SectionIntro eyebrow="Good to know" title="Frequently asked questions" /><div className="mt-10 flex flex-col gap-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-xl border border-[#dce3ee] bg-white px-5 py-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[#12213f]">{question}<ChevronDown className="size-4 shrink-0 text-[#7a879d] transition group-open:rotate-180" /></summary><p className="mt-3 max-w-2xl text-sm leading-6 text-[#68758d]">{answer}</p></details>)}</div></div></section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="rounded-2xl border border-[#f0c9cd] border-l-4 border-l-[#d62839] bg-[#fff7f7] p-6 text-sm leading-6 text-[#68758d] lg:p-8"><strong className="text-[#12213f]">Disclosure:</strong> ProSolutions Global Advisory is an independent referral partner. We are not employed by, an agent of, or officially endorsed by Outlier, Mercor or micro1, and we are not a recruitment agency or employer. We may earn a referral reward when you join through our links, at no cost to you. We do not guarantee acceptance, work, or earnings. All eligibility decisions, rates and terms are set solely by each platform.</div></section>
      </main>

      <footer className="bg-[#0b1f4b] text-[#aebbd8]"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-9 text-center text-xs sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8"><p>© 2026 ProSolutions Global Advisory. All rights reserved.</p><div className="flex justify-center gap-4 sm:justify-end"><a href="#" className="transition hover:text-[hsl(350_80%_50%)]">Privacy Policy</a><a href="#" className="transition hover:text-[hsl(350_80%_50%)]">Terms</a><a href="#" className="transition hover:text-[hsl(350_80%_50%)]">Contact</a></div></div></footer>
    </div>
  )
}

function Meta({ label, text }: { label: string; text: string }) { return <div className="flex gap-3"><span className="w-16 shrink-0 font-semibold text-[#12213f]">{label}</span><span className="text-[#6c7890]">{text}</span></div> }
function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) { return <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d62839]">{eyebrow}</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#12213f] sm:text-4xl">{title}</h2>{description && <p className="mt-4 text-base leading-7 text-[#6c7890]">{description}</p>}</div> }
