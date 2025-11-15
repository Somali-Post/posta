// src/components/POBoxHero.tsx
import Image from 'next/image';
import Link from 'next/link';

export const POBoxHero = () => {
  return (
    <section className="bg-light-gray">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Persuasive Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-somali-blue mb-4">
              Your Private, Secure Address in Mogadishu
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Stop worrying about missed deliveries and protect your personal privacy. A P.O. Box gives you a permanent, professional address for all your personal and business mail, with secure access and timely notifications.
            </p>
            <ul className="space-y-3 text-left max-w-md mx-auto lg:mx-0 mb-8">
              <li className="flex items-center"><span className="text-green-500 mr-3">✔</span><strong>Total Security:</strong> Your mail is safe under lock and key.</li>
              <li className="flex items-center"><span className="text-green-500 mr-3">✔</span><strong>Complete Privacy:</strong> Keep your home address confidential.</li>
              <li className="flex items-center"><span className="text-green-500 mr-3">✔</span><strong>Permanent Address:</strong> Never change your address again, even if you move.</li>
            </ul>
            <Link href="/services/po-box">
              <button className="bg-somali-blue text-white font-bold text-lg px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Learn More & Get Yours
              </button>
            </Link>
          </div>
          
          {/* Image */}
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/po-box.jpg"
              alt="A wall of secure blue P.O. Boxes"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
