// src/components/ServiceSidebar.tsx
import Link from 'next/link';

export const ServiceSidebar = () => {
  return (
    <aside className="w-full lg:w-1/4 lg:pl-8">
      <div className="sticky top-28">
        {/* Other Services */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-bold text-dark-text border-b pb-3 mb-4">Our Services</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/services/receiving" className="text-gray-700 hover:text-somali-blue">
              Receiving Mail & Parcels
            </Link>
            <Link href="/services/po-box" className="text-gray-700 hover:text-somali-blue">
              P.O. Box Rentals
            </Link>
            {/* Add new service links here in the future */}
          </nav>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-dark-text border-b pb-3 mb-4">Need Help?</h3>
          <p className="text-gray-600">For any questions, please visit us or get in touch.</p>
          <p className="mt-4 text-gray-800">
            <strong>GPO, Mogadishu</strong>
            <br />
            Sat - Thurs, 8:00 AM - 4:00 PM
          </p>
          <Link href="/contact">
            <button className="mt-4 w-full bg-somali-blue text-white font-bold py-2 rounded-md hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </aside>
  );
};
