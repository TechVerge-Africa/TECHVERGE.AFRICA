'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ArrowUpRight, ChevronDown } from 'lucide-react';

const serviceOptions = [
  'Software Development & Engineering',
  'Cloud Computing & Infrastructure',
  'Artificial Intelligence & Data Solutions',
  'Strategic IT Consultancy',
  'General Inquiry / Partnership',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: serviceOptions[0],
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMsg('Please enter a message with at least 10 characters.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  if (submitted) {
    const whatsappText = encodeURIComponent(
      `Hello Techverge Africa! I just submitted an inquiry on your website:\n\n*Name:* ${formData.fullName}\n*Company:* ${formData.company || 'N/A'}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone || 'N/A'}\n*Service:* ${formData.service}\n*Message:* ${formData.message}`
    );

    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-6">
        <div className="w-14 h-14 rounded-full bg-tech-accent text-white flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 size={32} />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            Thank you, {formData.fullName}.
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Your message has been sent successfully. Our team in Kumasi has received your details and will get back to you within 24 hours.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/233591507448?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
          >
            <span>Message via WhatsApp (+233 59 150 7448)</span>
            <ArrowUpRight size={14} />
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                company: '',
                email: '',
                phone: '',
                service: serviceOptions[0],
                message: '',
              });
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-300 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  const labelCls = 'block text-xs font-semibold text-slate-700 mb-1.5';
  const inputCls =
    'w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-tech-accent focus:ring-2 focus:ring-tech-accent/20 transition-all';

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {errorMsg && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle size={16} className="shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Row 1: Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className={labelCls}>
            Full Name <span className="text-tech-accent">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Kwame Mensah"
            className={inputCls}
          />
        </div>

        <div>
          <label htmlFor="company" className={labelCls}>
            Company / Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Mensah Enterprises"
            className={inputCls}
          />
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelCls}>
            Email Address <span className="text-tech-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="kwame@example.com"
            className={inputCls}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+233 50 123 4567"
            className={inputCls}
          />
        </div>
      </div>

      {/* Row 3: Service Selection Dropdown */}
      <div>
        <label htmlFor="service" className={labelCls}>
          What service do you need?
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${inputCls} appearance-none pr-10 cursor-pointer`}
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-500">
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      {/* Row 4: Message */}
      <div>
        <label htmlFor="message" className={labelCls}>
          Project Details / Message <span className="text-tech-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project requirements, technical challenges, or scaling goals..."
          className={`${inputCls} resize-y`}
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-tech-accent hover:bg-tech-accentHover active:scale-95 text-white font-bold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-tech-accent disabled:opacity-50 shadow-sm"
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Send Message</span>
              <Send size={15} />
            </>
          )}
        </button>

        <p className="text-xs text-slate-500 font-normal">
          We respect your privacy &middot; Response within 24 hours
        </p>
      </div>
    </form>
  );
}
