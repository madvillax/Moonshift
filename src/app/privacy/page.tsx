export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg-deep text-text-primary pt-24 pb-20">
      <div className="max-w-[720px] mx-auto px-6">
        <span
          className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-4 block"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          &frasl;&frasl; legal &middot; privacy
        </span>

        <h1
          className="text-3xl md:text-4xl lg:text-[46px] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary mb-4"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Privacy Policy
        </h1>

        <p className="text-[14px] text-text-muted mb-10">
          Effective 2026-04-23 &middot; Last updated 2026-05-17
        </p>

        <div className="p-5 border border-border-subtle bg-bg-surface mb-12">
          <h2 className="text-[13px] font-semibold tracking-[0.08em] uppercase text-text-muted mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            TL;DR
          </h2>
          <p className="text-[14px] text-text-secondary leading-relaxed">
            We collect the minimum we need to let you ship apps: your email, OAuth tokens (to push code and draft posts on your behalf), the prompts you send us, the code the agents write, and usage telemetry. We do not sell your data. We do not train third-party models on your prompts. You can delete your account and export your data any time.
          </p>
        </div>

        <Section title="1. Who we are">
          <p>
            Moonshift (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is operated by Harjot Singh Rana (sole proprietor), based in Bengaluru, Karnataka, India. We are the data controller for personal data collected through moonshift.io.
          </p>
        </Section>

        <Section title="2. What we collect">
          <SubSection title="Account data">
            <p>When you sign up, we collect your email address, name, and a profile image. You can sign in with Google or GitHub OAuth, or with email + password handled by Better Auth. We store an encrypted session token in a cookie.</p>
          </SubSection>
          <SubSection title="OAuth tokens from connected accounts">
            <ul>
              <li><strong>GitHub</strong> — to create repositories and push generated code. Scopes: repo, user:email.</li>
              <li><strong>Vercel</strong> — to create projects and trigger deploys. Installation-level access token.</li>
              <li><strong>Google Ads</strong> — optional. Used to create and manage advertising campaigns in your connected account. Scope: adwords.</li>
              <li><strong>X (Twitter)</strong> — optional. Used only after you approve a post. Scopes: tweet.write, tweet.read, users.read, offline.access.</li>
              <li><strong>LinkedIn</strong> — optional. Used only after you approve a post. Scopes: w_member_social, r_liteprofile.</li>
            </ul>
            <p>Tokens are stored encrypted at rest in our Turso database and used only on your behalf for operations you authorize.</p>
          </SubSection>
          <SubSection title="Content you provide">
            <ul>
              <li>The prompts you type into the product.</li>
              <li>Code, images, and marketing artifacts the pipeline generates.</li>
              <li>Any files you upload.</li>
            </ul>
          </SubSection>
          <SubSection title="Usage data">
            <p>We collect standard telemetry: page views, feature usage, error logs, and performance data. This helps us fix bugs and understand what to build next. No personal data is collected through telemetry.</p>
          </SubSection>
        </Section>

        <Section title="3. How we use your data">
          <ul>
            <li>To operate the Moonshift pipeline and deliver the service you signed up for.</li>
            <li>To authenticate you and keep your account secure.</li>
            <li>To push code to GitHub, deploy to Vercel, and publish to social accounts you connect, when you explicitly approve each action.</li>
            <li>To send you transactional emails about your builds and account.</li>
            <li>To debug issues and improve the product using aggregated, de-identified usage data.</li>
          </ul>
        </Section>

        <Section title="4. Data sharing and third parties">
          <SubSection title="Subprocessors">
            <p>We use the following services to operate Moonshift:</p>
            <ul>
              <li><strong>Turso</strong> — database hosting (user accounts, tokens, build state).</li>
              <li><strong>Vercel</strong> — application hosting and deployment infrastructure.</li>
              <li><strong>Better Auth</strong> — authentication service for email/password sign-in.</li>
              <li><strong>Resend</strong> — transactional email delivery.</li>
              <li><strong>OpenAI / Anthropic / Together AI</strong> — large language model inference for generating code, copy, and images. Prompts are sent via API; these providers do not train on our API traffic.</li>
            </ul>
          </SubSection>
          <SubSection title="No selling">
            <p>We do not sell, rent, or trade your personal data. We do not share your prompts or generated code with third parties beyond the subprocessors listed above.</p>
          </SubSection>
        </Section>

        <Section title="5. Data retention">
          <ul>
            <li><strong>Account data</strong> — kept while your account is active. Deleted within 30 days of account deletion.</li>
            <li><strong>Prompts and generated artifacts</strong> — kept while your account is active. You can export or delete individual builds at any time.</li>
            <li><strong>Usage telemetry</strong> — retained in aggregate for up to 3 years.</li>
            <li><strong>OAuth tokens</strong> — stored until you disconnect the integration or delete your account.</li>
          </ul>
        </Section>

        <Section title="6. Your rights">
          <ul>
            <li><strong>Access</strong> — request a copy of your personal data by emailing support@moonshift.io.</li>
            <li><strong>Correction</strong> — update your account details from the dashboard.</li>
            <li><strong>Deletion</strong> — delete your account from the dashboard or email support. Data is removed within 30 days.</li>
            <li><strong>Export</strong> — request a full data export by email.</li>
            <li><strong>Withdraw consent</strong> — disconnect OAuth integrations from the dashboard at any time.</li>
          </ul>
        </Section>

        <Section title="7. Cookies">
          <p>We use a single session cookie to keep you logged in. No tracking cookies, no analytics cookies from third parties. We use a privacy-first analytics provider that does not use cookies.</p>
        </Section>

        <Section title="8. International transfers">
          <p>Your data is stored on servers in the United States (Turso) and processed wherever our subprocessors operate. By using the service you consent to these transfers. We rely on standard contractual clauses and equivalent safeguards for cross-border data transfers.</p>
        </Section>

        <Section title="9. Security">
          <p>We encrypt data in transit (TLS 1.3) and at rest (AES-256). OAuth tokens are encrypted with application-level encryption before being stored. We conduct periodic security reviews and promptly patch vulnerabilities. If you discover a security issue, email security@moonshift.io.</p>
        </Section>

        <Section title="10. Changes to this policy">
          <p>We will notify you of material changes via email and a notice on the dashboard. Continued use after changes take effect constitutes acceptance.</p>
        </Section>

        <Section title="11. Contact">
          <p>Questions about this policy? Email support@moonshift.io.</p>
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

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="text-[14px] font-medium text-text-primary mb-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
        {title}
      </h3>
      <div className="text-[14px] text-text-secondary leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}
