import type { Metadata } from 'next'
import { Callout, Email, LegalList, LegalPage, LegalSection, Strong } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy | ProSolutions',
  description: 'How ProSolutions Global Advisory handles personal data on its remote opportunities page, under the UK GDPR and the Data Protection Act 2018.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="29 October 2026"
      intro={<p>This policy explains how ProSolutions Global Advisory (“we”, “us”) handles personal data when you visit our remote opportunities page. We follow the UK GDPR and the Data Protection Act 2018.</p>}
    >
      <LegalSection title="1. Who is responsible for your data">
        <p>The data controller is ProSolutions Global Advisory Limited. Contact: <Email /></p>
      </LegalSection>

      <LegalSection title="2. What we collect">
        <LegalList
          items={[
            <><Strong>Information you send us:</Strong> your name, email address and message, ONLY if you contact us.</>,
            <><Strong>Technical and usage data:</Strong> IP address, device and browser type, pages viewed and the ad or link you came from.</>,
            <><Strong>Advertising and analytics data:</Strong> collected by cookies and similar tools, such as the Meta Pixel, only where you have consented.</>,
          ]}
        />
        <Callout><Strong>Important:</Strong> When you click through to Outlier, Mercor or micro1, you apply on their websites. We do not receive or store your CV, ID documents, assessment results or payment details. Those platforms handle that data under their own privacy policies.</Callout>
      </LegalSection>

      <LegalSection title="3. Why we use it and our legal basis">
        <LegalList
          items={[
            <><Strong>To reply to your messages:</Strong> legitimate interests or steps you ask us to take.</>,
            <><Strong>To keep the site secure and working:</Strong> legitimate interests.</>,
            <><Strong>To measure and improve our ads and page:</Strong> consent, which you can withdraw at any time.</>,
            <><Strong>To track referral sign-ups and meet legal and tax duties:</Strong> legitimate interests and legal obligation.</>,
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Who we share it with">
        <p>We share data only with service providers who help us run the page, such as hosting, email and analytics, and with advertising platforms such as Meta where you have consented. The referral platforms may tell us whether a sign-up came through our link, so we can confirm referral rewards. We do not sell your data.</p>
      </LegalSection>

      <LegalSection title="5. How long we keep it">
        <p>Enquiry emails are kept for up to 12 months after our last contact. Analytics data is kept as set by each provider, typically no more than 26 months. Records needed for tax purposes are kept for the period the law requires.</p>
      </LegalSection>

      <LegalSection title="6. Cookies">
        <p>We use essential cookies to run the site. Analytics and advertising cookies, including the Meta Pixel, are used only if you accept them in the cookie banner. You can change your choice at any time or block cookies in your browser.</p>
      </LegalSection>

      <LegalSection title="7. Your rights">
        <p>Under UK GDPR you can ask to access, correct, delete or restrict the use of your data, object to its use, request a portable copy, and withdraw consent. Email us and we will reply within one month. If you are unhappy, you can complain to the Information Commissioner’s Office at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0b4f98] underline underline-offset-2 hover:text-[#d62839]">ico.org.uk</a>. If you live in US, South Africa, India or the UAE, you may also have rights under your local law (POPIA, the Digital Personal Data Protection Act 2023 and the UAE PDPL respectively), and we will respect them as far as they apply.</p>
      </LegalSection>

      <LegalSection title="8. Children">
        <p>This page is for people aged 18 and over. We do not knowingly collect data from children.</p>
      </LegalSection>

      <LegalSection title="9. Changes">
        <p>We may update this policy and will change the date above when we do.</p>
      </LegalSection>

      <Callout>We will never ask you for payment for these referrals. If someone claiming to be us does, please do not respond to them, and email us immediately at <Email />.</Callout>
    </LegalPage>
  )
}
