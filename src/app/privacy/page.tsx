import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | Techverge Africa Ltd' },
  description:
    'Privacy Policy and institutional data governance principles for Techverge Africa Ltd, incorporated in Ghana.',
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full bg-surface-1 text-ink">
      {/* ── HEADER ── */}
      <section className="py-16 md:py-20 bg-surface-1 border-b border-line">
        <div className="container-site max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-action-primary hover:underline mb-6"
          >
            <ArrowLeft strokeWidth={1.75} size={14} />
            <span>Back to Home</span>
          </Link>
          <span className="accent-line" aria-hidden="true" />
          <h1 className="text-h1 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-ink-muted">
            Techverge Africa Ltd &middot; Effective Date: October 2026 &middot; Version 2.0
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-16 md:py-24 bg-surface-1">
        <div className="container-site max-w-4xl space-y-10 text-ink leading-relaxed text-sm sm:text-base">
          
          <div className="p-5 rounded-card bg-surface-0 border border-line space-y-2 text-sm text-ink">
            <p className="font-bold text-ink text-sm">Techverge Africa Ltd Corporate Information:</p>
            <p>Corporate Status: Registered Private Limited Company &middot; Republic of Ghana</p>
            <p>Headquarters: Kumasi, Ghana &middot; Email: info@techverge.africa</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-h3">
              1. Institutional Commitment to Data Sovereignty
            </h2>
            <p>
              Techverge Africa Ltd (&quot;Techverge&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to the highest standards of data privacy, client confidentiality, and data sovereignty. We design our custom software, cloud environments, and artificial intelligence solutions to comply with the Data Protection Act, 2012 (Act 843) of Ghana and regional privacy frameworks.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-h3">
              2. Information We Collect
            </h2>
            <p>We only collect information necessary to deliver contracted technology services or respond to legitimate commercial inquiries:</p>
            <ul className="list-disc pl-5 space-y-2 text-ink-muted">
              <li><strong>Contact &amp; Scoping Details:</strong> Full name, organizational email address, phone number, company name, project brief, and budget parameters submitted via our project briefing form.</li>
              <li><strong>Technical Metadata:</strong> Standard, non-identifying server logs (IP address, browser type, and timestamps) solely for platform security and denial-of-service mitigation.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-h3">
              3. Client Software &amp; AI Data Isolation
            </h2>
            <p>
              For all custom enterprise systems, private LLMs, and cloud environments engineered by Techverge Africa Ltd:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-ink-muted">
              <li><strong>Zero Multi-Tenant Bleed:</strong> Client operational data, proprietary databases, and customer records remain strictly isolated within the client&apos;s designated cloud or on-premise infrastructure.</li>
              <li><strong>No Third-Party AI Training:</strong> We never submit client proprietary source code, document records, or operational data to public commercial AI models for training purposes.</li>
              <li><strong>Full Client Ownership:</strong> The client retains 100% intellectual property ownership of their data, records, and proprietary models upon deployment.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-h3">
              4. Contact the Data Protection Lead
            </h2>
            <p>
              For privacy audits, data subject requests, or security disclosures, please contact our legal and compliance department directly:
            </p>
            <div className="p-4 rounded-button bg-surface-0 border border-line text-sm text-ink space-y-1">
              <p>Email: <a href="mailto:info@techverge.africa" className="text-action-primary underline">info@techverge.africa</a></p>
              <p>Phone: +233 59 150 7448</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
