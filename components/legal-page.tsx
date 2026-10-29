import { ArrowLeft } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'

export function LegalPage({ title, updated, intro, children }: { title: string; updated?: string; intro?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f8fb] text-[#12213f]">
      <header className="border-b border-[#e7ebf2] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="/" aria-label="ProSolutions home">
            <img src="/logo.png" alt="ProSolutions Global Advisory" width={632} height={395} className="h-16 w-auto object-contain" />
          </a>
          <a href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5e6a7f] transition hover:text-[hsl(350_80%_50%)]">
            <ArrowLeft className="size-4" /> Back to opportunities
          </a>
        </div>
      </header>
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-16 lg:py-20">
        <h1 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{title}</h1>
        {updated && <p className="mt-3 text-sm text-[#8b96aa]">Last updated: {updated}</p>}
        {intro && <div className="mt-6 text-base leading-7 text-[#4f5b72]">{intro}</div>}
        <div className="mt-10 flex flex-col gap-9 text-[15px] leading-7 text-[#4f5b72]">{children}</div>
      </main>
      <SiteFooter />
    </div>
  )
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-[#12213f]">{title}</h2>
      <div className="flex flex-col gap-3">{children}</div>
    </section>
  )
}

export function LegalList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-[#d62839]">
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  )
}

export function Callout({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-[#f0c9cd] border-l-4 border-l-[#d62839] bg-[#fff7f7] p-5 text-sm leading-6">{children}</div>
}

export const Strong = ({ children }: { children: React.ReactNode }) => <strong className="font-semibold text-[#12213f]">{children}</strong>

export const Email = () => <a href="mailto:info@prosolga.com" className="font-semibold text-[#0b4f98] underline underline-offset-2 hover:text-[#d62839]">info@prosolga.com</a>
