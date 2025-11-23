import type { Language } from './translations';

export type EventInfo = {
  label: string;
  explanation: string;
};

type EventDictionary = Record<string, EventInfo>;

const supportedLanguages: Language[] = ['en', 'so', 'ar'];

const eventTranslations: Record<Language, EventDictionary> = {
  en: {
    EMA: {
      label: 'Posting/collection',
      explanation: 'The postal operator received the parcel from the sender.',
    },
    EMB: {
      label: 'Arrival at outward office of exchange',
      explanation: 'The parcel reached the main export processing facility in the origin country.',
    },
    EMC: {
      label: 'Departure from outward office of exchange',
      explanation: 'The parcel left the origin-country export hub and is en route to the next leg.',
    },
    EXA: {
      label: 'Item presented to export customs/security',
      explanation: 'Export customs or security authorities are inspecting the parcel.',
    },
    EXB: {
      label: 'Item held by export customs/security',
      explanation: 'Export customs/security temporarily retained the parcel for checks.',
    },
    EXC: {
      label: 'Item returned from export customs/security',
      explanation: 'Export customs/security cleared the parcel and returned it to the postal operator.',
    },
    EXD: {
      label: 'Item held at outward office of exchange',
      explanation: 'The parcel is waiting at the export facility before it can depart.',
    },
    EXX: {
      label: 'Export cancellation',
      explanation: 'Export processing was cancelled, usually because shipping plans changed.',
    },
    EMJ: {
      label: 'Arrival at transit office of exchange',
      explanation: "The parcel arrived in a transit country's exchange office.",
    },
    EMK: {
      label: 'Departure from transit office of exchange',
      explanation: 'The parcel departed the transit hub toward the destination country.',
    },
    EMD: {
      label: 'Arrival at inward office of exchange',
      explanation: "The parcel reached the destination country's import facility.",
    },
    EDA: {
      label: 'Held at inward office of exchange',
      explanation: 'The parcel is on hold at the import facility for operational reasons.',
    },
    EDB: {
      label: 'Item presented to import customs',
      explanation: 'The parcel was handed to destination customs for clearance.',
    },
    EME: {
      label: 'Held by import customs',
      explanation: 'Destination customs are inspecting or processing the parcel.',
    },
    EDC: {
      label: 'Item returned from customs (import)',
      explanation: 'Customs finished processing and released the parcel back to the postal operator.',
    },
    EMF: {
      label: 'Departure from inward office of exchange',
      explanation: 'The parcel left the import facility and is moving into the domestic delivery network.',
    },
    EDD: {
      label: 'Item into sorting centre',
      explanation: 'The parcel arrived at a local sorting centre in the destination country.',
    },
    EDE: {
      label: 'Item out of sorting centre',
      explanation: 'Sorting is complete and the parcel left the sorting centre.',
    },
    EMG: {
      label: 'Arrival at delivery office',
      explanation: 'The parcel reached the local delivery post office.',
    },
    EDF: {
      label: 'Item held at delivery depot',
      explanation: 'The parcel is waiting at the local delivery depot.',
    },
    EDG: {
      label: 'Item out for physical delivery',
      explanation: 'A courier has the parcel and is attempting delivery.',
    },
    EDH: {
      label: 'Item arrival at collection point',
      explanation: 'The parcel is ready for the recipient to pick up at a collection point.',
    },
    EMI: {
      label: 'Final delivery',
      explanation: 'The parcel has been delivered to the recipient.',
    },
    EMH: {
      label: 'Unsuccessful delivery attempt',
      explanation: 'A delivery attempt failed; typically a notice will be left.',
    },
    EDX: {
      label: 'Import terminated',
      explanation: 'The import process was stopped; the parcel may be returning to sender.',
    },
    EMX: {
      label: 'Item out of sorting centre',
      explanation: 'The parcel left a sorting centre (legacy code).',
    },
  },
  so: {
    EMA: {
      label: 'Diris ama ururin',
      explanation: 'Somali Post ayaa xirmada ka heshay diraha.',
    },
    EMB: {
      label: 'Imaanshaha xarunta dhoofinta',
      explanation: 'Xirmadu waxay gaadhay xarunta habaynta dhoofinta ee dalka diraha.',
    },
    EMC: {
      label: 'Ka bixid xarunta dhoofinta',
      explanation: 'Xirmadu waxay ka baxday xarunta dhoofinta oo waxay u socotaa marxaladda xigta.',
    },
    EXA: {
      label: 'Kastamka dhoofinta ayaa loo gudbiyay',
      explanation: 'Kastamka ama ammaanka dhoofintu waxay kormeerayaan xirmada.',
    },
    EXB: {
      label: 'Kastamka dhoofintu wuu hayaa',
      explanation: 'Kastamku si ku-meel-gaar ah ayuu u hayaa xirmada si loo eego.',
    },
    EXC: {
      label: 'Kastamka dhoofintu waa fasaxay',
      explanation: 'Kastamku wuxuu dhammeeyay hubinta wuxuuna u soo celiyay xirmada Somali Post.',
    },
    EXD: {
      label: 'Xirmo ku sugan xarunta dhoofinta',
      explanation: 'Xirmadu waxay sugaysaa ku baxitaanka xarunta dhoofinta.',
    },
    EXX: {
      label: 'Dhoofintu waa la joojiyay',
      explanation: 'Habka dhoofinta waa la hakiyay, badanaa sababta oo ah qorshe safar ayaa is beddelay.',
    },
    EMJ: {
      label: 'Imaanshaha xarun kala goys ah',
      explanation: 'Xirmadu waxay gaadhay waddan marinka ah oo laga sii raro.',
    },
    EMK: {
      label: 'Ka bixid xarun kala goys ah',
      explanation: 'Xirmadu waxay ka baxday xarunta marinka waxayna u socotaa dalka loo dirayo.',
    },
    EMD: {
      label: 'Imaanshaha xarunta soo dejinta',
      explanation: 'Xirmadu waxay gaadhay xarunta kastamka ee dalka la beegsanayo.',
    },
    EDA: {
      label: 'Ku xayiran xarunta soo dejinta',
      explanation: 'Xirmadu waxay ku jirtaa hakad gudaha xarunta soo dejinta.',
    },
    EDB: {
      label: 'Kastamka soo dejinta ayaa loo gudbiyay',
      explanation: 'Xirmada waxaa loo wareejiyay kastamka dalka la beegsanayo si loo fasaxo.',
    },
    EME: {
      label: 'Kastamka soo dejinta ayaa haysta',
      explanation: 'Kastamka dalka la beegsanayo ayaa hubin ama farsameyn ku haya xirmada.',
    },
    EDC: {
      label: 'Kastamku wuu fasaxay',
      explanation: 'Kastamku wuxuu dhammeeyay habraaca wuuna u soo celiyay Somali Post.',
    },
    EMF: {
      label: 'Ka bixid xarunta soo dejinta',
      explanation: 'Xirmadu waxay ka baxday xarunta soo dejinta waxayna u gudubtay shabakadda gudaha.',
    },
    EDD: {
      label: 'Imaansho xarunta kala soocidda',
      explanation: 'Xirmadu waxay gaadhay xarun kala soocid oo gudaha ah.',
    },
    EDE: {
      label: 'Ka bixid xarunta kala soocidda',
      explanation: 'Kala soociddu way dhammaatay xirmaduna way baxday.',
    },
    EMG: {
      label: 'Imaansho xafiiska qaybinta',
      explanation: 'Xirmadu waxay gaadhay xafiiska boostada ee qaybinta deegaanka.',
    },
    EDF: {
      label: 'Ku xayiran bakhaarka gaarsiinta',
      explanation: 'Xirmadu waxay sugaysaa bakhaar ama xarun qaybinta.',
    },
    EDG: {
      label: 'Bixinta ayaa socota',
      explanation: 'Kuriye ayaa wataa xirmada waxaana la isku dayayaa gaarsiinta.',
    },
    EDH: {
      label: 'Xirmadu waxay taallaa meel laga qaato',
      explanation: 'Xirmadu waxay diyaar u tahay in lagu qaato goob ururin oo la cayimay.',
    },
    EMI: {
      label: 'La gaarsiiyay',
      explanation: 'Xirmada waxaa lagu wareejiyay qofka lagu beegsanayay.',
    },
    EMH: {
      label: 'Gaarsiin fashilantay',
      explanation: 'Isku dayga gaarsiintu wuu dhicisoobay, sida caadiga ah warqad ayaa laga tagayaa.',
    },
    EDX: {
      label: 'Soo dejintii waa la joojiyay',
      explanation: 'Habka soo dejintu waa la hakiyay xirmaduna waxay ku noqon kartaa diraha.',
    },
    EMX: {
      label: 'Ka bixid xarunta kala soocidda',
      explanation: 'Xirmadu waxay ka baxday xarun kala soocid (koodh taariikhi ah).',
    },
  },
  ar: {
    EMA: {
      label: 'الاستلام أو التسليم',
      explanation: 'استلمت الجهة البريدية الطرد من المرسل.',
    },
    EMB: {
      label: 'وصول إلى مركز التبادل الصادر',
      explanation: 'وصل الطرد إلى مركز المعالجة الرئيسي في بلد الإرسال.',
    },
    EMC: {
      label: 'مغادرة مركز التبادل الصادر',
      explanation: 'غادر الطرد مركز التصدير في بلد الإرسال ويتجه إلى المرحلة التالية.',
    },
    EXA: {
      label: 'عرض الطرد على جمارك التصدير',
      explanation: 'تقوم سلطات الجمارك أو الأمن بفحص الطرد قبل مغادرته البلد.',
    },
    EXB: {
      label: 'الطرد محتجز لدى جمارك التصدير',
      explanation: 'احتجزت الجمارك الطرد مؤقتًا لإجراء عمليات التحقق.',
    },
    EXC: {
      label: 'إرجاع الطرد من جمارك التصدير',
      explanation: 'أنهت الجمارك فحص الطرد وأعادته إلى المشغل البريدي.',
    },
    EXD: {
      label: 'الطرد بانتظار المغادرة',
      explanation: 'الطرد ما زال في مركز التبادل الصادر بانتظار نقله.',
    },
    EXX: {
      label: 'إلغاء التصدير',
      explanation: 'تم إيقاف عملية التصدير، غالبًا بسبب تغيير خطة الشحن.',
    },
    EMJ: {
      label: 'وصول إلى مكتب عبور',
      explanation: 'وصل الطرد إلى بلد عبور لمعالجة وسيطة.',
    },
    EMK: {
      label: 'مغادرة مكتب العبور',
      explanation: 'غادر الطرد بلد العبور متجهًا إلى بلد المقصد.',
    },
    EMD: {
      label: 'وصول إلى مركز التبادل الوارد',
      explanation: 'وصل الطرد إلى مركز الاستلام الرئيسي في بلد المقصد.',
    },
    EDA: {
      label: 'معلق في مركز التبادل الوارد',
      explanation: 'الطرد متوقف في مركز الاستلام لأسباب تشغيلية.',
    },
    EDB: {
      label: 'عرض الطرد على جمارك الاستيراد',
      explanation: 'سُلّم الطرد إلى جمارك البلد المستلم لإجراءات التخليص.',
    },
    EME: {
      label: 'محتجز لدى جمارك الاستيراد',
      explanation: 'تقوم جمارك بلد المقصد بفحص أو معالجة الطرد.',
    },
    EDC: {
      label: 'إرجاع الطرد من الجمارك',
      explanation: 'أكملت الجمارك الإجراءات وأعادت الطرد إلى المشغل البريدي.',
    },
    EMF: {
      label: 'مغادرة مركز التبادل الوارد',
      explanation: 'غادر الطرد مركز الاستلام ودخل شبكة التوزيع المحلية.',
    },
    EDD: {
      label: 'الوصول إلى مركز الفرز',
      explanation: 'وصل الطرد إلى مركز فرز محلي داخل بلد المقصد.',
    },
    EDE: {
      label: 'الخروج من مركز الفرز',
      explanation: 'اكتملت عملية الفرز وغادر الطرد المركز.',
    },
    EMG: {
      label: 'الوصول إلى مكتب التسليم',
      explanation: 'وصل الطرد إلى مكتب البريد المحلي المسؤول عن التسليم.',
    },
    EDF: {
      label: 'الطرد بانتظار التسليم',
      explanation: 'الطرد قيد الانتظار في مستودع أو نقطة توزيع محلية.',
    },
    EDG: {
      label: 'الطرد في مسار التسليم',
      explanation: 'يحمل الموزع الطرد حاليًا ويحاول التسليم.',
    },
    EDH: {
      label: 'وصول الطرد إلى نقطة الاستلام',
      explanation: 'الطرد متاح الآن للاستلام من قبل المرسل إليه في نقطة مخصصة.',
    },
    EMI: {
      label: 'تم التسليم',
      explanation: 'تم تسليم الطرد إلى المرسل إليه بنجاح.',
    },
    EMH: {
      label: 'محاولة تسليم غير ناجحة',
      explanation: 'فشلت محاولة التسليم، وغالبًا ما يتم ترك إشعار.',
    },
    EDX: {
      label: 'إنهاء الاستيراد',
      explanation: 'توقفت عملية الاستيراد وقد يعود الطرد إلى المرسل.',
    },
    EMX: {
      label: 'الخروج من مركز الفرز',
      explanation: 'غادر الطرد مركز فرز (رمز قديم).',
    },
  },
};

const stateTranslations: Record<Language, Record<string, string>> = {
  en: {
    '1': 'Accepted',
    '2': 'In Transit',
    '3': 'Delivered',
  },
  so: {
    '1': 'La aqbalay',
    '2': 'Safar ku jira',
    '3': 'La gaarsiiyay',
  },
  ar: {
    '1': 'مقبول',
    '2': 'قيد النقل',
    '3': 'تم التسليم',
  },
};

const normalizeCode = (code?: string) => (code ? code.toUpperCase() : '');

export const getEventInfo = (code: string | undefined, language: Language): EventInfo | null => {
  if (!code) {
    return null;
  }
  const normalized = normalizeCode(code);
  const langMap = eventTranslations[language] ?? eventTranslations.en;
  return langMap[normalized] ?? eventTranslations.en[normalized] ?? null;
};

export const getStateLabel = (stateCode: string | undefined, language: Language): string | null => {
  if (!stateCode) {
    return null;
  }
  const langMap = stateTranslations[language] ?? stateTranslations.en;
  return langMap[stateCode] ?? stateTranslations.en[stateCode] ?? null;
};

export const isLanguage = (value: string | null): value is Language => {
  return supportedLanguages.includes(value as Language);
};
