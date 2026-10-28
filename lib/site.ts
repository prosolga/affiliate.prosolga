// Set NEXT_PUBLIC_SITE_URL to the production domain (e.g. https://example.com).
// On Vercel it falls back to the project's production domain automatically.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')

export const siteName = 'ProSolutions Global Advisory'
export const siteTitle = 'Remote AI & Tech Jobs: Outlier, Mercor & micro1 | ProSolutions'
export const siteDescription =
  'Find remote AI training, software engineering and expert contract work paid in USD. Compare Outlier, Mercor and micro1 and apply through trusted talent platforms.'

export const faqs = [
  ['Does ProSolutions hire me or guarantee work?', 'No. ProSolutions is an independent referral partner. Hiring decisions, project availability, pay rates and contracts are controlled entirely by each platform.'],
  ['Does it cost anything to apply through this page?', 'No. You never pay ProSolutions or the platforms to apply. Be cautious of anyone who asks you to pay for access.'],
  ['Why use your link instead of going directly?', 'Our links are referral links. If you are accepted and meet a platform’s conditions, ProSolutions may receive a reward at no extra cost to you.'],
  ['Can I apply to more than one platform?', 'Generally yes. Many contributors register on several platforms, subject to each platform’s own terms.'],
  ['How much can I earn?', 'It depends on the platform, project, your skills and availability. We do not promise or estimate earnings; rates are shown by the platform.'],
  ['Is work available in my country?', 'Availability changes by project and region. Platforms may open, pause or close projects at any time.'],
]
