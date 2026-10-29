import type { Metadata } from 'next'
import { LegalPage, LegalSection } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Terms of Use | ProSolutions',
  description: 'Terms of use for the ProSolutions Global Advisory remote opportunities page, including how referral links and rewards work.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="29 October 2026"
      intro={<p>By using this page you agree to these terms. If you do not agree, please do not use it.</p>}
    >
      <LegalSection title="1. Who we are and what we do">
        <p>This page is run by ProSolutions Global Advisory Limited. We are an independent referral partner through our Founder. We introduce visitors to third-party platforms, currently Outlier, Mercor and micro1. We are not a recruitment agency, an employer, or a representative of those platforms, and we do not place anyone into roles.</p>
      </LegalSection>

      <LegalSection title="2. Referral links and rewards">
        <p>The links on this page are personal referral links held by Chinwe Azikiwe. If you join a platform through a link and meet that platform’s conditions, we may receive a reward from the platform. This costs you nothing and does not change what the platform offers you. You are free to apply directly without using our links.</p>
      </LegalSection>

      <LegalSection title="3. No guarantees">
        <p>We do not guarantee that you will be accepted, offered work, or earn any amount. Eligibility, assessments, availability of projects, pay rates, payment methods and contracts are decided only by each platform and can change or end without notice. Any descriptions on this page are general and may be out of date, so always check the platform’s own terms before you decide.</p>
      </LegalSection>

      <LegalSection title="4. Your relationship with the platforms">
        <p>When you click a referral link you leave our page. Your agreement is with the platform, and its terms and privacy policy apply. We are not responsible for the platforms’ content, decisions, payments or conduct, and we cannot resolve account, assessment or payment disputes for you.</p>
      </LegalSection>

      <LegalSection title="5. No fees">
        <p>We never charge you to use this page or to be referred. Be wary of anyone who asks you to pay for access to these platforms or claims to sell “guaranteed” placements. If someone uses our name to do this, please tell us.</p>
      </LegalSection>

      <LegalSection title="6. Using the page">
        <p>You agree not to misuse the page, attempt to disrupt it, copy it to mislead others, or claim an association with us that does not exist.</p>
      </LegalSection>

      <LegalSection title="7. Intellectual property">
        <p>The page design and our own content belong to us. Platform names and logos belong to their owners and are used only to identify them.</p>
      </LegalSection>

      <LegalSection title="8. Our liability">
        <p>This page is provided “as is”. To the extent the law allows, we are not liable for loss of income, opportunity or data arising from your use of the page or the platforms. Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot legally be limited.</p>
      </LegalSection>

      <LegalSection title="9. Changes and governing law">
        <p>We may update these terms and will change the date above when we do. These terms are governed by the laws of England and Wales, and the courts of England and Wales have jurisdiction, although this does not remove any mandatory consumer rights you have in your own country.</p>
      </LegalSection>
    </LegalPage>
  )
}
