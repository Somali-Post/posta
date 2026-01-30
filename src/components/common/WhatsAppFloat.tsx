"use client";

import React from "react";
import { usePathname } from "next/navigation";

const WHATSAPP_NUMBER = "252611003239";

// Keep this short and professional. We can later auto-append tracking ID on /track.
const DEFAULT_MESSAGE = "Hi Somali Post, I need help.";

function buildWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

type WhatsAppFloatProps = {
  message?: string;
};

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ message }) => {
  const pathname = usePathname();
  const messageToUse = message ?? DEFAULT_MESSAGE;
  const href = buildWhatsAppUrl(messageToUse);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (message) {
      return;
    }

    if (pathname !== "/track") {
      return;
    }

    const input = document.querySelector<HTMLInputElement>('[data-tracking-input="true"]');
    const trackingId = input?.value?.trim();
    if (!trackingId) {
      return;
    }

    const trackingMessage = `Hi Somali Post, I need help with tracking/support. Tracking number: ${trackingId}`;
    const trackingHref = buildWhatsAppUrl(trackingMessage);
    window.open(trackingHref, "_blank", "noopener,noreferrer");
    event.preventDefault();
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Somali Post on WhatsApp"
      onClick={handleClick}
      className="
        fixed z-50
        bottom-6 right-6
        md:bottom-8 md:right-8
        inline-flex items-center justify-center
        w-14 h-14
        rounded-full
        bg-[#25D366]
        shadow-lg
        hover:shadow-xl
        hover:scale-105
        active:scale-95
        transition
        focus:outline-none
        focus:ring-4
        focus:ring-[#25D366]/30
      "
    >
      {/* WhatsApp icon (inline SVG, no extra deps) */}
      <svg
        width="26"
        height="26"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M19.11 17.18c-.2-.1-1.2-.59-1.39-.66-.19-.07-.33-.1-.47.1-.14.2-.54.66-.66.8-.12.14-.24.16-.44.06-.2-.1-.86-.31-1.64-1-.6-.54-1.01-1.2-1.13-1.4-.12-.2-.01-.31.09-.41.09-.09.2-.24.3-.36.1-.12.14-.2.21-.33.07-.14.03-.26-.02-.36-.05-.1-.47-1.12-.64-1.53-.17-.41-.34-.35-.47-.35h-.4c-.14 0-.36.05-.55.26-.19.2-.72.7-.72 1.7 0 1 .74 1.97.84 2.11.1.14 1.46 2.23 3.54 3.12.5.22.89.35 1.19.45.5.16.96.14 1.32.08.4-.06 1.2-.49 1.37-.97.17-.48.17-.89.12-.97-.05-.08-.19-.14-.39-.24z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 3C9.37 3 4 8.37 4 15c0 2.11.55 4.1 1.52 5.83L4 29l8.35-1.48A11.9 11.9 0 0 0 16 27c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 21.7c-1.82 0-3.52-.52-4.97-1.41l-.36-.22-4.95.88.92-4.82-.24-.37A9.62 9.62 0 0 1 6.38 15c0-5.3 4.32-9.62 9.62-9.62s9.62 4.32 9.62 9.62-4.32 9.62-9.62 9.62z"
          fill="white"
        />
      </svg>
    </a>
  );
};

export default WhatsAppFloat;
