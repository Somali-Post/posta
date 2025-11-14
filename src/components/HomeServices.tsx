// src/components/HomeServices.tsx
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Receive Mail Worldwide',
    description: 'Connect with family, friends, and businesses globally. We securely receive your letters and parcels from any country.',
    imageUrl: '/images/parcel-service.jpg',
    href: '/services/receiving'
  },
  {
    title: 'Secure P.O. Boxes',
    description: 'Get a permanent, private, and secure address at our GPO in Mogadishu for all your personal and business mail.',
    imageUrl: '/images/po-box.jpg',
    href: '/services/po-box'
  }
];

export const HomeServices = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-somali-blue">Our Core Services</h2>
          <p className="text-lg text-gray-600 mt-2">Reliable solutions for your personal and business needs.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <Link href={service.href} key={service.title}>
              <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                <div className="relative h-64">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-bold text-dark-text mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="font-bold text-somali-blue group-hover:text-accent-blue transition-colors">
                    Learn More &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

