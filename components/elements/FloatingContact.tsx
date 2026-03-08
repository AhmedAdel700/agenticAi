"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, X, MessageSquare, MessageCircle, Bot } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="floating-contact">
      <div className={`floating-contact__options ${isOpen ? "show" : ""}`}>
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/971547111343"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-contact__option whatsapp"
        >
          <Image
            src="/icons8-whatsapp-50.png"
            alt="WhatsApp"
            width={32}
            height={32}
          />
          <span className="tooltip">WhatsApp</span>
        </a>

        {/* Phone Button */}
        <a href="tel:+971547111343" className="floating-contact__option phone">
          <Phone size={24} color="white" fill="white" />
          <span className="tooltip">Call Us</span>
        </a>

        {/* Chatbot Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            // @ts-ignore
            if (typeof window !== "undefined" && window.Tawk_API) {
              // @ts-ignore
              window.Tawk_API.toggle();
            }
          }}
          className="floating-contact__option chatbot"
          aria-label="Open Chat"
        >
          <Bot size={24} color="white" />
          <span className="tooltip">Chatbot</span>
        </button>
      </div>

      {/* Main Toggle Button */}
      <button
        className={`floating-contact__trigger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact options"
        suppressHydrationWarning
      >
        {isOpen ? (
          <X size={28} strokeWidth={2.5} />
        ) : (
          <MessageCircle size={28} strokeWidth={2.5} />
        )}
      </button>

      <style jsx>{`
        .floating-contact {
          position: fixed;
          bottom: 40px;
          left: 30px; /* Moved to left to avoid BackToTop on the right */
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .floating-contact__trigger {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fa5674 0%, #6065d4 100%);
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          outline: none;
        }

        .floating-contact__trigger:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.5);
        }

        .floating-contact__trigger.active {
          transform: rotate(90deg) scale(1.1);
          background: #fa5674;
        }

        .floating-contact__options {
          display: flex;
          flex-direction: column;
          gap: 12px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px) scale(0.8);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .floating-contact__options.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .floating-contact__option {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 0;
          position: relative;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.2);
          line-height: 0;
        }

        .floating-contact__option.whatsapp {
          background: #25d366;
        }

        .floating-contact__option.phone {
          background: #3d72fc;
        }

        .floating-contact__option.chatbot {
          background: #03a84e; /* Tawk.to custom green */
          cursor: pointer;
        }

        .floating-contact__option:hover {
          transform: scale(1.15);
          border-color: #fff;
        }

        :global(.floating-contact svg) {
          display: block;
          flex-shrink: 0;
          margin: 0 !important;
          padding: 0 !important;
          line-height: 0;
        }

        .tooltip {
          position: absolute;
          left: 75px; /* Tooltip on the right since button is on left */
          background: rgba(11, 25, 44, 0.9);
          color: white;
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s;
          white-space: nowrap;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
        }

        .floating-contact__option:hover .tooltip {
          opacity: 1;
          visibility: visible;
        }

        /* RTL Support Override */
        :global([lang="ar"]) .floating-contact {
          left: auto;
          right: 30px; /* Moved to right because BackToTop is on the left in AR */
        }

        :global([lang="ar"]) .tooltip {
          left: auto;
          right: 75px; /* Tooltip on the left of the button */
        }
      `}</style>
    </div>
  );
}
