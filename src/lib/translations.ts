export type Language = 'en' | 'so' | 'ar';

export interface FaqItem {
  question: string;
  answer?: string;
  answerParts?: [string, string, string];
}

interface FooterLinks {
  about: string;
  services: string;
  poBox: string;
  pudo: string;
  help: string;
}

interface ServiceStep {
  title: string;
  description: string;
}

interface TrackCta {
  eyebrow: string;
  title: string;
  body: string;
  button: string;
}

interface FutureServiceCard {
  title: string;
  description: string;
}

interface FutureSection {
  title: string;
  body: string;
  cards: FutureServiceCard[];
}

interface InfoCard {
  title: string;
  description: string;
}

interface HelpContactHour {
  label: string;
  value: string;
}

interface HelpSupportSection {
  title: string;
  body: string;
  messageHeading: string;
  visitHeading: string;
  visitDescription: string;
}

interface HelpContactForm {
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  submitLabel: string;
  submittingLabel: string;
  successTitle: string;
  successBody: string;
  errorMessage: string;
}

interface RugPudoHighlight {
  title: string;
  description: string;
}

interface RugPudoRoadmapStep {
  step: string;
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

interface PoBoxPlanOptions {
  individualLabel: string;
  individualDescription: string;
  individualPrice: string;
  businessLabel: string;
  businessDescription: string;
  businessPrice: string;
  priceSuffix: string;
}

interface PoBoxFormFields {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  dateOfBirth: string;
  occupation: string;
  niraIdNumber: string;
  passportNumber: string;
  identityHint: string;
}

interface PoBoxBusinessFields {
  companyName: string;
  licenseNumber: string;
  licenseUpload: string;
  licenseHint: string;
}

interface PoBoxUploads {
  idDocument: string;
  idDocumentHint: string;
  photoUpload: string;
}

interface PoBoxTermsAgreement {
  prefix: string;
  linkLabel: string;
  suffix: string;
}

interface PoBoxValidationMessages {
  missingFields: string;
  missingIdentification: string;
  missingOccupation: string;
  missingBusiness: string;
  unexpectedError: string;
  successMessage: string;
}

interface PoBoxPaymentCardForm {
  heading: string;
  comingSoon: string;
  cardNumber: string;
  cardNumberPlaceholder: string;
  expiry: string;
  expiryPlaceholder: string;
  cvc: string;
  cvcPlaceholder: string;
  billingTitle: string;
  country: string;
  countryPlaceholder: string;
  addressLine1: string;
  addressPlaceholder: string;
  city: string;
  cityPlaceholder: string;
  postalCode: string;
  postalPlaceholder: string;
  submitLabel: string;
}

interface PoBoxPaymentContent {
  title: string;
  localHeading: string;
  localBody: string;
  ussdPrompt: string;
  ussdFormat: string;
  internationalHeading: string;
  internationalBody: string;
  cardForm: PoBoxPaymentCardForm;
}

interface PoBoxCertificateContent {
  title: string;
  body: string;
}

interface PoBoxApplicationContent {
  heroTitle: string;
  heroSubtitle: string;
  stepOneTitle: string;
  stepOneDescription: string;
  planOptions: PoBoxPlanOptions;
  formFields: PoBoxFormFields;
  businessFields: PoBoxBusinessFields;
  uploads: PoBoxUploads;
  submitLabel: string;
  submittingLabel: string;
  termsAgreement: PoBoxTermsAgreement;
  validationMessages: PoBoxValidationMessages;
  payment: PoBoxPaymentContent;
  certificate: PoBoxCertificateContent;
  testimonialsTitle: string;
  testimonials: Testimonial[];
}

interface PudoCard {
  title: string;
  description: string;
}

interface PudoFaq {
  question: string;
  answer: string;
}

interface PudoContent {
  heroTitle: string;
  heroSubtitle: string;
  ecosystemTitle: string;
  ecosystemSubtitle: string;
  ecosystemCards: PudoCard[];
  interestTitle: string;
  interestSubtitle: string;
  form: {
    businessName: string;
    ownerName: string;
    phone: string;
    location: string;
    submitLabel: string;
    submittingLabel: string;
    missingFields: string;
    successTitle: string;
    successBody: string;
    errorMessage: string;
  };
  faqTitle: string;
  faqs: PudoFaq[];
}

export interface TranslationContent {
  languageNames: Record<Language, string>;
  nav: {
    home: string;
    track: string;
    services: string;
    dropdown: {
      receiving: string;
      poBox: string;
      pudo: string;
    };
    help: string;
    about: string;
  };
  hero: {
    title: string;
    description: string;
    cta: string;
  };
  logoCarousel: {
    heading: string;
    description: string;
    altPrefix: string;
  };
  poBoxHero: {
    title: string;
    subtitleLines: string[];
    button: string;
    badges: [string, string, string];
  };
  receivingSection: {
    heading: string;
    body: string;
    cta: string;
  };
  sixDAddress: {
    heading: string;
    body: string;
    cta: string;
  };
  rugPudo: {
    heading: string;
    body: string;
    cta: string;
    highlights: RugPudoHighlight[];
    roadmap: RugPudoRoadmapStep[];
    whyTitle: string;
    whyHeading: string;
    whyBody: string;
  };
  footer: {
    aboutTitle: string;
    aboutBody: string;
    quickLinksTitle: string;
    links: FooterLinks;
    contactTitle: string;
    contactLines: string[];
    emailLabel: string;
    emailValue: string;
    phoneLabel: string;
    phoneValue: string;
    stayConnectedTitle: string;
    stayConnectedBody: string;
    socialFallback: string;
    privacy: string;
    terms: string;
    rights: string;
  };
  serviceSidebar: {
    title: string;
    receiving: string;
    poBox: string;
    visitTitle: string;
    visitBody: string;
    locationLabel: string;
    hoursLabel: string;
    helpLinkLabel: string;
  };
  services: {
    receiving: {
      heroTitle: string;
      heroSubtitle: string;
      processTitle: string;
      steps: ServiceStep[];
      trackCta: TrackCta;
      whatToBringTitle: string;
      whatToBringBody: string;
      bringList: string[];
      locationTitle: string;
      locationBody: string;
      addressLabel: string;
      addressValue: string;
      hoursLabel: string;
      hoursValue: string;
      futureSection: FutureSection;
    };
    poBox: {
      heroTitle: string;
      heroSubtitle: string;
      whyTitle: string;
      cards: InfoCard[];
      howTitle: string;
      steps: string[];
      pricingTitle: string;
      pricingBody: string;
    };
  };
  track: {
    title: string;
    subtitle: string;
    instructions: string;
    placeholder: string;
    helper: string;
    buttonIdle: string;
    buttonLoading: string;
    loading: string;
    error: string;
    invalidFormat: string;
    detailsHeading: string;
    currentStatus: string;
    originLabel: string;
    destinationLabel: string;
    historyTitle: string;
    notFound: string;
    notFoundDetail: string;
  };
  help: {
    heroTitle: string;
    heroSubtitle: string;
    faqTitle: string;
    sections: {
      tracking: string;
      parcel: string;
      general: string;
    };
    supportSection: HelpSupportSection;
    faqs: {
      tracking: FaqItem[];
      parcel: FaqItem[];
      general: FaqItem[];
    };
    contact: {
      title: string;
      addressLabel: string;
      address: string;
      emailLabel: string;
      email: string;
      phoneLabel: string;
      phone: string;
      hoursLabel: string;
      hours: HelpContactHour[];
    };
    contactForm: HelpContactForm;
  };
  about: {
    heroTitle: string;
    heroSubtitle: string;
    disasterTitle: string;
    disasterQuote: string;
    timeline: {
      year: string;
      title: string;
      description: string;
    }[];
    missionVision: {
      visionLabel: string;
      visionStatement: string;
      missionLabel: string;
      missionStatement: string;
    };
    blueprint: {
      title: string;
      description: string;
      pillars: InfoCard[];
    };
    achievements: {
      title: string;
      cards: {
        value: string;
        label: string;
        description: string;
      }[];
    };
  };
  legal: {
    privacy: {
      title: string;
      subtitle: string;
      lastUpdatedLabel: string;
      sections: {
        title: string;
        body: string;
      }[];
    };
    terms: {
      title: string;
      subtitle: string;
      lastUpdatedLabel: string;
      sections: {
        title: string;
        body: string;
      }[];
    };
  };
  poBoxApplication: PoBoxApplicationContent;
  pudo: PudoContent;
  termsModal: TermsModalContent;
}

interface TermsModalSection {
  title: string;
  body: string;
}

interface TermsModalContent {
  title: string;
  intro: string;
  closeLabel: string;
  sections: TermsModalSection[];
}

export const languageLocales: Record<Language, string> = {
  en: 'en-US',
  so: 'so-SO',
  ar: 'ar-SA',
};

export const translations: Record<Language, TranslationContent> = {
  en: {
    languageNames: {
      en: 'English',
      so: 'Somali',
      ar: 'Arabic',
    },
    nav: {
      home: 'Home',
      track: 'Track',
      services: 'Services',
      dropdown: {
        receiving: 'Receiving Mail & Parcels',
        poBox: 'P.O. Box Rentals',
        pudo: 'RUG PUDO Network',
      },
      help: 'Help',
      about: 'About Us',
    },
    hero: {
      title: 'The Somali National Postal Service',
      description:
        'Proudly reconnecting Somalia to the world. We provide reliable, secure, and efficient postal services for individuals and businesses.',
      cta: 'Track Your Parcel',
    },
    logoCarousel: {
      heading: 'Connecting with Postal Partners Worldwide',
      description: 'Part of a global network of trusted postal operators.',
      altPrefix: 'Postal partner logo',
    },
    poBoxHero: {
      title: 'Your Secure Address in Somalia',
      subtitleLines: ['P.O. Box Rentals', 'from Somali Post'],
      button: 'RENT YOURS TODAY',
      badges: ['Reliable & Safe', 'Connects You Globally', 'Convenient Service Hours'],
    },
    receivingSection: {
      heading: 'Receive Mail from Around the World',
      body: 'Connect with family, friends, and businesses globally. We provide a secure and reliable gateway for all your inbound letters and parcels, ensuring they arrive safely in Somalia.',
      cta: 'Learn How It Works',
    },
    sixDAddress: {
      heading: "Introducing 6D Address: Somalia's New Digital Address",
      body: 'A simple 6-digit code for every location. The foundation for reliable delivery across the nation.',
      cta: 'Learn More',
    },
    rugPudo: {
      heading: 'The RUG PUDO Network: Postal Services, Closer to You',
      body: 'Soon, you can pick up and drop off parcels at trusted local shops and businesses in your neighborhood.',
      cta: 'Discover the Network',
      highlights: [
        {
          title: 'Neighborhood Hubs',
          description: 'Supermarkets, pharmacies, and mobile phone shops become your drop-off and pickup points.',
        },
        {
          title: 'Digital Check-ins',
          description: 'Each parcel is scanned in the Rug Agent app, so you see when it arrives and who collected it.',
        },
        {
          title: 'Secure Codes',
          description: 'Recipients present a one-time pickup code, ensuring parcels never leave with the wrong person.',
        },
      ],
      roadmap: [
        {
          step: '01',
          title: 'Pilot in Mogadishu',
          description: 'Founding partners are selected in the busiest districts.',
        },
        {
          step: '02',
          title: 'Nationwide Rollout',
          description: 'Every region receives a cluster of trained Rug PUDO shops.',
        },
        {
          step: '03',
          title: 'Two-way services',
          description: 'Send or receive items at the same point—true last-mile coverage.',
        },
      ],
      whyTitle: 'Why it matters',
      whyHeading: 'Trust, traceability, and time saved.',
      whyBody:
        'Every pickup and drop-off feeds live tracking data back to our main hub, so customers get instant SMS updates and our operations team sees the entire journey.',
    },
    footer: {
      aboutTitle: 'About Posta.so',
      aboutBody:
        'Reconnecting Somalia to the world after 34 years. We are building a modern, digital-first postal service for a new era.',
      quickLinksTitle: 'Quick Links',
      links: {
        about: 'About Us',
        services: 'Services',
        poBox: 'P.O. Box',
        pudo: 'RUG PUDO Network',
        help: 'Help Center',
      },
      contactTitle: 'Contact Us',
      contactLines: ['General Post Office (GPO)', 'Jamhuuriya Road, Boondheere District', 'Muqdisho, Somalia'],
      emailLabel: 'Email',
      emailValue: 'posta@moct.gov.so',
      phoneLabel: 'Phone',
      phoneValue: '252-611003239',
      stayConnectedTitle: 'Stay Connected',
      stayConnectedBody: 'Follow us on social media for the latest news and updates.',
      socialFallback: 'Social channels coming soon.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'Somali Post. All rights reserved.',
    },
    serviceSidebar: {
      title: 'Our Services',
      receiving: 'Receiving Mail & Parcels',
      poBox: 'P.O. Box Rentals',
      visitTitle: 'Visit Us',
      visitBody: 'For any questions, please stop by the General Post Office (GPO) and we will be happy to help.',
      locationLabel: 'GPO, Mogadishu',
      hoursLabel: 'Sat - Thurs, 8:00 AM - 4:00 PM',
      helpLinkLabel: 'Visit Help Center',
    },
    services: {
      receiving: {
        heroTitle: 'Receiving International Mail & Parcels',
        heroSubtitle:
          "Your reliable connection to the world. Here's everything you need to know about receiving your items sent from abroad.",
        processTitle: 'How the Process Works',
      steps: [
        {
          title: 'Item Arrives in Somalia',
          description:
            'Your parcel arrives at the main international postal facility in Mogadishu and is processed for customs inspection.',
        },
        {
          title: 'Customs Clearance',
          description:
            'The item is presented to Somali customs. Once cleared, it is handed over to Somali Post for final processing.',
        },
        {
          title: 'Notification of Arrival',
          description:
            "Once your item is ready, we will send you an SMS or email notification to let you know it's available for collection.",
        },
      ],
      trackCta: {
        eyebrow: 'Track updates',
        title: 'Track your item anytime',
        body: 'Real-time status from arrival to pickup—peace of mind with instant updates.',
        button: 'Track item',
      },
      whatToBringTitle: 'What to Bring for Collection',
      whatToBringBody:
        'To ensure a secure and smooth pickup process, please bring the following to the General Post Office (GPO) in Mogadishu:',
      bringList: [
        'A valid National Identification (NIRA) ID card.',
          "Your item's tracking number.",
          'The notification message (SMS/email) you received from us.',
        ],
        locationTitle: 'Location & Hours',
      locationBody: 'All items are to be collected from the General Post Office (GPO).',
      addressLabel: 'Address',
      addressValue: 'Jamhuuriya Road, Boondheere, Mogadishu, Somalia',
      hoursLabel: 'Hours',
      hoursValue: 'Saturday - Thursday, 8:00 AM - 4:00 PM',
      futureSection: {
        title: 'Coming in 2026: Sending to the World',
        body:
          'Get ready to connect with the world. Our new outbound service will allow you to send letters and parcels from your local neighborhood to any destination globally.',
        cards: [
          {
            title: 'Digital-First Customs',
            description: 'Fast, accurate customs clearance using the modern UPU Customs Declaration System (CDS).',
          },
          {
            title: 'Convenient Drop-Offs',
            description: 'Send your mail from our nationwide network of RUG PUDO partner locations.',
          },
          {
            title: 'Full International Tracking',
            description: 'Track every parcel from drop-off to destination right on our website.',
          },
        ],
      },
    },
      poBox: {
        heroTitle: 'Secure P.O. Box Rentals',
        heroSubtitle: 'Get a private, permanent, and professional mailing address at the heart of Mogadishu.',
        whyTitle: 'Why Rent a P.O. Box?',
        cards: [
          {
            title: 'Security & Privacy',
            description: 'Keep your mail safe in a locked box accessible only by you, protecting your personal information.',
          },
          {
            title: 'Permanent Address',
            description: 'Your P.O. Box address remains the same even if you move, providing stability for your contacts.',
          },
          {
            title: 'Reliable Notifications',
            description: 'Receive timely notifications when new mail or parcels arrive in your P.O. Box.',
          },
          {
            title: 'Professional Image',
            description: 'A P.O. Box provides a professional and established address for your business or organization.',
          },
        ],
        howTitle: 'How to Register',
        steps: [
          'Visit the Customer Service desk at the General Post Office (GPO) in Mogadishu.',
          'Request and complete a P.O. Box application form.',
          'Provide a valid National Identification (NIRA) ID card for verification.',
          'Pay the annual rental fee for your chosen box size.',
          'Receive your P.O. Box number and keys!',
        ],
        pricingTitle: 'Pricing & Sizes',
        pricingBody:
          'We offer a range of P.O. Box sizes to fit your needs. Please visit the GPO for current availability and annual rental fees.',
      },
    },
    track: {
      title: 'Track Your Item',
      subtitle: 'Stay informed every step of the way.',
      instructions: 'Enter your tracking number below.',
      placeholder: 'e.g., CC850579694SE',
      helper: 'Your number should be 13 characters long, like AA123456789SE.',
      buttonIdle: 'Track',
      buttonLoading: 'Searching...',
      loading: 'Loading tracking details...',
      error: 'Could not track the item. Please check the number and try again.',
      invalidFormat: 'Tracking numbers must follow the AA123456789SE format.',
      detailsHeading: 'Tracking Details for',
      currentStatus: 'Current Status',
      originLabel: 'Origin',
      destinationLabel: 'Destination',
      historyTitle: 'Shipment History',
      notFound: 'Tracking information is not available yet. Please try again later.',
      notFoundDetail: 'It can take up to 48 hours after posting for new shipments to appear. Please double-check the number and try again later.',
    },
    help: {
      heroTitle: 'Help & Support Center',
      heroSubtitle:
        "Have questions? We're here to help. Find answers to common questions below or get in touch with our team.",
      faqTitle: 'Frequently Asked Questions',
      sections: {
        tracking: 'Tracking',
        parcel: 'Parcel Collection',
        general: 'General',
      },
      supportSection: {
        title: 'Get Direct Support',
        body: "Can't find an answer? Contact us directly or visit us at the General Post Office.",
        messageHeading: 'Send Us a Message',
        visitHeading: 'Visit the General Post Office',
        visitDescription: 'Find us on Jamhuuriya Road, Boondheere District, Mogadishu.',
      },
      faqs: {
        tracking: [
          {
            question: 'How do I track my item?',
            answerParts: [
              'You can track your item by entering the 13-digit tracking number on our ',
              'Track page',
              ". This will show you the latest updates on your shipment's journey.",
            ],
          },
          {
            question: "My tracking number says 'Not Found'. What does this mean?",
            answer:
              'This usually means the item has just been posted and has not yet been scanned into the international postal system. Please check again in 24-48 hours. If the problem persists, please contact the sender to verify the tracking number.',
          },
        ],
        parcel: [
          {
            question: 'How will I know when my parcel is ready for collection?',
            answer:
              'We will send an SMS or email notification to you as soon as your item has been processed at the General Post Office (GPO) and is ready for you to pick up.',
          },
          {
            question: 'What do I need to bring to collect my parcel?',
            answer:
              'To collect your item, you must bring a valid National Identification (NIRA) ID card, the tracking number, and the notification message you received from us.',
          },
          {
            question: 'Can someone else collect my parcel for me?',
            answer:
              'Yes, but they must bring their own NIRA ID card, a signed letter of authorization from you, and a copy of your NIRA ID card.',
          },
        ],
        general: [
          {
            question: 'Do you handle outbound (international) mail?',
            answer:
              'Currently, we only handle inbound mail and parcels. Outbound services are planned for the near future. Please check our website for updates.',
          },
        ],
      },
      contact: {
        title: 'Contact Information',
        addressLabel: 'Address',
        address: 'Jamhuuriya Road, Boondheere District, Muqdisho, Somalia',
        emailLabel: 'Email',
        email: 'posta@moct.gov.so',
        phoneLabel: 'Phone',
        phone: '252-611003239',
        hoursLabel: 'Opening Hours',
        hours: [
          { label: 'Saturday - Wednesday', value: '8:30 AM - 4:30 PM' },
          { label: 'Thursday', value: '8:30 AM - 2:00 PM' },
          { label: 'Friday', value: 'Closed' },
        ],
      },
      contactForm: {
        nameLabel: 'Your Name',
        emailLabel: 'Your Email',
        messageLabel: 'Your Inquiry',
        submitLabel: 'Send Message',
        submittingLabel: 'Sending...',
        successTitle: 'Message received!',
        successBody: 'We will get back to you shortly.',
        errorMessage: 'We could not send your message. Please try again.',
      },
    },
    about: {
      heroTitle: 'From Collapse to Comeback',
      heroSubtitle:
        'This is the story of the Somali National Postal Service: A foundation built on a proud legacy, driven by a vision for the future.',
      disasterTitle: 'The Disaster That Shaped Us',
      disasterQuote:
        '“Our disaster was a 34-year institutional collapse. Our recovery is a model for how to build back better—not by recreating the past, but by innovating for the future.”',
      timeline: [
        {
          year: '1903',
          title: 'A Cornerstone Institution',
          description:
            'The Somali Post is established, connecting our nation with over 100 outlets and serving as a lifeline for generations.',
        },
        {
          year: '1991',
          title: 'Complete Operational Collapse',
          description:
            'All services cease. An entire generation grows up isolated from the global postal network, losing critical infrastructure and institutional memory.',
        },
        {
          year: '2025',
          title: 'A Digital-First Rebirth',
          description:
            'Full international connectivity is restored with modern, digital-first infrastructure, leapfrogging legacy models for a new era.',
        },
      ],
      missionVision: {
        visionLabel: 'Our Vision',
        visionStatement: 'Connecting Communities, Powering Progress.',
        missionLabel: 'Our Mission',
        missionStatement:
          'To develop a future-proof postal ecosystem that harnesses the power of the private sector, acting as a national conduit to link Somalia to the world.',
      },
      blueprint: {
        title: 'Our Strategic Blueprint',
        description: 'Our transformation is guided by the government-approved National Postal Sector Policy.',
        pillars: [
          {
            title: 'Legal & Regulatory Framework',
            description: 'Establishing clear laws to govern postal operations and protect consumer rights.',
          },
          {
            title: 'The Role of the SNPS',
            description: 'Defining our mission as the exclusive International Gateway and a Domestic Facilitator.',
          },
          {
            title: 'Universal Access',
            description: 'Ensuring every Somali citizen can access postal services, regardless of location.',
          },
          {
            title: 'The Role of the Private Sector',
            description: 'Creating frameworks for collaboration with private delivery companies to foster innovation.',
          },
          {
            title: 'Customer Choice',
            description: 'Empowering citizens with options and ensuring competitive, quality service delivery.',
          },
        ],
      },
      achievements: {
        title: 'From Zero to Operational in Record Time',
        cards: [
          { value: '34', label: 'Years Offline', description: 'Complete institutional hiatus overcome.' },
          { value: '$1.8M', label: 'Debt Cleared', description: 'UPU confidence restored, a landmark achievement.' },
          { value: '1', label: 'IMPC Active', description: 'Full international connectivity re-established.' },
        ],
      },
    },
    legal: {
      privacy: {
        title: 'Privacy Policy',
        subtitle: 'How we collect, use, and protect information shared with Somali Post.',
        lastUpdatedLabel: 'Last updated: January 2026',
        sections: [
          {
            title: '1. Information We Collect',
            body:
              'When you submit forms, track items, or register for services we collect the details you provide, such as contact information, identification documents, and delivery preferences.',
          },
          {
            title: '2. How We Use Data',
            body:
              'Your information is used to verify identity, issue notifications, process payments, and meet regulatory obligations. We do not sell data to third parties.',
          },
          {
            title: '3. Storage & Security',
            body:
              'Information is stored in secure systems operated by Somali Post and trusted partners such as Supabase. Access is limited to authorized staff and protected through encryption and audit logs.',
          },
          {
            title: '4. Your Choices',
            body:
              'You may request corrections or deletion of optional data at any time by emailing posta@moct.gov.so. Some records must be retained to comply with postal regulations.',
          },
        ],
      },
      terms: {
        title: 'Terms of Service',
        subtitle: 'The rules for using posta.so and the Somali National Postal Service.',
        lastUpdatedLabel: 'Last updated: January 2026',
        sections: [
          {
            title: '1. Acceptable Use',
            body:
              'You agree not to misuse Somali Post systems, attempt unauthorized access, or submit fraudulent information. All services must be used in accordance with Somali law.',
          },
          {
            title: '2. Availability of Features',
            body:
              'Some features, such as online P.O. Box registration or payment confirmation, may be temporarily disabled while upgrades are underway. Access can be withdrawn if misuse is detected.',
          },
          {
            title: '3. Accuracy of Information',
            body:
              'You are responsible for ensuring submitted details are accurate and current. Somali Post is not liable for delays or missed deliveries caused by incorrect information.',
          },
          {
            title: '4. Changes to These Terms',
            body:
              'We may update these terms as we launch new services. Continued use of the website after revisions constitutes acceptance of the updated terms. Major changes will be announced on posta.so.',
          },
        ],
      },
    },
    poBoxApplication: {
      heroTitle: 'Get Your Official P.O. Box',
      heroSubtitle:
        'Join hundreds of individuals and businesses who trust Somali Post for a secure, private, and permanent mailing address.',
      stepOneTitle: 'Step 1: Register Your Details',
      stepOneDescription:
        'Provide accurate information so that we can quickly verify your identity and assign your official P.O. Box.',
      planOptions: {
        individualLabel: 'Individual',
        individualDescription: 'For personal mailboxes',
        individualPrice: '$24',
        businessLabel: 'Business',
        businessDescription: 'For companies & NGOs',
        businessPrice: '$30',
        priceSuffix: '/year',
      },
      formFields: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        whatsapp: 'WhatsApp Number (if different)',
        location: 'Location / District',
        dateOfBirth: 'Date of Birth',
        occupation: 'Occupation',
        niraIdNumber: 'NIRA ID Number',
        passportNumber: 'Passport Number (optional)',
        identityHint: 'Please provide one of the following numbers.',
      },
      businessFields: {
        companyName: 'Company Name',
        licenseNumber: 'Business License Number',
        licenseUpload: 'Upload Business License',
        licenseHint: 'Attach a clear scan of your valid business license.',
      },
      uploads: {
        idDocument: 'Upload ID Document',
        idDocumentHint: 'Please upload a clear scan of the NIRA or Passport you provided above.',
        photoUpload: 'Upload Passport-size Photo',
      },
      submitLabel: 'Submit Application',
      submittingLabel: 'Submitting...',
      termsAgreement: {
        prefix: 'I declare that the information provided is correct and agree to the ',
        linkLabel: 'P.O. Box rental terms and conditions',
        suffix: '.',
      },
      validationMessages: {
        missingFields: 'Please fill in all required fields.',
        missingIdentification: 'Please provide either a NIRA ID or a Passport Number.',
        missingOccupation: 'Please provide your occupation.',
        missingBusiness: 'Please provide all business details and upload your license.',
        unexpectedError: 'Unexpected error. Please try again.',
        successMessage: 'Application successful! A confirmation has been emailed to {email}.',
      },
      payment: {
        title: 'Step 2: Make Payment',
        localHeading: 'Local Payment (EVC Plus)',
        localBody:
          'Dial the following USSD code, enter the amount ({amount}), and use "w.post" in the description/reason field.',
        ussdPrompt: 'Dial and follow instructions:',
        ussdFormat: '*799*31525688*{amount}#',
        internationalHeading: 'International Payment (Card)',
        internationalBody:
          'For customers overseas, you can pay securely with your Visa or MasterCard. (This feature is coming soon).',
        cardForm: {
          heading: 'Pay with Card',
          comingSoon: 'Online card payment is coming soon. For now, please use EVC Plus or contact us for assistance.',
          cardNumber: 'Card Number',
          cardNumberPlaceholder: '**** **** **** ****',
          expiry: 'Expiry Date',
          expiryPlaceholder: 'MM / YY',
          cvc: 'CVC',
          cvcPlaceholder: '***',
          billingTitle: 'Billing Address',
          country: 'Country',
          countryPlaceholder: 'Country',
          addressLine1: 'Address Line 1',
          addressPlaceholder: 'Street address',
          city: 'City',
          cityPlaceholder: 'City',
          postalCode: 'ZIP / Postal Code',
          postalPlaceholder: 'Postal Code',
          submitLabel: 'Pay Now',
        },
      },
      certificate: {
        title: 'Step 3: Receive Your Certificate',
        body: 'Once we confirm your payment, our team will issue your official P.O. Box e-certificate and send it to you via email and/or WhatsApp within one business day.',
      },
      testimonialsTitle: "Trusted By Somalia's Leading Institutions",
      testimonials: [
        {
          quote:
            "Using the Somali Post P.O. Box service has streamlined our corporate mail. It gives us the secure, official address that's essential for our national operations and formal correspondence.",
          author: 'Hormuud Telecom',
          role: 'Official P.O. Box Holder',
          image: '/images/logos/hormuud-logo.png',
        },
        {
          quote:
            'The P.O. Box system is critical for the secure correspondence required by financial institutions. Somali Post provides a reliable service that meets our standards for security and professionalism.',
          author: 'Central Bank of Somalia',
          role: 'Official P.O. Box Holder',
          image: '/images/logos/central-bank-logo.png',
        },
      ],
    },
    pudo: {
      heroTitle: 'Introducing the RUG PUDO Network',
      heroSubtitle:
        'The future of Somali logistics is local. We are building a nationwide network of trusted local businesses to serve as official postal points, bringing services closer to every community.',
      ecosystemTitle: 'A Seamless Ecosystem',
      ecosystemSubtitle: 'Connecting people, partners, and Posta.so in three simple steps.',
      ecosystemCards: [
        {
          title: '1. For the Somali People',
          description:
            'Download the app, choose your local shop as your address, and receive notifications with a secure pickup code the moment your package arrives.',
        },
        {
          title: '2. For Local Businesses',
          description:
            'Use our simple app to scan incoming parcels, automatically notifying customers. Verify pickup codes to ensure secure handovers and earn extra income.',
        },
        {
          title: '3. For Somali Post',
          description:
            'Our staff use a central dashboard to digitally route international mail to the correct local PUDO point, creating an efficient, error-free national network.',
        },
      ],
      interestTitle: 'Become a Founding Partner',
      interestSubtitle:
        "Be among the first to join Somalia's new postal network. By registering your interest today, you will get priority consideration and help shape the future of logistics in your community.",
      form: {
        businessName: 'Business Name',
        ownerName: 'Your Full Name',
        phone: 'Contact Phone',
        location: 'Location / District',
        submitLabel: 'Register My Interest',
        submittingLabel: 'Submitting...',
        missingFields: 'Please fill in all fields.',
        successTitle: 'Thank you for registering!',
        successBody: 'You are now on our priority list for the official launch.',
        errorMessage: 'Something went wrong. Please try again.',
      },
      faqTitle: 'Questions You Might Have',
      faqs: [
        {
          question: 'What equipment do I need to become a PUDO point?',
          answer:
            'All you need is a smartphone with an internet connection to run the simple Rug Agent app. No special hardware is required.',
        },
        {
          question: 'How much space is required?',
          answer:
            'You only need a small, secure area to store a few parcels. This could be a shelf behind your counter or a lockable cabinet.',
        },
        {
          question: 'How do I get paid?',
          answer:
            'PUDO partners earn a commission for every parcel they successfully process (both inbound scans and outbound collections). Payments are settled on a regular, automated basis.',
        },
        {
          question: 'What kind of support will I receive from Somali Post?',
          answer:
            'Founding partners will receive full training on the app, official "RUG PUDO Partner" branding materials for your shop, and a dedicated support line for any questions.',
        },
      ],
    },
    termsModal: {
      title: 'P.O. Box Rental Terms & Conditions',
      intro: 'By applying for a P.O. Box, you agree to the following terms:',
      closeLabel: 'Close',
      sections: [
        {
          title: '1. Declaration of Information',
          body: 'You declare that all information provided in your application is true, correct, and complete. You accept full responsibility for any consequences arising from inaccurate information.',
        },
        {
          title: '2. Service Period & Renewal',
          body: 'The rental period is for one (1) year from the date of payment confirmation. To ensure uninterrupted service, you must renew your rental before the expiry date.',
        },
        {
          title: '3. Non-Renewal and Suspension',
          body: 'If payment is not received by the expiry date, your P.O. Box will be suspended. If the rental is not renewed within a grace period of ten (10) days following a notification, Somali Post reserves the right to repossess and reassign the P.O. Box.',
        },
        {
          title: '4. Use of Service',
          body: 'The P.O. Box is to be used for receiving legal mail and parcels only. The use of the P.O. Box for illegal, prohibited, or fraudulent activities is strictly forbidden and will result in immediate termination of service and notification to the relevant authorities.',
        },
        {
          title: '5. Lost Keys',
          body: 'In the event of a lost key, you are required to report it to the General Post Office immediately. You will be responsible for the full cost of a key replacement and lock change.',
        },
        {
          title: '6. Data Privacy',
          body: 'The Somali National Postal Service is committed to protecting your privacy. The personal information collected is used solely for the purpose of managing your P.O. Box rental, verification, and for sending official communications. Your data will not be shared with third parties except as required by law.',
        },
      ],
    },
  },
  so: {
    languageNames: {
      en: 'Ingiriisi',
      so: 'Soomaali',
      ar: 'Carabi',
    },
    nav: {
      home: 'Bogga Hore',
      track: 'Raad-raac',
      services: 'Adeegyada',
      dropdown: {
        receiving: 'Qaabilaadda Boostada & Xirmooyinka',
        poBox: 'Kiraynta Sanduuqa P.O.',
        pudo: 'Shabakadda RUG PUDO',
      },
      help: 'Caawimaad',
      about: 'Ku Saabsan',
    },
    hero: {
      title: 'Hay’adda Boostada Qaranka Soomaaliyeed',
      description:
        'Si sharaf leh ayaan dib ugu xidhay Soomaaliya dunida. Waxaanu siinnaa adeegyo boosto oo lagu kalsoonaan karo, ammaan ah oo hufan oo loogu talagalay shakhsiyaadka iyo ganacsiyada.',
      cta: 'Raac Xirmadaada',
    },
    logoCarousel: {
      heading: 'Isku xiridda Saaxiibada Boosto ee Caalamka',
      description: 'Waxaan ka mid nahay shabakad caalami ah oo hawlwadeeno boosto oo lagu kalsoon yahay.',
      altPrefix: 'Astaanta saaxiibka boostada',
    },
    poBoxHero: {
      title: 'Ciwaankaaga Ammaan ah ee Soomaaliya',
      subtitleLines: ['Kiraysta Sanduuqa P.O.', 'ee Somali Post'],
      button: 'KIRAYSADA MAANTA',
      badges: ['La Aamini Karo & Badbaado', 'Kugu Xira Caalamka', 'Saacado Adeeg oo Ku Habboon'],
    },
    receivingSection: {
      heading: 'Ku Qaado Boostada Meel Kasta oo Adduunka ah',
      body: 'Ku xidh qoyska, asxaabta, iyo ganacsiyada caalamka. Waxaanu bixinaa marin ammaan ah oo lagu kalsoonaan karo oo loogu talagalay dhammaan warqadaha iyo xirmooyinka kuu soo socda, annagoo hubinayna inay si nabad ah ku soo gaadhaan Soomaaliya.',
      cta: 'Baro Sida ay u Shaqayso',
    },
    sixDAddress: {
      heading: 'Soo Bandhigidda 6D Address: Cinwaanka Dijitaalka ah ee Soomaaliya',
      body: 'Koodh fudud oo 6-lambar ah oo goob kasta ah. Waa aasaaska gaadhsiinta lagu kalsoonaan karo ee dalka oo dhan.',
      cta: 'Wax Dheeraad ah Ka Baro',
    },
    rugPudo: {
      heading: 'Shabakadda RUG PUDO: Adeegyada Boosaha oo Kuu Soo Dhaw',
      body: 'Mar dhow waxaad xirmooyinka ku qaadi ama ku dhiibi kartaa dukaamada iyo ganacsiyada lagu kalsoon yahay ee xaafaddaada.',
      cta: 'Soo Ogaaw Shabakadda',
      highlights: [
        {
          title: 'Goobaha Xaafadda',
          description: 'Suqyada, farmashiyeyaasha, iyo dukaamada telefoonnada gacanta ayaa noqda meelaha aad wax ku dhiibato oo ku qaadato.',
        },
        {
          title: 'Hubin Dijitaal ah',
          description: 'Xirmo kasta waxa lagu sawiraa app-ka Rug Agent, sidaas ayaad ku aragtaa marka ay timaado iyo cidda qaadatay.',
        },
        {
          title: 'Koodhadh Ammaan ah',
          description: 'Qof walba waxa uu keenaa koodh hal-mar ah marka uu qaadanayo si aan xirmooyinka khaldan loogu dhiibin.',
        },
      ],
      roadmap: [
        {
          step: '01',
          title: 'Tijaabada Muqdisho',
          description: 'Lammaanayaasha aasaasiga ah ayaa laga xulayaa degmooyinka ugu mashquulka badan.',
        },
        {
          step: '02',
          title: 'Faafin Qaran',
          description: 'Gobol walba waxa loo sameeyaa koox Rug PUDO ah oo tababar qaadatay.',
        },
        {
          step: '03',
          title: 'Adeegyo Laba-Jiho ah',
          description: 'Halka aad wax ka qaado ayaad sidoo kale wax ka diri kartaa—gaarsiin dhammaystiran.',
        },
      ],
      whyTitle: 'Sababta ay Muhiim u tahay',
      whyHeading: 'Kalsooni, raad-raac, iyo waqti la badbaadiyay.',
      whyBody:
        'Mar kasta oo la keeno ama laga qaado xirmo waxa xogtu ku dhacdaa xarunta dhexe, macmiilkuna waxa uu helaa SMS degdeg ah halka kooxda hawlgalku ay aragto safarka oo dhan.',
    },
    footer: {
      aboutTitle: 'Ku Saabsan Posta.so',
      aboutBody:
        'Waxaan ka dib 34 sano dib ugu xidhay Soomaaliya dunida. Waxaan dhiseynaa adeeg boosto oo casri ah oo dijitaal ah.',
      quickLinksTitle: 'Xidhiidh Degdeg ah',
      links: {
        about: 'Ku Saabsan',
        services: 'Adeegyada',
        poBox: 'Sanduuqa P.O.',
        pudo: 'Shabakadda RUG PUDO',
        help: 'Xarunta Caawinta',
      },
      contactTitle: 'Nala Soo Xidhiidh',
      contactLines: ['Xarunta Boostada Guud (GPO)', 'Jamhuuriya Road, Degmada Boondheere', 'Muqdisho, Soomaaliya'],
      emailLabel: 'Iimayl',
      emailValue: 'posta@moct.gov.so',
      phoneLabel: 'Telefoon',
      phoneValue: '252-611003239',
      stayConnectedTitle: 'Ku Xirnow',
      stayConnectedBody: 'Raac nala warbaahinta bulshada si aad ula socoto wararkii iyo cusboonaysiintii ugu dambeeyay.',
      socialFallback: 'Baraha bulshada dhawaan ayaan la wadaagi doonnaa.',
      privacy: 'Qaanuunka Arrimaha Khaaska ah',
      terms: 'Shuruudaha Adeegga',
      rights: 'Somali Post. Xuquuq kasta waa la dhowray.',
    },
    serviceSidebar: {
      title: 'Adeegyadayada',
      receiving: 'Qaabilaadda Boostada & Xirmooyinka',
      poBox: 'Kiraynta Sanduuqa P.O.',
      visitTitle: 'Ma u Baahan Tahay Caawimo?',
      visitBody: 'Su’aal kasta fadlan u soo booqo xarunta boostada guud.',
      locationLabel: 'GPO, Muqdisho',
      hoursLabel: 'Sabti - Khamiis, 8:00 subaxnimo - 4:00 galabnimo',
      helpLinkLabel: 'Booq Xarunta Caawinta',
    },
    services: {
      receiving: {
        heroTitle: 'Qaabilaadda Boostada & Xirmooyinka Caalamiga ah',
        heroSubtitle:
          'Waa isku xidhkaaga lagu kalsoonaan karo ee dunida. Halkaan ka hel waxa aad u baahan tahay inaad ka ogaato alaabta laguu soo diray dibadda.',
        processTitle: 'Sida Habku u Shaqeeyo',
      steps: [
        {
          title: 'Xirmada ayaa Soo Gaadha Soomaaliya',
          description:
            'Xirmadaadu waxay timaaddaa xarunta boostada caalamiga ah ee Muqdisho waxaana loo diyaariyaa kormeerka kastamka.',
        },
        {
          title: 'Nadiifinta Kastamka',
          description:
            'Waxa lagu wareejiyaa kastamka Soomaaliya. Marka la fasaxo, waxaa loo gudbiyaa Somali Post si loo dhamaystiro.',
        },
        {
          title: 'Ogeysiis Ku Saabsan Imaanshaha',
          description:
            'Marka alaabtaadu diyaar noqoto, SMS ama iimayl ayaan kuugu soo diraynaa si aan kuu ogeysiinno in lagaa qaadan karo.',
        },
      ],
      trackCta: {
        eyebrow: 'Cusboonaysiisyada raadraaca',
        title: 'Raac xirmadaada wakhti kasta',
        body: 'Hel xog toos ah laga bilaabo imaanshaha ilaa qaadashada—farriimo degdeg ah oo kuu xaqiijiya nabdoonida.',
        button: 'Raac xirmada',
      },
      whatToBringTitle: 'Waxaad U Baahan Tahay Markaad Soo Qaadanayso',
      whatToBringBody:
        'Si hab qaadasho oo ammaan ah u dhacdo, fadlan keen waxyaabahan markaad timaaddo Xarunta Boostada Guud ee Muqdisho:',
      bringList: [
        'Kaarka aqoonsiga qaranka ee NIRA oo sax ah.',
          'Lambarka raadraaca xirmadaada.',
          'Fariinta ogeysiiska (SMS/iimayl) ee aanu kusoo dirnay.',
        ],
        locationTitle: 'Goobta & Saacadaha',
      locationBody: 'Dhammaan xirmooyinka waxaa laga qaataa Xarunta Boostada Guud (GPO).',
      addressLabel: 'Cinwaan',
      addressValue: 'Jamhuuriya Road, Boondheere, Muqdisho, Soomaaliya',
      hoursLabel: 'Saacadaha Shaqada',
      hoursValue: 'Sabti - Khamiis, 8:00 subaxnimo - 4:00 galabnimo',
      futureSection: {
        title: 'Soo socda 2026: Dirista Caalamka',
        body:
          'Diyaar u noqo inaad dunida la xidhnaato. Adeegga dhoofinta cusub wuxuu kuu oggolaanayaa inaad waraaqo iyo xirmooyin uga dirto xaafaddaada meel kasta oo dunida ah.',
        cards: [
          {
            title: 'Kastam Dijitaal ah',
            description: 'Nadiifin dhakhso ah oo sax ah adigoo adeegsanaya nidaamka casriga ah ee UPU CDS.',
          },
          {
            title: 'Meelo Fudud oo Lagu Dhiibo',
            description: 'Ku tag dhammaan shabakadda Rug PUDO ee dalka oo dhan si aad u dhiibto boostadaada.',
          },
          {
            title: 'Raad-raac Caalami ah oo Buuxa',
            description: 'La soco xirmada laga bilaabo goobta lagu dhiibay ilaa meeshii ugu dambaysay adigoo booqda boggayaga.',
          },
        ],
      },
      },
      poBox: {
        heroTitle: 'Kiraynta Sanduuqa P.O. ee Ammaan ah',
        heroSubtitle: 'Ka hel ciwaan gaar ah, joogto ah, oo xirfadaysan bartamaha Muqdisho.',
        whyTitle: 'Maxaa Loo Kiro Qaataa Sanduuqa P.O.?',
        cards: [
          {
            title: 'Amni & Astaan',
            description: 'Boostadaada ku kaydi sanduuq qufulan oo keligaa geli karto si xogtaadu u ahaato mid qarsoon.',
          },
          {
            title: 'Ciwaan Joogto ah',
            description: 'Ciwaanka sanduuqaagu isma beddelo xitaa haddii aad guurto, taas oo dejinaysa macluumaadkaaga.',
          },
          {
            title: 'Ogeysiisyo La Aamini Karo',
            description: 'Hel ogeysiisyo degdeg ah marka warqad cusub ama xirmo kusoo gaadho.',
          },
          {
            title: 'Sawir Xirfadaysan',
            description: 'Sanduuqa P.O. wuxuu bixiyaa ciwaan ganacsi oo la hubo oo sumcaddaada kordhiya.',
          },
        ],
        howTitle: 'Sida Loo Diiwaangalo',
        steps: [
          'Booqo miiska adeegga macaamiisha ee Xarunta Boostada Guud ee Muqdisho.',
          'Codso oo buuxi foomka codsiga sanduuqa P.O.',
          'Soo qaado kaarka aqoonsiga qaranka ee NIRA si loo xaqiijiyo.',
          'Bixi kirada sannadlaha ah ee cabbirka sanduuqa aad dooratay.',
          'Ka hel lambarka sanduuqaaga iyo furayaasha!',
        ],
        pricingTitle: 'Qiimayaal & Cabbirro',
        pricingBody:
          'Waxaan haynaa cabbirro sanduuqyo kala duwan si ay ugu habboonaadaan baahiyahaaga. Fadlan booqo GPO si aad u ogaato helitaanka hadda iyo khidmadaha sannadlaha ah.',
      },
    },
    track: {
      title: 'Raac Alaabtaada',
      subtitle: 'La soco talaabo kasta oo safarka ah.',
      instructions: 'Geli lambarka raadraaca ee hoose.',
      placeholder: 'tusaale, CC850579694SE',
      helper: 'Lambarkaagu waa inuu ahaadaa 13 xaraf sida AA123456789SE.',
      buttonIdle: 'Raac',
      buttonLoading: 'Raadinaya...',
      loading: 'Faahfaahinta raadraaca ayaa soo dhacayso...',
      error: 'Xogta lama raaci karo. Fadlan hubi lambarka oo isku day mar kale.',
      invalidFormat: 'Lambarka raadraaca waa inuu raacaa qaabka AA123456789SE.',
      detailsHeading: 'Faahfaahinta Raadraaca ee',
      currentStatus: 'Xaaladda Hadda',
      originLabel: 'Asal',
      destinationLabel: 'Meesha Loo Socdo',
      historyTitle: 'Taariikhda Rarista',
      notFound: 'Xog raadraac wali lama heli karo. Fadlan isku day mar dambe.',
      notFoundDetail: 'Waxay qaadan kartaa ilaa 48 saacadood ka dib dirista in xogtu soo muuqato. Fadlan dib u hubi lambarka oo isku day mar kale.',
    },
    help: {
      heroTitle: 'Xarunta Caawinta & Taageerada',
      heroSubtitle:
        'Su’aalo ma qabtaa? Waxaan diyaar u nahay inaan kaa jawaabno. Hoos ka hel jawaabaha su’aalaha ugu badan ama nala soo xidhiidh.',
      faqTitle: 'Su’aalaha Inta Badan La Is Weydiiyo',
      sections: {
        tracking: 'Raadraac',
        parcel: 'Soo Qaadashada Xirmooyinka',
        general: 'Guud',
      },
      supportSection: {
        title: 'Hel Taageero Toos ah',
        body: 'Jawaabta ma helaysid? Nala soo xidhiidh ama nagu soo booqo Xarunta Boostada Guud.',
        messageHeading: 'Noo Soo Dir Farriin',
        visitHeading: 'Booqo Xarunta Boostada Guud',
        visitDescription: 'Waxaan kugu suganahay Jamhuuriya Road, Boondheere, Muqdisho.',
      },
      faqs: {
        tracking: [
          {
            question: 'Sideen u raacaa xirmadayda?',
            answerParts: [
              'Waxaad ku gali kartaa lambarka raadraaca ee 13-god ah boggeena ',
              'Track',
              '. Waxa uu ku tusayaa xogta ugu dambeysa ee safarka xirmadaada.',
            ],
          },
          {
            question: "Lambarkayga raadraac wuxuu leeyahay 'Not Found'. Maxay tani ka dhigan tahay?",
            answer:
              'Waxa ay badanaa ka dhigan tahay in xirmada la diray dhawaan oo aan weli lagu darin nidaamka caalamiga ah. Fadlan eeg mar labaad 24–48 saacadood gudahood. Haddii dhibaatadu sii socoto, la xidhiidh qofkii kuu diray si uu u xaqiijiyo lambarka.',
          },
        ],
        parcel: [
          {
            question: 'Sideen ku ogaan karaa in xirmadaydu diyaar tahay?',
            answer:
              'Waxaan ku soo diri doonnaa SMS ama iimayl marka xirmadaydu ka baaraandegto Xarunta Boostada Guud (GPO) oo diyaar kuu tahay.',
          },
          {
            question: 'Maxaan keenaa marka aan xirmada soo qaadanayo?',
            answer:
              'Waxaad u baahan doontaa kaarka aqoonsiga NIRA, lambarka raadraaca, iyo fariinta ogeysiiska ee aan soo dirnay.',
          },
          {
            question: 'Qof kale ma ii soo qaadi karaa xirmadayda?',
            answer:
              'Haa, balse waa inuu keenaa kaarkiisa NIRA, warqad oggolaansho oo aad saxiixday, iyo nuqul ka mid ah kaarkaaga NIRA.',
          },
        ],
        general: [
          {
            question: 'Ma maamulaan boostada dibadda loo diro?',
            answer:
              'Hadda waxaanu kaliya maamulnaa boostada iyo xirmooyinka gudaha loo soo diro. Adeegyada dibadda loo diro waxa lagu dari doonaa dhawaan, fadlan isha ku hay boggayaga.',
          },
        ],
      },
      contact: {
        title: 'Macluumaadka Xidhiidhka',
        addressLabel: 'Cinwaan',
        address: 'Jamhuuriya Road, Degmada Boondheere, Muqdisho, Soomaaliya',
        emailLabel: 'Iimayl',
        email: 'posta@moct.gov.so',
        phoneLabel: 'Telefoon',
        phone: '252-611003239',
        hoursLabel: 'Saacadaha Furitaanka',
        hours: [
          { label: 'Sabti - Arbaco', value: '8:30 subaxnimo - 4:30 galabnimo' },
          { label: 'Khamiis', value: '8:30 subaxnimo - 2:00 galabnimo' },
          { label: 'Jimce', value: 'Xiran' },
        ],
      },
      contactForm: {
        nameLabel: 'Magacaaga',
        emailLabel: 'Iimaylkaaga',
        messageLabel: 'Su’aashaada',
        submitLabel: 'Dir farriinta',
        submittingLabel: 'Diraysa...',
        successTitle: 'Farriinta waa nala soo gaadhay!',
        successBody: 'Waxaan kugula soo laaban doonaa sida ugu dhakhsaha badan.',
        errorMessage: 'Farriinta lama dirin. Fadlan isku day mar kale.',
      },
    },
    about: {
      heroTitle: 'Laga Bilaabo Burbur ilaa Soo Noqosho',
      heroSubtitle:
        'Tani waa sheekada Hay’adda Boostada Qaranka Soomaaliyeed: dhaxal sharaf leh oo hagaya aragti casri ah.',
      disasterTitle: 'Masiibadii Nagu Qaabeeysay',
      disasterQuote:
        '“Masiibadayadu waxay ahayd 34 sano oo burbur hay’ad. Soo kabashadayadu waa tusaale siduu u noqon karo dib u dhis cusub—annagoo hal-abuurnimo u adeegsanayna mustaqbalka.”',
      timeline: [
        {
          year: '1903',
          title: 'Hay’ad Udub-dhexaad ah',
          description:
            'Somali Post ayaa la aasaasay, iyadoo dalka ku xireysa in ka badan 100 goobood oo boosto oo jiilal badan u ahaa xadhig-nolosheed.',
        },
        {
          year: '1991',
          title: 'Burbur Gebi Ahaan ah',
          description:
            'Dhammaan adeegyada way istaageen. Jiil dhan ayaa ku barbaara go’doon ka ah shabakadda boostada ee dunida, iyadoo la waayay kaabayaashii muhiimka ahaa.',
        },
        {
          year: '2025',
          title: 'Soo Noqosho Dijitaal ah',
          description:
            'Xidhiidh caalami ah oo buuxa ayaa dib loo soo celiyay iyadoo la adeegsanayo kaabayaal dijitaal ah oo casri ah.',
        },
      ],
      missionVision: {
        visionLabel: 'Aragtideena',
        visionStatement: 'Inaan Isku Xirno Bulshooyinka, Una Adeegno Horumarka.',
        missionLabel: 'Himiladeena',
        missionStatement:
          'Inaan dhisno ekosistem boosto oo mustaqbal adkaysi leh oo ka faa’iidaysanaya awoodda gaarka loo leeyahay si aan Soomaaliya ugu xidhno dunida.',
      },
      blueprint: {
        title: 'Istaraatijiyadayada',
        description: 'Isbeddelkeenna waxaa hagaya Siyaasadda Qaran ee Boostada ee ay ansixisay dowladda.',
        pillars: [
          {
            title: 'Xeer & Xeerar Cad',
            description: 'Samaynta sharciyo hagaya hawlaha boostada oo ilaaliya xuquuqda macaamiisha.',
          },
          {
            title: 'Doorka SNPS',
            description: 'Inaan qeexno howlgalkeena ahaan Gateway-ga Caalamiga ah iyo fududeeyaha gudaha.',
          },
          {
            title: 'Helitaan Guud',
            description: 'Inaan hubinno in muwaadin kasta uu heli karo adeegyada boostada meel kasta oo uu joogo.',
          },
          {
            title: 'Ka Qaybgalka Gaarka loo leeyahay',
            description: 'Abuurista qaabab iskaashi oo lala yeesho shirkadaha gaarka ah ee gaadhsiinta si loo dhiirrigeliyo hal-abuurnimada.',
          },
          {
            title: 'Doorashada Macaamiisha',
            description: 'Inaan dadka siino xulashooyin iyo adeeg tayo leh oo tartan leh.',
          },
        ],
      },
      achievements: {
        title: 'Eber ilaa Hawlgal Daqiiqado Gudahood',
        cards: [
          { value: '34', label: 'Sano Xidhnaa', description: 'Waxaa laga gudbay hakadkii hay’adaha.' },
          { value: '$1.8M', label: 'Deyntii La Bixiyay', description: 'Kalsoonidii UPU ayaa dib loo soo celiyay.' },
          { value: '1', label: 'IMPC Firfircoon', description: 'Isku xidhnaanta caalamiga ah ayaa si buuxda u shaqaysa.' },
        ],
      },
    },
    legal: {
      privacy: {
        title: 'Privacy Policy',
        subtitle: 'How we collect, use, and protect information shared with Somali Post.',
        lastUpdatedLabel: 'Last updated: January 2026',
        sections: [
          {
            title: '1. Information We Collect',
            body:
              'When you submit forms, track items, or register for services we collect the details you provide, such as contact information, identification documents, and delivery preferences.',
          },
          {
            title: '2. How We Use Data',
            body:
              'Your information is used to verify identity, issue notifications, process payments, and meet regulatory obligations. We do not sell data to third parties.',
          },
          {
            title: '3. Storage & Security',
            body:
              'Information is stored in secure systems operated by Somali Post and trusted partners such as Supabase. Access is limited to authorized staff and protected through encryption and audit logs.',
          },
          {
            title: '4. Your Choices',
            body:
              'You may request corrections or deletion of optional data at any time by emailing posta@moct.gov.so. Some records must be retained to comply with postal regulations.',
          },
        ],
      },
      terms: {
        title: 'Terms of Service',
        subtitle: 'The rules for using posta.so and the Somali National Postal Service.',
        lastUpdatedLabel: 'Last updated: January 2026',
        sections: [
          {
            title: '1. Acceptable Use',
            body:
              'You agree not to misuse Somali Post systems, attempt unauthorized access, or submit fraudulent information. All services must be used in accordance with Somali law.',
          },
          {
            title: '2. Availability of Features',
            body:
              'Some features, such as online P.O. Box registration or payment confirmation, may be temporarily disabled while upgrades are underway. Access can be withdrawn if misuse is detected.',
          },
          {
            title: '3. Accuracy of Information',
            body:
              'You are responsible for ensuring submitted details are accurate and current. Somali Post is not liable for delays or missed deliveries caused by incorrect information.',
          },
          {
            title: '4. Changes to These Terms',
            body:
              'We may update these terms as we launch new services. Continued use of the website after revisions constitutes acceptance of the updated terms. Major changes will be announced on posta.so.',
          },
        ],
      },
    },
    poBoxApplication: {
      heroTitle: 'Hel Sanduuqaaga Rasmiga ah ee P.O.',
      heroSubtitle:
        'Ku soo biir boqolaal qof iyo ganacsiyo ku kalsoon Posta Soomaaliya si ay u helaan ciwaan ammaan ah, gaar loo leeyahay, oo joogto ah.',
      stepOneTitle: 'Tallaabada 1: Diiwaangeli Faahfaahintaada',
      stepOneDescription:
        'Soo gudbi xog sax ah si aan si degdeg ah u xaqiijinno aqoonsigaaga una qoondeyno sanduuqaaga rasmiga ah.',
      planOptions: {
        individualLabel: 'Shakhsi',
        individualDescription: 'Ku habboon boostada shakhsiyeed',
        individualPrice: '$24',
        businessLabel: 'Ganacsi',
        businessDescription: 'Ku habboon shirkadaha iyo NGO-yada',
        businessPrice: '$30',
        priceSuffix: '/sanad',
      },
      formFields: {
        name: 'Magaca oo Dhameystiran',
        email: 'Cinwaanka Iimaylka',
        phone: 'Lambarka Taleefanka',
        whatsapp: 'Lambarka WhatsApp (haddii uu ka duwan yahay)',
        location: 'Goobta / Degmada',
        dateOfBirth: 'Taariikhda Dhalashada',
        occupation: 'Shaqada',
        niraIdNumber: 'Lambarka Aqoonsiga NIRA',
        passportNumber: 'Lambarka Baasaboorka (ikhtiyaari)',
        identityHint: 'Fadlan mid ka mid ah lambarradan kor ku xusan geli.',
      },
      businessFields: {
        companyName: 'Magaca Shirkadda',
        licenseNumber: 'Lambarka Ruqsadda Ganacsiga',
        licenseUpload: 'Ku Xiro Nuqulka Ruqsadda Ganacsiga',
        licenseHint: 'Ku lifaaq nuqul cad oo ruqsaddaada ansaxda ah.',
      },
      uploads: {
        idDocument: 'Ku Xiro Dukumeentiga Aqoonsiga',
        idDocumentHint: 'Fadlan geli nuqul muuqda oo ka mid ah NIRA ama Baasaboorka aad kor ku sheegtay.',
        photoUpload: 'Ku Xiro Sawir cabbir Baasaboor',
      },
      submitLabel: 'Gudbi Codsiga',
      submittingLabel: 'Gudbinayaa...',
      termsAgreement: {
        prefix: 'Waxaan cadaynayaa in macluumaadka kor ku xusan uu sax yahay waxaanan oggolahay ',
        linkLabel: 'shuruudaha kirada Sanduuqa P.O.',
        suffix: '.',
      },
      validationMessages: {
        missingFields: 'Fadlan buuxi dhammaan meelaha loo baahan yahay.',
        missingIdentification: 'Fadlan soo gudbi Aqoonsiga NIRA ama Lambarka Baasaboorka.',
        missingOccupation: 'Fadlan ku qor shaqadaada.',
        missingBusiness: 'Fadlan buuxi faahfaahinta ganacsiga kana lifaaq ruqsaddaada.',
        unexpectedError: 'Waxaa dhacay qalad lama filaan ah. Fadlan isku day mar kale.',
        successMessage: 'Codsiga waa la helay! Xaqiijin ayaa laguugu soo diray {email}.',
      },
      payment: {
        title: 'Tallaabada 2: Bixi Lacagta',
        localHeading: 'Lacag Gudaha (EVC Plus)',
        localBody: 'Wac koodhkan USSD-ga, geli qaddarka ({amount}), kadibna isticmaal "w.post" qaybta sababta lacag-bixinta.',
        ussdPrompt: 'Wac oo raac tilmaamaha:',
        ussdFormat: '*799*31525688*{amount}#',
        internationalHeading: 'Lacag Dibadda (Kaar)',
        internationalBody:
          'Macaamiisha dibadda jooga waxay si nabad ah ugu bixin karaan kaarkooda Visa ama MasterCard. (Astaantan wali waxay ku jirtaa marxalad soo saarid).',
        cardForm: {
          heading: 'Bixi adigoo adeegsanaya Kaar',
          comingSoon: 'Lacag-bixinta kaarka onlaynka ah weli way socotaa. Ilaa markaas fadlan adeegso EVC Plus ama nala soo xiriir.',
          cardNumber: 'Lambarka Kaarka',
          cardNumberPlaceholder: '**** **** **** ****',
          expiry: 'Taariikhda Dhicitaanka',
          expiryPlaceholder: 'MM / YY',
          cvc: 'CVC',
          cvcPlaceholder: '***',
          billingTitle: 'Cinwaanka Bixinta',
          country: 'Dal',
          countryPlaceholder: 'Dal',
          addressLine1: 'Cinwaanka 1aad',
          addressPlaceholder: 'Cinwaanka waddada',
          city: 'Magaalada',
          cityPlaceholder: 'Magaalada',
          postalCode: 'Koodhka Boostada',
          postalPlaceholder: 'Koodhka Boostada',
          submitLabel: 'Bixi Hadda',
        },
      },
      certificate: {
        title: 'Tallaabada 3: Hel Shahaadadaada',
        body:
          'Markaan xaqiijino lacagtaada, waxaan kuu soo saar doonaa shahaadadaada elektaroonigga ah ee Sanduuqa P.O. waxaana kuu soo diri doonaa iimayl ama WhatsApp gudaheed hal maalin shaqo.',
      },
      testimonialsTitle: 'Waxaa Aamina Hay\'adaha Hoggaanka Soomaaliya',
      testimonials: [
        {
          quote:
            'Adeegsiga adeegga Sanduuqa P.O. ee Posta Soomaaliya wuxuu fududeeyay boostadayada shirkadeed. Waxa uu na siiyay cinwaan rasmi ah oo ammaan ah oo lama huraan u ah hawlaheena qaran iyo waraaqaha rasmiga ah.',
          author: 'Hormuud Telecom',
          role: 'Haysta Sanduuqa P.O. ee Rasmiga ah',
          image: '/images/logos/hormuud-logo.png',
        },
        {
          quote:
            'Nidaamka Sanduuqa P.O. wuxuu muhiim u yahay waraaqaha ammaan ee ay u baahan yihiin hay\'adaha maaliyadeed. Posta Soomaaliya waxay bixisaa adeeg lagu kalsoonaan karo oo buuxiya heerarkayaga amniga iyo xirfadda.',
          author: 'Bangiga Dhexe ee Soomaaliya',
          role: 'Haysta Sanduuqa P.O. ee Rasmiga ah',
          image: '/images/logos/central-bank-logo.png',
        },
      ],
    },
    pudo: {
      heroTitle: 'Soo Bandhigidda Shabakadda RUG PUDO',
      heroSubtitle:
        'Mustaqbalka saadka Soomaaliyeed waa maxalli. Waxaan dhiseynaa shabakad qaran oo ganacsiyo maxalli ah oo la isku halayn karo si ay u noqdaan goobo rasmiga ah oo boosto, si adeeggii loogu soo dhoweeyo bulshada.',
      ecosystemTitle: 'Nidaam Isku Xiran',
      ecosystemSubtitle: 'Waxaan dadka, la-hawlgalayaasha, iyo Posta.so ku xireynaa saddex tallaabo oo fudud.',
      ecosystemCards: [
        {
          title: '1. Dadka Soomaaliyeed',
          description:
            'Soo degso app-ka, dooro dukaankaaga maxalliga ah cinwaan ahaan, oo hel ogeysiisyo leh koodh qaadasho oo ammaan ah marka xirmadaadu timaaddo.',
        },
        {
          title: '2. Ganacsiyada Maxalliga ah',
          description:
            'Adeegso app-keena fudud si aad u iskaanno xirmooyinka soo gala, adigoo si toos ah u wargelinaya macaamiisha. Hubi koodhadhka qaadista si ay u noqoto gudbin sugan oo aad u kasbato dakhli dheeraad ah.',
        },
        {
          title: '3. Posta Soomaaliya',
          description:
            'Shaqaalaheennu waxay adeegsanayaan bar-kontarooleed dhexe si ay dijitaal ugu leexiyaan boostada caalamiga ah barta PUDO ee saxda ah, iyagoo abuura shabakad qaran oo hufan oo qalad-yar.',
        },
      ],
      interestTitle: 'Noqo Lammaane Aasaasi ah',
      interestSubtitle:
        'Noqo kuwa ugu horreeya ee ku biira shabakadda boostada cusub ee Soomaaliya. Isdiiwaangeli maanta si aad mudnaan u hesho ugana qayb qaadato qaabeynta mustaqbalka saadka bulshadaada.',
      form: {
        businessName: 'Magaca Ganacsiga',
        ownerName: 'Magacaaga Buuxa',
        phone: 'Taleefoonka Xiriirka',
        location: 'Goobta / Degmada',
        submitLabel: 'Diiwaangeli Danahayga',
        submittingLabel: 'Gudbinayaa...',
        missingFields: 'Fadlan buuxi dhammaan meelaha.',
        successTitle: 'Waad ku mahadsan tahay diiwaangelinta!',
        successBody: 'Waxaad hadda ku jirtaa liiskayaga mudnaanta ee furitaanka rasmiga ah.',
        errorMessage: 'Waxbaa khaldamay. Fadlan isku day mar kale.',
      },
      faqTitle: 'Su’aalaha aad Lahayd',
      faqs: [
        {
          question: 'Qalabkee ayaan u baahanahay inaan noqdo barta PUDO?',
          answer:
            'Waxaad u baahan tahay keliya taleefan casri ah oo internet leh si aad u isticmaasho app-ka fudud ee Rug Agent. Looba baahna qalab gaar ah.',
        },
        {
          question: 'Immisa boos ayaa loo baahan yahay?',
          answer:
            'Waxaad u baahan tahay meel yar oo ammaan ah oo aad ku kaydiso dhowr xirmo. Waxay ahaan kartaa shelf ka dambeeya kaaga ama armaajo la qufuli karo.',
        },
        {
          question: 'Sideen u helaa lacag-bixin?',
          answer:
            'Wada-hawlgalayaasha PUDO waxay kasbadaan komishan xirmo kasta oo ay si guul leh u maareeyaan—ha ahaato soo gal ama soo qaadis. Lacagaha si joogto ah oo otomaatig ah ayaa loo kala xallinayaa.',
        },
        {
          question: 'Taageero noocee ah ayaan ka heli doonaa Posta Soomaaliya?',
          answer:
            'Lammaanayaasha aasaasiga ah waxay heli doonaan tababar buuxa oo app-ka ah, agabka sumadda rasmiga ah ee “RUG PUDO Partner” ee dukaankaaga, iyo khad taageero oo gooni ah su’aal kasta.',
        },
      ],
    },
    termsModal: {
      title: 'Shuruudaha iyo Xeerarka Kirada Sanduuqa P.O.',
      intro: 'Markaad codsanayso Sanduuqa P.O., waxaad oggolaanaysaa shuruudahan soo socda:',
      closeLabel: 'Xir',
      sections: [
        {
          title: '1. Caddeynta Macluumaadka',
          body: 'Waxaad cadaynaysaa in dhammaan macluumaadka aad ku bixisay codsiga uu sax yahay oo dhammaystiran. Waxaad mas\'uuliyad buuxda iska saartaa cawaaqibka ka dhasha xog khaldan.',
        },
        {
          title: '2. Mudada Adeegga & Cusboonaysiinta',
          body: 'Kiradu waxay socotaa hal (1) sano laga bilaabo taariikhda xaqiijinta lacag-bixinta. Si adeeggu uusan kuugu istaagin waa inaad cusboonaysiisaa ka hor waqtiga uu dhacayo.',
        },
        {
          title: '3. Hakin iyo Joojinta Kirada',
          body: 'Haddii lacagtu aanay iman waqtiga kama dambaysta ah, sanduuqaaga P.O. waa la hakinaa. Haddii aan dib loo cusboonaysiin 10 maalmood oo dheeri ah ka dib digniin, Posta Soomaaliya waxay xaq u leedahay inay dib u qaadato sanduuqa oo ay qof kale siisay.',
        },
        {
          title: '4. Isticmaalka Adeegga',
          body: 'Sanduuqa P.O. waxa keliya loogu talagalay helista boostada iyo xirmooyinka sharci ah. Isticmaalka sharci-darrada ah, dhaqaale xun ama khiyaano ah waa laga mamnuucay waxaana keeni doonta in adeegga si degdeg ah loo joojiyo laguna wargeliyo hay\'adaha dowliga ah.',
        },
        {
          title: '5. Furayaasha Lumay',
          body: 'Haddii furaha lumaan waa inaad isla markiiba la socodsiisaa Xarunta Guud ee Boostada. Waxaad qaadaysaa kharashka buuxa ee furaha iyo qufulka lagu beddelayo.',
        },
        {
          title: '6. Qarsoodiga Xogta',
          body: 'Wasaaradda Boostada ee Soomaaliya waxay ka go\'an tahay ilaalinta xogtaada. Macluumaadkaaga waxa loo isticmaalaa keliya maaraynta kirada, xaqiijinta, iyo dirista fariimaha rasmiga ah. Lama wadaagi doono dhinac saddexaad aan sharcigu ku qasbin.',
        },
      ],
    },

  },
  ar: {
    languageNames: {
      en: 'الإنجليزية',
      so: 'الصومالية',
      ar: 'العربية',
    },
    nav: {
      home: 'الرئيسية',
      track: 'تتبع',
      services: 'الخدمات',
      dropdown: {
        receiving: 'استلام البريد والطرود',
        poBox: 'تأجير صناديق البريد',
        pudo: 'شبكة RUG PUDO',
      },
      help: 'الدعم',
      about: 'من نحن',
    },
    hero: {
      title: 'الهيئة الوطنية للبريد في الصومال',
      description:
        'نعيد ربط الصومال بالعالم بكل فخر. نوفر خدمات بريدية موثوقة وآمنة وفعّالة للأفراد والشركات.',
      cta: 'تتبع شحنتك',
    },
    logoCarousel: {
      heading: 'نتواصل مع شركاء البريد حول العالم',
      description: 'جزء من شبكة عالمية لمشغلي البريد الموثوقين.',
      altPrefix: 'شعار شريك بريدي',
    },
    poBoxHero: {
      title: 'عنوانك الآمن داخل الصومال',
      subtitleLines: ['تأجير صناديق بريد', 'من البريد الصومالي'],
      button: 'استأجره اليوم',
      badges: ['موثوق وآمن', 'يصلك بالعالم', 'وصول سهل على مدار الساعة'],
    },
    receivingSection: {
      heading: 'استقبل البريد من كل أنحاء العالم',
      body: 'اتصل بعائلتك وأصدقائك وشركائك التجاريين حول العالم. نوفر بوابة آمنة وموثوقة لكل رسائلك وطرودك الواردة، ونضمن وصولها بأمان إلى الصومال.',
      cta: 'تعرّف على آلية العمل',
    },
    sixDAddress: {
      heading: 'نقدّم 6D Address: العنوان الرقمي الجديد للصومال',
      body: 'رمز بسيط من ستة أرقام لكل موقع. هو الأساس لتسليم موثوق في جميع أنحاء البلاد.',
      cta: 'اعرف المزيد',
    },
    rugPudo: {
      heading: 'شبكة RUG PUDO: خدمات البريد أقرب إليك',
      body: 'عمّا قريب ستتمكن من استلام وتسليم الطرود في المتاجر والأعمال المحلية الموثوقة داخل حيك.',
      cta: 'اكتشف الشبكة',
      highlights: [
        {
          title: 'مراكز الأحياء',
          description: 'المتاجر والصيدليات ومحلات الهواتف المحمولة تصبح نقاطاً مريحة للاستلام والتسليم.',
        },
        {
          title: 'عمليات تحقق رقمية',
          description: 'يتم مسح كل طرد في تطبيق Rug Agent حتى تعرف وقت وصوله والجهة التي استلمته.',
        },
        {
          title: 'رموز أمان فريدة',
          description: 'يقدم المستلم رمزاً مرة واحدة ما يضمن عدم تسليم الطرد للشخص الخطأ.',
        },
      ],
      roadmap: [
        {
          step: '01',
          title: 'مرحلة تجريبية في مقديشو',
          description: 'يتم اختيار الشركاء المؤسسين في أكثر الأحياء حركة.',
        },
        {
          step: '02',
          title: 'انتشار على مستوى البلاد',
          description: 'يحصل كل إقليم على مجموعة من متاجر Rug PUDO المدربة.',
        },
        {
          step: '03',
          title: 'خدمات باتجاهين',
          description: 'إرسال واستلام الطرد من نفس النقطة لتحقيق تغطية كاملة للميل الأخير.',
        },
      ],
      whyTitle: 'لماذا يهم',
      whyHeading: 'ثقة وتتبع ووقت يتم توفيره.',
      whyBody: 'كل عملية استلام أو تسليم تغذي بيانات التتبع مباشرة إلى مركزنا الرئيسي ليحصل العملاء على إشعارات فورية ولتستطيع فرق العمل متابعة مسار الطرد بالكامل.',
    },
    footer: {
      aboutTitle: 'عن Posta.so',
      aboutBody:
        'نعيد ربط الصومال بالعالم بعد 34 عاماً. نبني خدمة بريدية حديثة ورقمية بالكامل لعصر جديد.',
      quickLinksTitle: 'روابط سريعة',
      links: {
        about: 'من نحن',
        services: 'الخدمات',
        poBox: 'صندوق بريد',
        pudo: 'شبكة RUG PUDO',
        help: 'مركز المساعدة',
      },
      contactTitle: 'تواصل معنا',
      contactLines: ['المكتب البريدي العام (GPO)', 'شارع جمهورية، حي بونطير', 'مقديشو، الصومال'],
      emailLabel: 'البريد الإلكتروني',
      emailValue: 'posta@moct.gov.so',
      phoneLabel: 'الهاتف',
      phoneValue: '252-611003239',
      stayConnectedTitle: 'ابق على اتصال',
      stayConnectedBody: 'تابعونا على وسائل التواصل الاجتماعي للحصول على آخر الأخبار والتحديثات.',
      socialFallback: 'قنوات التواصل الاجتماعي ستكون متاحة قريباً.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      rights: 'المؤسسة البريدية الصومالية. جميع الحقوق محفوظة.',
    },
    serviceSidebar: {
      title: 'خدماتنا',
      receiving: 'استلام البريد والطرود',
      poBox: 'تأجير صناديق البريد',
      visitTitle: 'تحتاج مساعدة؟',
      visitBody: 'لأي استفسارات يرجى زيارتنا في المكتب البريدي العام.',
      locationLabel: 'المكتب العام للبريد، مقديشو',
      hoursLabel: 'السبت - الخميس، 8:00 ص حتى 4:00 م',
      helpLinkLabel: 'زيارة مركز المساعدة',
    },
    services: {
      receiving: {
        heroTitle: 'استلام البريد والطرود الدولية',
        heroSubtitle:
          'حلّك الموثوق للعالم. إليك كل ما تحتاج معرفته عن استلام الشحنات الواردة من الخارج.',
        processTitle: 'كيف تتم العملية',
        steps: [
          {
            title: 'وصول الشحنة إلى الصومال',
            description:
              'تصل شحنتك إلى مركز البريد الدولي الرئيسي في مقديشو ويتم تجهيزها لفحص الجمارك.',
          },
          {
            title: 'التخليص الجمركي',
            description:
              'تُعرض الشحنة على الجمارك الصومالية. بعد التخليص، تُسلَّم إلى البريد الصومالي لاستكمال المعالجة.',
          },
          {
            title: 'إشعار بوصول الشحنة',
            description:
              'عند جاهزية شحنتك سنرسل لك رسالة نصية أو بريداً إلكترونياً لإخبارك بأنها متاحة للاستلام.',
          },
        ],
        trackCta: {
          eyebrow: 'تحديثات التتبع',
          title: 'تتبع شحنتك في أي وقت',
          body: 'حالة آنية من لحظة الوصول حتى الاستلام—طمأنينة مع إشعارات فورية.',
          button: 'تتبع الشحنة',
        },
        whatToBringTitle: 'ما الذي ينبغي إحضاره عند الاستلام؟',
        whatToBringBody:
          'لضمان عملية استلام آمنة وسلسة، يرجى إحضار ما يلي إلى المكتب البريدي العام في مقديشو:',
        bringList: [
          'بطاقة هوية وطنية سارية صادرة عن NIRA.',
          'رقم تتبع الشحنة.',
          'رسالة الإشعار (SMS أو بريد إلكتروني) التي وصلتك منا.',
        ],
        locationTitle: 'الموقع وساعات العمل',
        locationBody: 'يتم استلام جميع الشحنات من المكتب البريدي العام (GPO).',
        addressLabel: 'العنوان',
        addressValue: 'شارع جمهورية، بونطير، مقديشو، الصومال',
        hoursLabel: 'ساعات العمل',
        hoursValue: 'السبت - الخميس، من 8:00 ص إلى 4:00 م',
        futureSection: {
          title: 'قريباً في 2026: خدمة الإرسال إلى العالم',
          body:
            'استعد للتواصل مع العالم. ستتمكن من إرسال الرسائل والطرود من حيك إلى أي وجهة عالمية.',
          cards: [
            {
              title: 'جمارك رقمية أولاً',
              description: 'تخليص سريع ودقيق عبر نظام التصاريح الحديث UPU CDS.',
            },
            {
              title: 'نقاط تسليم مريحة',
              description: 'أرسل بريدك من شبكة شركائنا RUG PUDO المنتشرة في أنحاء البلاد.',
            },
            {
              title: 'تتبع دولي كامل',
              description: 'تابع شحنتك من نقطة التسليم وحتى الوجهة النهائية عبر موقعنا.',
            },
          ],
        },
      },
      poBox: {
        heroTitle: 'تأجير صناديق البريد الآمنة',
        heroSubtitle: 'احصل على عنوان بريدي خاص ودائم ومهني في قلب مقديشو.',
        whyTitle: 'لماذا تستأجر صندوق بريد؟',
        cards: [
          {
            title: 'الأمان والخصوصية',
            description: 'احتفظ ببريدك في صندوق مقفل لا يفتحه إلا أنت، لتحمي معلوماتك الشخصية.',
          },
          {
            title: 'عنوان دائم',
            description: 'يبقى عنوان صندوق بريدك ثابتاً حتى لو انتقلت إلى مكان آخر، ما يوفر استقراراً لجهات الاتصال.',
          },
          {
            title: 'إشعارات موثوقة',
            description: 'تصلك إشعارات فورية عند وصول بريد أو طرد جديد إلى صندوقك.',
          },
          {
            title: 'صورة مهنية',
            description: 'يمنحك صندوق البريد عنواناً معتمداً يعزز احترافية أعمالك.',
          },
        ],
        howTitle: 'طريقة التسجيل',
        steps: [
          'توجه إلى مكتب خدمة العملاء في المكتب البريدي العام (GPO) بمقديشو.',
          'اطلب نموذج طلب صندوق بريد وقم بتعبئته.',
          'أحضر بطاقة الهوية الوطنية (NIRA) الصالحة للمطابقة.',
          'ادفع رسوم الإيجار السنوي وفق حجم الصندوق الذي تختاره.',
          'استلم رقم صندوقك ومفاتيحك!',
        ],
        pricingTitle: 'الأسعار والأحجام',
        pricingBody:
          'نوفر أحجاماً متعددة لصناديق البريد لتلائم احتياجاتك. يرجى زيارة المكتب العام لمعرفة التوافر الحالي والرسوم السنوية.',
      },
    },
    track: {
      title: 'تتبع شحنتك',
      subtitle: 'ابقَ مطلعاً على كل خطوة.',
      instructions: 'أدخل رقم التتبع في الحقل أدناه.',
      placeholder: 'مثال: CC850579694SE',
      helper: 'يجب أن يتكون الرقم من 13 خانة مثل AA123456789SE.',
      buttonIdle: 'تتبع',
      buttonLoading: 'جاري البحث...',
      loading: 'جاري تحميل تفاصيل التتبع...',
      error: 'تعذر تتبع الشحنة. يرجى التحقق من الرقم والمحاولة مجدداً.',
      invalidFormat: 'يجب أن يتبع رقم التتبع تنسيق AA123456789SE.',
      detailsHeading: 'تفاصيل التتبع لـ',
      currentStatus: 'الحالة الحالية',
      originLabel: 'بلد المنشأ',
      destinationLabel: 'الوجهة',
      historyTitle: 'سجل الشحنة',
      notFound: 'معلومات التتبع غير متاحة بعد. يرجى المحاولة لاحقاً.',
      notFoundDetail: 'قد يستغرق ظهور الشحنات الجديدة حتى 48 ساعة بعد الإرسال. يرجى التحقق من الرقم والمحاولة مجدداً لاحقا.',
    },
    help: {
      heroTitle: 'مركز المساعدة والدعم',
      heroSubtitle: 'هل لديك أسئلة؟ نحن هنا لمساعدتك. ابحث عن الإجابات أو تواصل مباشرة مع فريقنا.',
      faqTitle: 'الأسئلة المتكررة',
      sections: {
        tracking: 'التتبع',
        parcel: 'استلام الطرود',
        general: 'عام',
      },
      supportSection: {
        title: 'احصل على دعم مباشر',
        body: 'لم تجد الإجابة التي تبحث عنها؟ تواصل معنا مباشرة أو زر المكتب البريدي العام.',
        messageHeading: 'أرسل لنا رسالة',
        visitHeading: 'زر المكتب البريدي العام',
        visitDescription: 'نقع في شارع جمهورية، حي بونطير، مقديشو.',
      },
      faqs: {
        tracking: [
          {
            question: 'كيف أتتبع شحنتي؟',
            answerParts: [
              'يمكنك إدخال رقم التتبع المؤلف من 13 خانة في صفحة ',
              'التتبع',
              ' لمعرفة آخر تحديثات شحنتك.',
            ],
          },
          {
            question: "يظهر رقم التتبع لدي \"غير موجود\"، ماذا يعني ذلك؟",
            answer:
              'غالباً ما يعني أن الشحنة أُرسلت للتو ولم تُسجّل بعد في النظام البريدي الدولي. يرجى إعادة المحاولة خلال 24-48 ساعة. إذا استمرت المشكلة تواصل مع المرسل للتأكد من الرقم.',
          },
        ],
        parcel: [
          {
            question: 'كيف سأعرف أن طردي جاهز للاستلام؟',
            answer:
              'سنرسل لك رسالة نصية أو بريداً إلكترونياً فور معالجة طردك في المكتب البريدي العام وأصبح جاهزاً للاستلام.',
          },
          {
            question: 'ما الذي يجب أن أحضره عند استلام الطرد؟',
            answer:
              'أحضر بطاقة هوية وطنية (NIRA) سارية، رقم التتبع، ورسالة الإشعار التي وصلتك منا.',
          },
          {
            question: 'هل يمكن لشخص آخر استلام الطرد نيابة عني؟',
            answer:
              'نعم، لكن يجب أن يحضر بطاقة هويته NIRA، ورسالة تفويض موقعة منك، ونسخة من بطاقة هويتك.',
          },
        ],
        general: [
          {
            question: 'هل تقدمون خدمات البريد إلى خارج البلاد؟',
            answer:
              'حالياً ندير البريد والطرود الواردة فقط. سنطلق خدمات الإرسال إلى الخارج قريباً، تابع موقعنا للتحديثات.',
          },
        ],
      },
      contact: {
        title: 'بيانات التواصل',
        addressLabel: 'العنوان',
        address: 'شارع جمهورية، حي بونطير، مقديشو، الصومال',
        emailLabel: 'البريد الإلكتروني',
        email: 'posta@moct.gov.so',
        phoneLabel: 'الهاتف',
        phone: '252-611003239',
        hoursLabel: 'ساعات العمل',
        hours: [
          { label: 'السبت - الأربعاء', value: '8:30 ص - 4:30 م' },
          { label: 'الخميس', value: '8:30 ص - 2:00 م' },
          { label: 'الجمعة', value: 'مغلق' },
        ],
      },
      contactForm: {
        nameLabel: 'اسمك',
        emailLabel: 'بريدك الإلكتروني',
        messageLabel: 'استفسارك',
        submitLabel: 'أرسل الرسالة',
        submittingLabel: 'جارٍ الإرسال...',
        successTitle: 'تم استلام رسالتك!',
        successBody: 'سنتواصل معك في أقرب وقت ممكن.',
        errorMessage: 'تعذر إرسال رسالتك. حاول مرة أخرى.',
      },
    },
    about: {
      heroTitle: 'من الانهيار إلى العودة',
      heroSubtitle:
        'هذه هي قصة الهيئة الوطنية للبريد في الصومال: إرث نفخر به يقود رؤيتنا نحو المستقبل.',
      disasterTitle: 'الأزمة التي شكّلتنا',
      disasterQuote:
        '“أزمتنا كانت انهياراً مؤسسياً دام 34 عاماً. تعافينا نموذج لكيفية البناء من جديد، ليس بإعادة الماضي كما هو، بل بابتكار مستقبل أفضل.”',
      timeline: [
        {
          year: '1903',
          title: 'مؤسسة محورية',
          description:
            'تأسس البريد الصومالي وربط البلاد بأكثر من 100 فرع، وكان شريان حياة لأجيال متعاقبة.',
        },
        {
          year: '1991',
          title: 'توقف كامل للعمليات',
          description:
            'توقفت جميع الخدمات. جيل كامل نشأ معزولاً عن شبكة البريد العالمية مما أدى لفقدان البنية التحتية والذاكرة المؤسسية.',
        },
        {
          year: '2025',
          title: 'بعث رقمي جديد',
          description:
            'أُعيد ربط الصومال بالعالم من خلال بنية تحتية رقمية حديثة تتجاوز النماذج التقليدية.',
        },
      ],
      missionVision: {
        visionLabel: 'رؤيتنا',
        visionStatement: 'نربط المجتمعات ونقود عجلة التقدم.',
        missionLabel: 'رسالتنا',
        missionStatement:
          'تطوير منظومة بريدية متجددة تستفيد من قوة القطاع الخاص لتكون جسراً يربط الصومال بالعالم.',
      },
      blueprint: {
        title: 'الخطة الاستراتيجية',
        description: 'يقود تحولنا إطار السياسة الوطنية لقطاع البريد المعتمد من الحكومة.',
        pillars: [
          {
            title: 'الإطار القانوني والتنظيمي',
            description: 'وضع قوانين واضحة لإدارة خدمات البريد وحماية حقوق المستهلك.',
          },
          {
            title: 'دور الهيئة الوطنية للبريد',
            description: 'تحديد مهمتنا كبوابة دولية حصرية وميسر للخدمات داخل البلاد.',
          },
          {
            title: 'إتاحة شاملة',
            description: 'ضمان وصول كل مواطن صومالي إلى الخدمات البريدية أينما كان.',
          },
          {
            title: 'دور القطاع الخاص',
            description: 'بناء أطر للشراكة مع شركات التوزيع الخاصة لدفع الابتكار.',
          },
          {
            title: 'خيارات العملاء',
            description: 'تمكين المواطنين من خيارات متعددة مع خدمة منافسة وذات جودة.',
          },
        ],
      },
      achievements: {
        title: 'من الصفر إلى التشغيل في وقت قياسي',
        cards: [
          { value: '34', label: 'سنة خارج الخدمة', description: 'تجاوزنا فترة الانقطاع المؤسسي التام.' },
          { value: '$1.8M', label: 'ديون مسددة', description: 'استعدنا ثقة الاتحاد البريدي العالمي.' },
          { value: '1', label: 'IMPC نشط', description: 'تمت استعادة الاتصال الدولي الكامل.' },
        ],
      },
    },
    legal: {
      privacy: {
        title: 'Privacy Policy',
        subtitle: 'How we collect, use, and protect information shared with Somali Post.',
        lastUpdatedLabel: 'Last updated: January 2026',
        sections: [
          {
            title: '1. Information We Collect',
            body:
              'When you submit forms, track items, or register for services we collect the details you provide, such as contact information, identification documents, and delivery preferences.',
          },
          {
            title: '2. How We Use Data',
            body:
              'Your information is used to verify identity, issue notifications, process payments, and meet regulatory obligations. We do not sell data to third parties.',
          },
          {
            title: '3. Storage & Security',
            body:
              'Information is stored in secure systems operated by Somali Post and trusted partners such as Supabase. Access is limited to authorized staff and protected through encryption and audit logs.',
          },
          {
            title: '4. Your Choices',
            body:
              'You may request corrections or deletion of optional data at any time by emailing posta@moct.gov.so. Some records must be retained to comply with postal regulations.',
          },
        ],
      },
      terms: {
        title: 'Terms of Service',
        subtitle: 'The rules for using posta.so and the Somali National Postal Service.',
        lastUpdatedLabel: 'Last updated: January 2026',
        sections: [
          {
            title: '1. Acceptable Use',
            body:
              'You agree not to misuse Somali Post systems, attempt unauthorized access, or submit fraudulent information. All services must be used in accordance with Somali law.',
          },
          {
            title: '2. Availability of Features',
            body:
              'Some features, such as online P.O. Box registration or payment confirmation, may be temporarily disabled while upgrades are underway. Access can be withdrawn if misuse is detected.',
          },
          {
            title: '3. Accuracy of Information',
            body:
              'You are responsible for ensuring submitted details are accurate and current. Somali Post is not liable for delays or missed deliveries caused by incorrect information.',
          },
          {
            title: '4. Changes to These Terms',
            body:
              'We may update these terms as we launch new services. Continued use of the website after revisions constitutes acceptance of the updated terms. Major changes will be announced on posta.so.',
          },
        ],
      },
    },
    poBoxApplication: {
      heroTitle: 'احصل على صندوق البريد الرسمي الخاص بك',
      heroSubtitle:
        'انضم إلى مئات الأفراد والشركات الذين يثقون في البريد الصومالي للحصول على عنوان بريدي آمن وخاص ودائم.',
      stepOneTitle: 'الخطوة 1: تسجيل بياناتك',
      stepOneDescription:
        'قدّم معلومات دقيقة كي نتمكن من التحقق من هويتك بسرعة وإسناد صندوق البريد الرسمي لك.',
      planOptions: {
        individualLabel: 'أفراد',
        individualDescription: 'للرسائل والاستخدام الشخصي',
        individualPrice: '$24',
        businessLabel: 'شركات',
        businessDescription: 'للشركات والمنظمات',
        businessPrice: '$30',
        priceSuffix: '/سنوياً',
      },
      formFields: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        whatsapp: 'رقم واتساب (إن وُجد)',
        location: 'المنطقة / الحي',
        dateOfBirth: 'تاريخ الميلاد',
        occupation: 'المهنة',
        niraIdNumber: 'رقم هوية NIRA',
        passportNumber: 'رقم جواز السفر (اختياري)',
        identityHint: 'يرجى تزويدنا بأحد الرقمين السابقين للتحقق من الهوية.',
      },
      businessFields: {
        companyName: 'اسم الشركة',
        licenseNumber: 'رقم الرخصة التجارية',
        licenseUpload: 'تحميل نسخة من الرخصة',
        licenseHint: 'أرفق نسخة واضحة من رخصة العمل السارية.',
      },
      uploads: {
        idDocument: 'تحميل مستند الهوية',
        idDocumentHint: 'أرسل نسخة واضحة من هوية NIRA أو جواز السفر الذي ذكرته أعلاه.',
        photoUpload: 'تحميل صورة شخصية',
      },
      submitLabel: 'إرسال الطلب',
      submittingLabel: 'جارٍ الإرسال...',
      termsAgreement: {
        prefix: 'أُقر بأن البيانات المدخلة صحيحة وأوافق على ',
        linkLabel: 'شروط وأحكام تأجير صندوق البريد',
        suffix: '.',
      },
      validationMessages: {
        missingFields: 'يرجى تعبئة جميع الحقول المطلوبة.',
        missingIdentification: 'يرجى تزويدنا برقم هوية NIRA أو رقم جواز السفر.',
        missingOccupation: 'يرجى ذكر مهنتك.',
        missingBusiness: 'يرجى إدخال جميع بيانات الشركة وإرفاق الرخصة.',
        unexpectedError: 'حدث خطأ غير متوقع. يرجى المحاولة لاحقاً.',
        successMessage: 'تم استلام طلبك بنجاح! تم إرسال تأكيد إلى {email}.',
      },
      payment: {
        title: 'الخطوة 2: إتمام الدفع',
        localHeading: 'الدفع المحلي (EVC Plus)',
        localBody: 'اطلب تنفيذ الرمز التالي، أدخل المبلغ ({amount})، واكتب "w.post" في خانة الوصف.',
        ussdPrompt: 'اطلب الرمز التالي:',
        ussdFormat: '*799*31525688*{amount}#',
        internationalHeading: 'الدفع الدولي (البطاقة)',
        internationalBody:
          'للعملاء خارج الصومال يمكنكم الدفع ببطاقة Visa أو MasterCard بأمان. هذه الخاصية ستتوافر قريباً.',
        cardForm: {
          heading: 'الدفع بالبطاقة',
          comingSoon: 'الدفع بالبطاقة سيكون متاحاً قريباً. يرجى استخدام EVC Plus في الوقت الحالي.',
          cardNumber: 'رقم البطاقة',
          cardNumberPlaceholder: '**** **** **** ****',
          expiry: 'تاريخ الانتهاء',
          expiryPlaceholder: 'MM / YY',
          cvc: 'رمز CVC',
          cvcPlaceholder: '***',
          billingTitle: 'عنوان الفواتير',
          country: 'الدولة',
          countryPlaceholder: 'اختر الدولة',
          addressLine1: 'العنوان (السطر 1)',
          addressPlaceholder: 'اكتب العنوان',
          city: 'المدينة',
          cityPlaceholder: 'اسم المدينة',
          postalCode: 'الرمز البريدي',
          postalPlaceholder: 'اكتب الرمز',
          submitLabel: 'دفع الآن',
        },
      },
      certificate: {
        title: 'الخطوة 3: استلام الشهادة',
        body:
          'فور تأكيد الدفع سنصدر الشهادة الإلكترونية لصندوق البريد ونرسلها لك عبر البريد الإلكتروني و/أو واتساب خلال يوم عمل واحد.',
      },
      testimonialsTitle: 'موثوق به من نخبة المؤسسات في الصومال',
      testimonials: [
        {
          quote:
            'استخدامنا لصندوق البريد الخاص بالبريد الصومالي سهّل إدارة مراسلاتنا الرسمية ومنحنا عنواناً موحداً وآمناً لكل أعمالنا.',
          author: 'Hormuud Telecom',
          role: 'حامل صندوق بريد رسمي',
          image: '/images/logos/hormuud-logo.png',
        },
        {
          quote:
            'الاعتماد على صندوق بريد البريد الصومالي يمنحنا مستوى الأمان والموثوقية المطلوب في القطاع المالي ويضمن وصول المراسلات الحساسة بأمان.',
          author: 'البنك المركزي الصومالي',
          role: 'حامل صندوق بريد رسمي',
          image: '/images/logos/central-bank-logo.png',
        },
      ],
    },
    pudo: {
      heroTitle: 'نقدّم لكم شبكة RUG PUDO',
      heroSubtitle:
        'مستقبل الخدمات اللوجستية الصومالية محلي. نحن نبني شبكة وطنية من الشركات المحلية الموثوقة لتكون نقاطاً بريدية رسمية، فتقترب الخدمات من كل مجتمع.',
      ecosystemTitle: 'نظام بيئي سلس',
      ecosystemSubtitle: 'نربط الأشخاص والشركاء وPosta.so في ثلاث خطوات بسيطة.',
      ecosystemCards: [
        {
          title: '1. من أجل الشعب الصومالي',
          description:
            'نزّل التطبيق، واختر متجرك المحلي كعنوان لك، وتلقَّ الإشعارات برمز استلام آمن فور وصول طردك.',
        },
        {
          title: '2. للشركات المحلية',
          description:
            'استخدم تطبيقنا البسيط لمسح الطرود الواردة وإخطار العملاء تلقائياً. تحقّق من رموز الاستلام لضمان التسليم الآمن واكسب دخلاً إضافياً.',
        },
        {
          title: '3. للبريد الصومالي',
          description:
            'يستخدم موظفونا لوحة تحكم مركزية لتوجيه البريد الدولي رقمياً إلى نقطة PUDO المحلية الصحيحة، مما يخلق شبكة وطنية فعّالة وخالية من الأخطاء.',
        },
      ],
      interestTitle: 'كن شريكاً مؤسساً',
      interestSubtitle:
        'كن من أوائل المنضمين إلى شبكة البريد الجديدة في الصومال. من خلال تسجيل اهتمامك اليوم ستحصل على أولوية المراجعة وتساعد في تشكيل مستقبل الخدمات اللوجستية في مجتمعك.',
      form: {
        businessName: 'اسم العمل',
        ownerName: 'اسمك الكامل',
        phone: 'هاتف التواصل',
        location: 'الموقع / الحي',
        submitLabel: 'سجّل اهتمامي',
        submittingLabel: 'جارٍ التقديم...',
        missingFields: 'يرجى ملء جميع الحقول.',
        successTitle: 'شكراً لك على التسجيل!',
        successBody: 'أنت الآن ضمن قائمة أولوياتنا للإطلاق الرسمي.',
        errorMessage: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
      },
      faqTitle: 'أسئلة قد تهمك',
      faqs: [
        {
          question: 'ما المعدات التي أحتاجها لأصبح نقطة PUDO؟',
          answer:
            'كل ما تحتاجه هو هاتف ذكي متصل بالإنترنت لتشغيل تطبيق Rug Agent البسيط. لا حاجة لأي أجهزة إضافية.',
        },
        {
          question: 'كم المساحة المطلوبة؟',
          answer:
            'تحتاج فقط إلى مساحة صغيرة وآمنة لتخزين بعض الطرود، مثل رف خلف طاولتك أو خزانة قابلة للقفل.',
        },
        {
          question: 'كيف أتلقى دفعاتي؟',
          answer:
            'يحصل شركاء PUDO على عمولة عن كل طرد ينجحون في معالجته، سواء عند المسح الوارد أو التسليم الصادر، ويتم تسوية المدفوعات بانتظام وبشكل آلي.',
        },
        {
          question: 'ما نوع الدعم الذي سأحصل عليه من البريد الصومالي؟',
          answer:
            'سيحصل الشركاء المؤسسون على تدريب كامل على التطبيق، ومواد علامة “RUG PUDO Partner” الرسمية لمتاجركم، إضافة إلى خط دعم مخصص لأي استفسارات.',
        },
      ],
    },
    termsModal: {
      title: 'شروط وأحكام تأجير صندوق البريد',
      intro: 'بالتقديم على صندوق البريد فإنك توافق على البنود التالية:',
      closeLabel: 'إغلاق',
      sections: [
        {
          title: '1. صحة المعلومات',
          body: 'أُقر بأن جميع المعلومات الواردة في الطلب صحيحة وكاملة وأتحمل المسؤولية القانونية عن أي بيانات غير دقيقة.',
        },
        {
          title: '2. مدة الخدمة والتجديد',
          body: 'تستمر فترة التأجير لمدة سنة واحدة من تاريخ تأكيد الدفع. يجب تجديد الاشتراك قبل انتهاء المدة لتفادي الإيقاف.',
        },
        {
          title: '3. الإيقاف وعدم التجديد',
          body: 'في حال عدم سداد الرسوم عند انتهاء المدة سيُعلّق صندوق البريد، ويحق للبريد الصومالي إعادة تخصيصه بعد فترة سماح قدرها عشرة أيام من تاريخ الإشعار.',
        },
        {
          title: '4. الاستخدام المسموح',
          body: 'يُستخدم الصندوق لاستلام المراسلات الرسمية والطرود القانونية فقط. أي استخدام غير قانوني يؤدي إلى الإلغاء الفوري وإبلاغ الجهات المختصة.',
        },
        {
          title: '5. فقدان المفتاح',
          body: 'عند فقدان المفتاح يجب الإبلاغ فوراً بالمكتب البريدي العام، ويتحمل المستأجر تكلفة الاستبدال أو تغيير القفل.',
        },
        {
          title: '6. حماية البيانات',
          body: 'نلتزم بحماية بياناتك واستخدامها فقط لإدارة صندوق البريد وإرسال التنبيهات الرسمية، ولن تتم مشاركتها مع أي جهة إلا وفقاً للقانون.',
        },
      ],
    },

  },
};
