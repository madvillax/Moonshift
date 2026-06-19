export default function AUPPage() {
  return (
    <div className="min-h-screen bg-bg-deep text-text-primary pt-24 pb-20">
      <div className="max-w-[720px] mx-auto px-6">
        <span
          className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-4 block"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          &frasl;&frasl; legal &middot; aup
        </span>

        <h1
          className="text-3xl md:text-4xl lg:text-[46px] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary mb-4"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Acceptable Use Policy
        </h1>

        <p className="text-[14px] text-text-muted mb-10">
          Effective 2026-04-23 &middot; Last updated 2026-05-17
        </p>

        <div className="p-5 border border-border-subtle bg-bg-surface mb-12">
          <h2 className="text-[13px] font-semibold tracking-[0.08em] uppercase text-text-muted mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            TL;DR
          </h2>
          <p className="text-[14px] text-text-secondary leading-relaxed">
            Don&rsquo;t use Moonshift to build or promote things that are illegal, abusive, deceptive, dangerous, or infringing. We will terminate accounts that do. If you&rsquo;re unsure whether something is okay, ask us.
          </p>
        </div>

        <Section title="1. Scope">
          <p>
            This Acceptable Use Policy applies to anything you send as a prompt, anything the pipeline generates on your behalf, and anything you choose to deploy or publish via the service. Violations of this AUP are violations of our Terms of Service.
          </p>
        </Section>

        <Section title="2. Prohibited uses">
          <p>You may not use Moonshift to generate, deploy, or promote material that:</p>
          <ul>
            <li>Is illegal in the jurisdictions where you or your users are located.</li>
            <li>Infringes copyright, trademark, trade secret, or other intellectual-property rights.</li>
            <li>Violates privacy rights, including building tools that collect, aggregate, or publish personal data without consent.</li>
            <li>Is defamatory, harassing, threatening, or bullying.</li>
            <li>Sexually exploits or endangers minors in any form.</li>
            <li>Depicts non-consensual sexual content or deepfake sexual content of real people.</li>
            <li>Is designed to deceive (phishing, scams, fraudulent schemes, impersonation of real people or brands without consent).</li>
            <li>Generates, distributes, or helps develop weapons, explosives, biological or chemical agents, or malware.</li>
            <li>Facilitates illegal gambling, controlled substances, or human trafficking.</li>
            <li>Promotes self-harm, suicide, or eating disorders.</li>
            <li>Contains hate speech or incites violence against groups defined by race, religion, ethnicity, gender, sexual orientation, disability, or similar protected characteristics.</li>
            <li>Violates export controls or sanctions lists.</li>
          </ul>
        </Section>

        <Section title="3. Platform abuse">
          <p>You may not use Moonshift to attack, degrade, or circumvent the service or third-party services we integrate with. Specifically, you may not:</p>
          <ul>
            <li>Attempt to bypass budget caps, rate limits, authentication, or the human-approval gate.</li>
            <li>Use the service to mass-generate spam for X, LinkedIn, or email.</li>
            <li>Scrape, mirror, or re-sell the service or the underlying LLM endpoints.</li>
            <li>Interfere with other users&rsquo; runs, data, or sessions.</li>
            <li>Probe, scan, or test the vulnerability of the service without prior written permission.</li>
            <li>Use the service in a way that imposes an unreasonably large load on our infrastructure.</li>
            <li>Create multiple accounts to evade blocks, bans, or rate limits.</li>
            <li>Reverse engineer, decompile, or extract the source code of the service (except as permitted by applicable law).</li>
          </ul>
        </Section>

        <Section title="4. Social media and advertising policies">
          <p>When you connect X, LinkedIn, or Google Ads, you must also comply with their respective terms:</p>
          <ul>
            <li><strong>X (Twitter)</strong> — X Terms of Service and X Rules.</li>
            <li><strong>LinkedIn</strong> — LinkedIn User Agreement and Professional Community Policies.</li>
            <li><strong>Google Ads</strong> — Google Ads Terms and Conditions and Google Ads Policies.</li>
          </ul>
          <p className="mt-3">We reserve the right to disconnect your social accounts if we receive complaints or take-down notices about content published through Moonshift.</p>
        </Section>

        <Section title="5. Content we don&rsquo;t host">
          <p>We do not allow Moonshift to be used to host or serve:</p>
          <ul>
            <li>Adult or sexually explicit content.</li>
            <li>Gambling, betting, or lottery sites (except where legally licensed and pre-approved by us).</li>
            <li>Cryptocurrency mixers, tumblers, or unregistered money-transmitter services.</li>
            <li>Marketplaces for illegal goods or services.</li>
          </ul>
        </Section>

        <Section title="6. Reporting violations">
          <p>
            If you believe someone is violating this AUP, email abuse@moonshift.io. Include the relevant URLs, prompts, and any supporting evidence. We review reports within 48 hours and take appropriate action, which may include content removal, account suspension, or permanent termination.
          </p>
        </Section>

        <Section title="7. Enforcement">
          <p>
            We reserve the right to enforce this AUP through any means we deem appropriate, including immediate account termination without prior notice for severe violations. We may also report illegal activity to law enforcement.
          </p>
        </Section>

        <Section title="8. Changes to this policy">
          <p>
            We will post updates to this policy on this page. Material changes will be communicated via email. Continued use after changes take effect constitutes acceptance.
          </p>
        </Section>

        <Section title="9. Contact">
          <p>Questions or reports? Email abuse@moonshift.io.</p>
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

