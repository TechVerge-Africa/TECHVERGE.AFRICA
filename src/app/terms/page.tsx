import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';
import { BrandStripes } from '@/components/Brand';

export const metadata: Metadata = {
  title: { absolute: 'Terms of Service | Techverge Africa Ltd' },
  description:
    'Commercial terms of service, engagement protocols, and software warranties for Techverge Africa Ltd.',
};

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full bg-surface-1 text-ink">
      {/* ── HEADER ── */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-surface-1 border-b border-line">
        {/* Brand cover motif, faint, behind the page title */}
        <BrandStripes className="absolute -top-10 -right-48 h-[calc(100%+80px)] w-[620px] hidden lg:block" opacity={0.12} />
        <div className="relative container-site max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center py-3 -my-3 gap-2 text-xs font-bold text-action-primary hover:underline mb-6"
          >
            <ArrowLeft strokeWidth={1.75} size={14} />
            <span>Back to Home</span>
          </Link>
          <span className="accent-line" aria-hidden="true" />
          <h1 className="text-h1 mb-4">
            Terms of Service
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
            <p className="font-bold text-ink text-sm">Contracting Entity:</p>
            <p>Techverge Africa Ltd &middot; Registered Private Limited Company</p>
            <p>Governing Law: Republic of Ghana &middot; Jurisdiction: Courts of Ghana</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-h3">
              1. Engagement &amp; Scope of Work
            </h2>
            <p>
              These Terms of Service govern the preliminary scoping, website use, and master services relationships between Techverge Africa Ltd and our commercial clients. Specific software development, cloud migration, AI deployment, or IT consultancy projects are executed under mutually agreed Statements of Work (SOW) and Master Services Agreements (MSA).
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-h3">
              2. Intellectual Property Ownership
            </h2>
            <p>
              Unless explicitly specified otherwise in a bespoke engagement agreement:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-ink-muted">
              <li><strong>Custom Developed Deliverables:</strong> Upon receipt of full settlement, all custom source code, documentation, schema configurations, and UI assets engineered exclusively for the client transfer to full client ownership.</li>
              <li><strong>Pre-Existing Frameworks:</strong> Techverge Africa Ltd retains ownership of proprietary developer utilities, boilerplate modules, and baseline tools used across clients, granting the client a perpetual, non-exclusive, royalty-free license to use and modify them within their deployed solution.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-h3">
              3. Service Level Agreements &amp; Uptime
            </h2>
            <p>
              Our cloud and infrastructure deployments are designed for mission-critical enterprise resilience targeting 99.9% uptime. Production SLAs, backup schedules, and emergency technical support response intervals are codified within each client&apos;s support agreement.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-h3">
              4. Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These terms and any related disputes shall be governed by and construed in accordance with the laws of the Republic of Ghana. Parties agree to attempt amicable technical resolution prior to initiating formal arbitration under the Alternative Dispute Resolution Act, 2010 (Act 798) in Kumasi or Accra, Ghana.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
