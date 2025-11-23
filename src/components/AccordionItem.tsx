"use client";

import { useState } from 'react';

interface AccordionItemProps {
  question: string;
  children: React.ReactNode;
}

export const AccordionItem = ({ question, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-gray">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 flex justify-between items-center hover:bg-light-gray px-2"
      >
        <span className="text-lg font-medium text-dark-text">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-somali-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="p-4 bg-gray-50 text-gray-700">{children}</div>
      </div>
    </div>
  );
};
