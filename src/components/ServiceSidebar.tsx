'use client';

import Link from 'next/link';
import { useTranslations } from '@/context/LanguageContext';

export const ServiceSidebar = () => {
  const { serviceSidebar } = useTranslations();

  return (
    <aside className="w-full lg:w-1/4 lg:pl-8">
      <div className="sticky top-28">
        {/* Other Services */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-bold text-dark-text border-b pb-3 mb-4">{serviceSidebar.title}</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/services/receiving" className="text-gray-700 hover:text-somali-blue">
              {serviceSidebar.receiving}
            </Link>
            <Link href="/services/po-box" className="text-gray-700 hover:text-somali-blue">
              {serviceSidebar.poBox}
            </Link>
            {/* Add new service links here in the future */}
          </nav>
        </div>

        {/* Visit Info */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-dark-text border-b pb-3 mb-4">{serviceSidebar.visitTitle}</h3>
          <p className="text-gray-600">{serviceSidebar.visitBody}</p>
          <p className="mt-4 text-gray-800">
            <strong>{serviceSidebar.locationLabel}</strong>
            <br />
            {serviceSidebar.hoursLabel}
          </p>
          <Link href="/help" className="inline-flex w-full mt-4 justify-center bg-somali-blue text-white font-bold py-2 rounded-md hover:bg-blue-700 transition-colors">
            {serviceSidebar.helpLinkLabel}
          </Link>
        </div>
      </div>
    </aside>
  );
};
