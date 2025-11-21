"use client";

import { useTranslations } from '@/context/LanguageContext';

interface TermsModalProps {
  onClose: () => void;
}

export const TermsModal = ({ onClose }: TermsModalProps) => {
  const { termsModal } = useTranslations();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-brand-dark-blue">{termsModal.title}</h2>
        </div>
        <div className="p-6 overflow-y-auto space-y-4 text-gray-700">
          <p>{termsModal.intro}</p>

          {termsModal.sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg pt-2">{section.title}</h3>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
        <div className="p-4 bg-light-gray border-t flex justify-end">
          <button
            onClick={onClose}
            className="bg-brand-dark-blue text-white font-bold px-6 py-2 rounded-md hover:bg-blue-900 transition"
          >
            {termsModal.closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
