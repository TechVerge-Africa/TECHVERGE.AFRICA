'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Send, CheckCheck } from 'lucide-react';

interface BotMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

const quickOptions = [
  {
    id: 'software',
    label: '💻 Software Development & Engineering',
    prompt: 'Hello Techverge Africa, I would like to inquire about Software Development (Web Systems, Mobile Apps, or Custom ERP).',
  },
  {
    id: 'cloud',
    label: '☁️ Cloud Computing & Infrastructure',
    prompt: 'Hello Techverge Africa, I would like to consult on Cloud Migration, DevOps Pipelines, or Infrastructure Management.',
  },
  {
    id: 'ai',
    label: '🤖 Artificial Intelligence & Data',
    prompt: 'Hello Techverge Africa, I would like to discuss an AI Solution (machine learning models, process automation, or private LLMs).',
  },
  {
    id: 'consulting',
    label: '📈 Strategic IT Consultancy',
    prompt: 'Hello Techverge Africa, I would like to request an IT Audit, Architecture Roadmap, or Digital Transformation consultation.',
  },
  {
    id: 'consultation',
    label: '📅 Book a Discovery Consultation',
    prompt: 'Hello Techverge Africa, I would like to schedule an engineering discovery consultation to discuss our project requirements.',
  },
];

export default function WhatsAppBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<BotMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Hello! 👋 Welcome to TechVerge Africa.',
      time: 'Just now',
    },
    {
      id: 'welcome-2',
      sender: 'bot',
      text: 'We build innovative solutions through research for Africa and the world. How can our engineering team help you today?',
      time: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [hasUnread, setHasUnread] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Show friendly teaser tooltip after 4 seconds if not opened
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard accessibility: Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Click outside to close (desktop & tablet)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        // Only close if not clicking the trigger button
        const trigger = document.getElementById('whatsapp-trigger-btn');
        if (trigger && !trigger.contains(e.target as Node)) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Scroll to bottom on new message
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setShowTooltip(false);
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const openWhatsApp = (text: string) => {
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/233591507448?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSelectOption = (option: (typeof quickOptions)[0]) => {
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: option.label,
        time: now,
      },
      {
        id: `bot-${Date.now() + 1}`,
        sender: 'bot',
        text: 'Opening WhatsApp to connect you directly with our team in Kumasi...',
        time: now,
      },
    ]);

    setTimeout(() => {
      openWhatsApp(option.prompt);
    }, 600);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: userText,
        time: now,
      },
      {
        id: `bot-${Date.now() + 1}`,
        sender: 'bot',
        text: 'Transferring your message to our engineers on WhatsApp now...',
        time: now,
      },
    ]);

    setInputValue('');

    const formattedMessage = `Hello TechVerge Africa, I have an inquiry from your website: "${userText}"`;
    setTimeout(() => {
      openWhatsApp(formattedMessage);
    }, 600);
  };

  return (
    <>
      {/* ── MOBILE BACKDROP OVERLAY ── */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-50 sm:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* ── ROOT FLOATING WRAPPER ── */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto select-none">
        {/* ── TEASER TOOLTIP (before open) ── */}
        {!isOpen && showTooltip && (
          <div className="mb-3 animate-fade-in relative bg-white border border-slate-200/90 shadow-xl rounded-2xl p-3 sm:p-3.5 max-w-[280px] sm:max-w-xs text-xs text-slate-700 flex items-start gap-2.5 sm:gap-3 touch-manipulation">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
              <WhatsAppIcon className="w-4 h-4 fill-current" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <span className="font-bold text-slate-900 text-xs truncate">TechVerge WhatsApp Bot</span>
                <button
                  type="button"
                  onClick={() => setShowTooltip(false)}
                  className="text-slate-400 hover:text-slate-600 p-1 -mr-1"
                  aria-label="Close tooltip"
                >
                  <X size={13} />
                </button>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                Need fast answers on software or AI? Chat with our Kumasi team directly.
              </p>
            </div>
            {/* Tooltip triangle indicator */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-slate-200/90 rotate-45" />
          </div>
        )}

        {/* ── CHAT BOT WINDOW ── */}
        {isOpen && (
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label="TechVerge WhatsApp Assistant"
            className="mb-3 w-[calc(100vw-2rem)] max-w-sm sm:w-[380px] h-[520px] max-h-[calc(100dvh-5.5rem)] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 touch-manipulation"
          >
            {/* Window Header */}
            <div className="bg-slate-900 text-white px-4 py-3.5 flex items-center justify-between border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative shrink-0">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold shadow-md">
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                  </div>
                  {/* Status dot */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-sm text-white truncate">TechVerge Africa</h3>
                    <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-emerald-500 text-[9px] text-white shrink-0" title="Verified Business">
                      ✓
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-400 font-medium truncate">
                    WhatsApp Support · Kumasi, Ghana
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 hover:text-white flex items-center justify-center transition-all shrink-0 ml-2"
                aria-label="Close chat window"
              >
                <X size={18} />
              </button>
            </div>

            {/* Subheader status strip */}
            <div className="bg-slate-50 border-b border-slate-200/70 px-4 py-1.5 text-[11px] text-slate-500 flex items-center justify-between font-mono shrink-0">
              <span className="truncate">Official: +233 59 150 7448</span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1 shrink-0 ml-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Online
              </span>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-3.5 sm:p-4 space-y-3 bg-[#EFEAE2]/30 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 shadow-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-tech-accent text-white rounded-br-xs'
                        : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-xs'
                    }`}
                  >
                    <p className="break-words">{msg.text}</p>
                    <div
                      className={`text-[9px] mt-1 flex items-center justify-end gap-1 font-mono ${
                        msg.sender === 'user' ? 'text-blue-100' : 'text-slate-400'
                      }`}
                    >
                      <span>{msg.time}</span>
                      {msg.sender === 'user' && <CheckCheck size={11} className="text-blue-100" />}
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick action buttons */}
              <div className="pt-2 space-y-1.5">
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 px-1">
                  Select a topic or type below:
                </p>
                <div className="flex flex-col gap-1.5">
                  {quickOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectOption(opt)}
                      className="w-full text-left px-3 py-2.5 rounded-xl bg-white hover:bg-emerald-50/70 active:bg-emerald-100/70 text-slate-700 hover:text-emerald-900 border border-slate-200/80 hover:border-emerald-300 transition-all text-xs font-medium shadow-2xs flex items-center justify-between group active:scale-[0.99]"
                    >
                      <span className="truncate pr-2">{opt.label}</span>
                      <span className="text-slate-400 group-hover:text-emerald-600 font-bold shrink-0">➔</span>
                    </button>
                  ))}
                </div>
              </div>

              <div ref={chatEndRef} />
            </div>

            {/* Message Input Footer */}
            <form
              onSubmit={handleSendMessage}
              className="p-2.5 sm:p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
            >
              {/* text-base on mobile prevents iOS Safari auto-zoom; sm:text-xs on desktop */}
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message to WhatsApp..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-base sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all min-w-0"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-10 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 disabled:opacity-40 text-white flex items-center justify-center transition-all shrink-0 shadow-sm"
                aria-label="Send message to WhatsApp"
              >
                <Send size={16} />
              </button>
            </form>

            {/* Direct WhatsApp Action Link */}
            <div className="px-3 py-2 bg-slate-50 border-t border-slate-100 text-center shrink-0">
              <button
                type="button"
                onClick={() => openWhatsApp('Hello TechVerge Africa! I am reaching out from your website.')}
                className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 flex items-center justify-center gap-1.5 mx-auto py-1"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" />
                <span className="truncate">Or click to start direct chat on WhatsApp</span>
              </button>
            </div>
          </div>
        )}

        {/* ── FLOATING TRIGGER BUTTON ── */}
        <button
          id="whatsapp-trigger-btn"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center justify-center gap-2 h-12 px-4 sm:h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/50 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          aria-label={isOpen ? 'Close WhatsApp Assistant' : 'Open WhatsApp Assistant'}
        >
          <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
          <span className="font-semibold text-xs whitespace-nowrap">Chat with Us</span>

          {/* Unread notification ping */}
          {hasUnread && !isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white" />
            </span>
          )}
        </button>
      </div>
    </>
  );
}

/**
 * Clean inline WhatsApp SVG vector
 */
function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.61C8.86 7.61 8.57 7.68 8.32 7.95C8.07 8.22 7.37 8.88 7.37 10.22C7.37 11.57 8.35 12.87 8.49 13.06C8.63 13.24 10.42 16.01 13.17 17.19C13.82 17.47 14.33 17.64 14.72 17.77C15.38 17.98 15.98 17.95 16.46 17.88C17 17.8 18.11 17.21 18.34 16.55C18.57 15.9 18.57 15.33 18.5 15.22C18.43 15.11 18.25 15.04 17.97 14.9C17.7 14.77 16.36 14.11 16.11 14.02C15.86 13.93 15.68 13.88 15.5 14.16C15.31 14.44 14.79 15.04 14.63 15.22C14.48 15.41 14.32 15.43 14.05 15.29C13.77 15.15 12.88 14.86 11.83 13.92C11.01 13.19 10.45 12.28 10.31 12C10.17 11.73 10.3 11.58 10.43 11.44C10.56 11.31 10.72 11.1 10.86 10.94C11 10.77 11.05 10.66 11.14 10.47C11.23 10.29 11.19 10.13 11.12 10C11.05 9.86 10.5 8.52 10.27 7.97C10.05 7.44 9.82 7.51 9.65 7.51C9.5 7.5 9.32 7.5 9.13 7.5L9.04 7.61Z" />
    </svg>
  );
}
