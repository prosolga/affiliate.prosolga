export function SiteFooter() {
  return (
    <footer className="bg-[#0b1f4b] text-[#aebbd8]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-9 text-center text-xs sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">
        <p>© 2026 ProSolutions Global Advisory. All rights reserved.</p>
        <div className="flex justify-center gap-4 sm:justify-end">
          <a href="/privacy" className="transition hover:text-[hsl(350_80%_50%)]">Privacy Policy</a>
          <a href="/terms" className="transition hover:text-[hsl(350_80%_50%)]">Terms</a>
          <a href="/contact" className="transition hover:text-[hsl(350_80%_50%)]">Contact</a>
        </div>
      </div>
    </footer>
  )
}
