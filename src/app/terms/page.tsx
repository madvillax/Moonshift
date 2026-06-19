export default function TermsPage() {
  return (
    <div className="min-h-screen bg-bg-deep text-text-primary pt-24 pb-20">
      <div className="max-w-[720px] mx-auto px-6">
        <span
          className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-4 block"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          &frasl;&frasl; legal &middot; terms
        </span>

        <h1
          className="text-3xl md:text-4xl lg:text-[46px] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary mb-4"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Terms of Service
        </h1>

        <p className="text-[14px] text-text-muted mb-10">
          Effective 2026-04-23 &middot; Last updated 2026-05-17
        </p>

        <div className="p-5 border border-border-subtle bg-bg-surface mb-12">
          <h2 className="text-[13px] font-semibold tracking-[0.08em] uppercase text-text-muted mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            TL;DR
          </h2>
          <p className="text-[14px] text-text-secondary leading-relaxed">
            You own what Moonshift generates for you. You&rsquo;re responsible for what you do with it. You pay for what you use. We don&rsquo;t post to your social accounts without your explicit approval. Either of us can end this relationship at any time.
          </p>
        </div>

        <Section title="1. Who you&rsquo;re contracting with">
          <p>
            These Terms are an agreement between you and Harjot Singh Rana (sole proprietor) (&ldquo;Moonshift&rdquo;, &ldquo;we&rdquo;). By creating an account or using the service you agree to these Terms, our Privacy Policy, and our Acceptable Use Policy.
          </p>
        </Section>

        <Section title="2. Your account">
          <ul>
            <li>You must be at least 13 years old (or 16 where required) to use Moonshift.</li>
            <li>You&rsquo;re responsible for the security of your account and for all activity under it.</li>
            <li>You must provide accurate information and keep it up to date.</li>
            <li>We may suspend or terminate your account for violations of these Terms or the AUP.</li>
          </ul>
        </Section>

        <Section title="3. The service">
          <p>
            Moonshift is an autonomous pipeline that turns a prompt into a deployed application, a GitHub repository, drafted launch posts, and a hero image. The pipeline is gated by a human-in-the-loop step before anything is published to your connected social accounts.
          </p>
          <p>
            The service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis during beta. We may change, suspend, or discontinue features at any time, with reasonable advance notice for material changes affecting paid customers.
          </p>
        </Section>

        <Section title="4. Your content and generated artifacts">
          <ul>
            <li>You retain all rights in the prompts you send and the inputs you provide.</li>
            <li>You own the code, images, and marketing artifacts the pipeline generates for you, subject to third-party open-source licenses on any bundled dependencies.</li>
            <li>You grant us the limited rights we need to run the service: to process your prompts, generate artifacts, deploy to your connected accounts, and display your content back to you.</li>
            <li>We may use aggregate, de-identified usage data to improve the service.</li>
            <li>If you submit feedback, bug reports, or suggestions, you grant us a non-exclusive, perpetual, royalty-free license to use them without attribution.</li>
          </ul>
        </Section>

        <Section title="5. AI-generated output">
          <p>
            Moonshift generates code, copy, and images using large language models. Output may contain mistakes, bugs, security issues, hallucinated facts, or unintended similarity to other work. You are responsible for reviewing and testing everything the pipeline produces before you deploy or publish it.
          </p>
          <p>We make no warranties about the accuracy, safety, or originality of generated output.</p>
        </Section>

        <Section title="6. Connected accounts and publishing">
          <p>When you connect GitHub, Vercel, X, LinkedIn, or Google Ads:</p>
          <ul>
            <li>We only act on those accounts after you explicitly approve the action in the Moonshift interface.</li>
            <li>For X and LinkedIn: we draft posts for your review. Nothing is published until you click approve.</li>
            <li>You can disconnect any account at any time from your dashboard.</li>
          </ul>
        </Section>

        <Section title="7. Billing and payment">
          <ul>
            <li>Paid plans are billed monthly in advance. Pricing is published at moonshift.io/pricing.</li>
            <li>AI credits (&ldquo;moons&rdquo;) may be purchased separately and do not expire while your account is active.</li>
            <li>You can cancel any time from your dashboard. Cancellation takes effect at the end of the current billing period. No refunds for partial months.</li>
            <li>We may change plan pricing with 30 days&rsquo; notice. Your current rate is locked for the remainder of your billing period.</li>
          </ul>
        </Section>

        <Section title="8. Acceptable use">
          <p>You agree to follow our Acceptable Use Policy. We reserve the right to suspend or terminate accounts that violate the AUP without prior notice in cases of severe or illegal misuse.</p>
        </Section>

        <Section title="9. Intellectual property">
          <p>
            Moonshift&rsquo;s name, logo, UI design, and underlying platform code are our intellectual property. You may not copy, modify, or redistribute them without permission.
          </p>
        </Section>

        <Section title="10. Limitation of liability">
          <p>
            To the maximum extent permitted by law, Moonshift is not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service. Our total liability for any claim is limited to the amount you paid us in the 12 months preceding the claim.
          </p>
        </Section>

        <Section title="11. Indemnification">
          <p>
            You agree to indemnify and hold harmless Moonshift from any claims, damages, or expenses arising from your use of the service, your content, or your violation of these Terms or the AUP.
          </p>
        </Section>

        <Section title="12. Termination">
          <ul>
            <li>You can stop using the service and delete your account at any time.</li>
            <li>We may terminate or suspend your account for violations of these Terms, with notice where reasonably possible.</li>
            <li>Upon termination, your right to use the service ends immediately. We will delete your account data within 30 days unless we are required to retain it by law.</li>
          </ul>
        </Section>

        <Section title="13. Governing law and disputes">
          <p>
            These Terms are governed by the laws of India. Any disputes will be resolved through arbitration in Bengaluru, Karnataka. You agree to resolve disputes individually, not as part of a class action.
          </p>
        </Section>

        <Section title="14. Changes to these terms">
          <p>
            We will notify you of material changes via email and a notice on the dashboard at least 30 days before they take effect. Continued use after changes take effect constitutes acceptance.
          </p>
        </Section>

        <Section title="15. Contact">
          <p>Questions about these Terms? Email support@moonshift.io.</p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2
        className="text-[18px] font-medium text-text-primary mb-3"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        {title}
      </h2>
      <div className="text-[15px] text-text-secondary leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

