import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Techverge Africa Ltd',
  description:
    'Privacy Policy and institutional data governance principles for Techverge Africa Ltd, incorporated in Ghana.',
};

export default function PrivacyPage() {
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
            Privacy Policy
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
            <p className="font-bold text-slate-900 text-sm">Techverge Africa Ltd Corporate Information:</p>
            <p>Corporate Status: Registered Private Limited Company &middot; Republic of Ghana</p>
            <p>Headquarters: Kumasi, Ghana &middot; Email: info@techverge.africa</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              1. Institutional Commitment to Data Sovereignty
            </h2>
            <p>
              Techverge Africa Ltd (&quot;Techverge&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to the highest standards of data privacy, client confidentiality, and data sovereignty. We design our custom software, cloud environments, and artificial intelligence solutions to comply with the Data Protection Act, 2012 (Act 843) of Ghana and regional privacy frameworks.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              2. Information We Collect
            </h2>
            <p>We only collect information necessary to deliver contracted technology services or respond to legitimate commercial inquiries:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li><strong>Contact &amp; Scoping Details:</strong> Full name, organizational email address, phone number, company name, project brief, and budget parameters submitted via our project briefing form.</li>
              <li><strong>Technical Metadata:</strong> Standard, non-identifying server logs (IP address, browser type, and timestamps) solely for platform security and denial-of-service mitigation.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              3. Client Software &amp; AI Data Isolation
            </h2>
            <p>
              For all custom enterprise systems, private LLMs, and cloud environments engineered by Techverge Africa Ltd:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li><strong>Zero Multi-Tenant Bleed:</strong> Client operational data, proprietary databases, and customer records remain strictly isolated within the client&apos;s designated cloud or on-premise infrastructure.</li>
              <li><strong>No Third-Party AI Training:</strong> We never submit client proprietary source code, document records, or operational data to public commercial AI models for training purposes.</li>
              <li><strong>Full Client Ownership:</strong> The client retains 100% intellectual property ownership of their data, records, and proprietary models upon deployment.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              4. Contact the Data Protection Lead
            </h2>
            <p>
              For privacy audits, data subject requests, or security disclosures, please contact our legal and compliance department directly:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 space-y-1">
              <p>Email: <a href="mailto:info@techverge.africa" className="text-tech-accent underline">info@techverge.africa</a></p>
              <p>Phone: +233 59 150 7448</p>
              <p>Location: Kumasi, Ghana</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
