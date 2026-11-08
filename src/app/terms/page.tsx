import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Techverge Africa Ltd',
  description:
    'Commercial terms of service, engagement protocols, and software warranties for Techverge Africa Ltd.',
};

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full bg-white text-slate-800">
      {/* ── HEADER ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/60 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-tech-accent hover:underline mb-6 font-mono"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm font-mono text-slate-500">
            Techverge Africa Ltd &middot; Effective Date: October 2026 &middot; Version 2.0
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs font-mono text-slate-700">
            <p className="font-bold text-slate-900 text-sm">Contracting Entity:</p>
            <p>Techverge Africa Ltd &middot; Registered Private Limited Company</p>
            <p>Governing Law: Republic of Ghana &middot; Jurisdiction: Courts of Ghana</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              1. Engagement &amp; Scope of Work
            </h2>
            <p>
              These Terms of Service govern the preliminary scoping, website use, and master services relationships between Techverge Africa Ltd and our commercial clients. Specific software development, cloud migration, AI deployment, or IT consultancy projects are executed under mutually agreed Statements of Work (SOW) and Master Services Agreements (MSA).
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              2. Intellectual Property Ownership
            </h2>
            <p>
              Unless explicitly specified otherwise in a bespoke engagement agreement:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li><strong>Custom Developed Deliverables:</strong> Upon receipt of full settlement, all custom source code, documentation, schema configurations, and UI assets engineered exclusively for the client transfer to full client ownership.</li>
              <li><strong>Pre-Existing Frameworks:</strong> Techverge Africa Ltd retains ownership of proprietary developer utilities, boilerplate modules, and baseline tools used across clients, granting the client a perpetual, non-exclusive, royalty-free license to use and modify them within their deployed solution.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              3. Service Level Agreements &amp; Uptime
            </h2>
            <p>
              Our cloud and infrastructure deployments are designed for mission-critical enterprise resilience targeting 99.9% uptime. Production SLAs, backup schedules, and emergency technical support response intervals are codified within each client&apos;s support agreement.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
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
