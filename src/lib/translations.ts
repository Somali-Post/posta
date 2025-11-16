export type Language = 'en' | 'so' | 'ar';

export interface FaqItem {
  question: string;
  answer?: string;
  answerParts?: [string, string, string];
}

interface FooterLinks {
  home: string;
  services: string;
  poBox: string;
  help: string;
  about: string;
}

interface ServiceStep {
  title: string;
  description: string;
}

interface InfoCard {
  title: string;
  description: string;
}

interface HelpContactHour {
  label: string;
  value: string;
}

export interface TranslationContent {
  languageNames: Record<Language, string>;
  nav: {
    home: string;
    services: string;
    poBox: string;
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
    rights: string;
  };
  serviceSidebar: {
    title: string;
    receiving: string;
    poBox: string;
    needHelpTitle: string;
    needHelpBody: string;
    locationLabel: string;
    hoursLabel: string;
    contactButton: string;
  };
  services: {
    receiving: {
      heroTitle: string;
      heroSubtitle: string;
      processTitle: string;
      steps: ServiceStep[];
      whatToBringTitle: string;
      whatToBringBody: string;
      bringList: string[];
      locationTitle: string;
      locationBody: string;
      addressLabel: string;
      addressValue: string;
      hoursLabel: string;
      hoursValue: string;
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
    buttonIdle: string;
    buttonLoading: string;
    loading: string;
    error: string;
    detailsHeading: string;
    currentStatus: string;
    originLabel: string;
    destinationLabel: string;
    historyTitle: string;
    notFound: string;
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
      services: 'Services',
      poBox: 'P.O. Box',
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
      badges: ['Reliable & Safe', 'Connects You Globally', 'Easy 24/7 Access'],
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
    },
    footer: {
      aboutTitle: 'About Posta.so',
      aboutBody:
        'Reconnecting Somalia to the world after 34 years. We are building a modern, digital-first postal service for a new era.',
      quickLinksTitle: 'Quick Links',
      links: {
        home: 'Home',
        services: 'Services',
        poBox: 'P.O. Box',
        help: 'Help',
        about: 'About Us',
      },
      contactTitle: 'Contact Us',
      contactLines: ['General Post Office (GPO)', 'Jamhuuriya Road, Boondheere District', 'Muqdisho, Somalia'],
      emailLabel: 'Email',
      emailValue: 'posta@moct.gov.so',
      phoneLabel: 'Phone',
      phoneValue: '252-611003239',
      rights: 'Somali Post. All rights reserved.',
    },
    serviceSidebar: {
      title: 'Our Services',
      receiving: 'Receiving Mail & Parcels',
      poBox: 'P.O. Box Rentals',
      needHelpTitle: 'Need Help?',
      needHelpBody: 'For any questions, please visit us or get in touch.',
      locationLabel: 'GPO, Mogadishu',
      hoursLabel: 'Sat - Thurs, 8:00 AM - 4:00 PM',
      contactButton: 'Contact Us',
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
        whatToBringTitle: 'What to Bring for Collection',
        whatToBringBody:
          'To ensure a secure and smooth pickup process, please bring the following to the General Post Office (GPO) in Mogadishu:',
        bringList: [
          'A valid National Identification (NIRA) ID card.',
          'Your item’s tracking number.',
          'The notification message (SMS/email) you received from us.',
        ],
        locationTitle: 'Location & Hours',
        locationBody: 'All items are to be collected from the General Post Office (GPO).',
        addressLabel: 'Address',
        addressValue: 'Jamhuuriya Road, Boondheere, Mogadishu, Somalia',
        hoursLabel: 'Hours',
        hoursValue: 'Saturday - Thursday, 8:00 AM - 4:00 PM',
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
      buttonIdle: 'Track',
      buttonLoading: 'Searching...',
      loading: 'Loading tracking details...',
      error: 'Could not track the item. Please check the number and try again.',
      detailsHeading: 'Tracking Details for',
      currentStatus: 'Current Status',
      originLabel: 'Origin',
      destinationLabel: 'Destination',
      historyTitle: 'Shipment History',
      notFound: 'Tracking information is not available yet. Please try again later.',
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
      faqs: {
        tracking: [
          {
            question: 'How do I track my item?',
            answerParts: [
              'You can track your item by entering the 13-digit tracking number on our ',
              'Track page',
              '. This will show you the latest updates on your shipment’s journey.',
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
  },
  so: {
    languageNames: {
      en: 'Ingiriisi',
      so: 'Soomaali',
      ar: 'Carabi',
    },
    nav: {
      home: 'Bogga Hore',
      services: 'Adeegyada',
      poBox: 'Sanduuqa P.O.',
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
      badges: ['La Aamini Karo & Badbaado', 'Kugu Xira Caalamka', 'Gelin Fudud 24/7'],
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
    },
    footer: {
      aboutTitle: 'Ku Saabsan Posta.so',
      aboutBody:
        'Waxaan ka dib 34 sano dib ugu xidhay Soomaaliya dunida. Waxaan dhiseynaa adeeg boosto oo casri ah oo dijitaal ah.',
      quickLinksTitle: 'Xidhiidh Degdeg ah',
      links: {
        home: 'Bogga Hore',
        services: 'Adeegyada',
        poBox: 'Sanduuqa P.O.',
        help: 'Caawimaad',
        about: 'Ku Saabsan',
      },
      contactTitle: 'Nala Soo Xidhiidh',
      contactLines: ['Xarunta Boostada Guud (GPO)', 'Jamhuuriya Road, Degmada Boondheere', 'Muqdisho, Soomaaliya'],
      emailLabel: 'Iimayl',
      emailValue: 'posta@moct.gov.so',
      phoneLabel: 'Telefoon',
      phoneValue: '252-611003239',
      rights: 'Somali Post. Xuquuq kasta waa la dhowray.',
    },
    serviceSidebar: {
      title: 'Adeegyadayada',
      receiving: 'Qaabilaadda Boostada & Xirmooyinka',
      poBox: 'Kiraynta Sanduuqa P.O.',
      needHelpTitle: 'Ma u Baahan Tahay Caawimo?',
      needHelpBody: 'Su’aal kasta fadlan noo soo booqo ama nala soo xidhiidh.',
      locationLabel: 'GPO, Muqdisho',
      hoursLabel: 'Sabti - Khamiis, 8:00 subaxnimo - 4:00 galabnimo',
      contactButton: 'Nala Soo Xidhiidh',
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
      buttonIdle: 'Raac',
      buttonLoading: 'Raadinaya...',
      loading: 'Faahfaahinta raadraaca ayaa soo dhacayso...',
      error: 'Xogta lama raaci karo. Fadlan hubi lambarka oo isku day mar kale.',
      detailsHeading: 'Faahfaahinta Raadraaca ee',
      currentStatus: 'Xaaladda Hadda',
      originLabel: 'Asal',
      destinationLabel: 'Meesha Loo Socdo',
      historyTitle: 'Taariikhda Rarista',
      notFound: 'Xog raadraac wali lama heli karo. Fadlan isku day mar dambe.',
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
  },
  ar: {
    languageNames: {
      en: 'الإنجليزية',
      so: 'الصومالية',
      ar: 'العربية',
    },
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      poBox: 'صندوق بريد',
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
    },
    footer: {
      aboutTitle: 'عن Posta.so',
      aboutBody:
        'نعيد ربط الصومال بالعالم بعد 34 عاماً. نبني خدمة بريدية حديثة ورقمية بالكامل لعصر جديد.',
      quickLinksTitle: 'روابط سريعة',
      links: {
        home: 'الرئيسية',
        services: 'الخدمات',
        poBox: 'صندوق بريد',
        help: 'الدعم',
        about: 'من نحن',
      },
      contactTitle: 'تواصل معنا',
      contactLines: ['المكتب البريدي العام (GPO)', 'شارع جمهورية، حي بونطير', 'مقديشو، الصومال'],
      emailLabel: 'البريد الإلكتروني',
      emailValue: 'posta@moct.gov.so',
      phoneLabel: 'الهاتف',
      phoneValue: '252-611003239',
      rights: 'المؤسسة البريدية الصومالية. جميع الحقوق محفوظة.',
    },
    serviceSidebar: {
      title: 'خدماتنا',
      receiving: 'استلام البريد والطرود',
      poBox: 'تأجير صناديق البريد',
      needHelpTitle: 'تحتاج مساعدة؟',
      needHelpBody: 'لأي استفسارات يرجى زيارتنا أو التواصل معنا.',
      locationLabel: 'المكتب العام للبريد، مقديشو',
      hoursLabel: 'السبت - الخميس، 8:00 ص حتى 4:00 م',
      contactButton: 'اتصل بنا',
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
      buttonIdle: 'تتبع',
      buttonLoading: 'جاري البحث...',
      loading: 'جاري تحميل تفاصيل التتبع...',
      error: 'تعذر تتبع الشحنة. يرجى التحقق من الرقم والمحاولة مجدداً.',
      detailsHeading: 'تفاصيل التتبع لـ',
      currentStatus: 'الحالة الحالية',
      originLabel: 'بلد المنشأ',
      destinationLabel: 'الوجهة',
      historyTitle: 'سجل الشحنة',
      notFound: 'معلومات التتبع غير متاحة بعد. يرجى المحاولة لاحقاً.',
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
  },
};
