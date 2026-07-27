export type TrackingEventInfo = {
  label: string;
  explanation: string;
};

const eventInformation: Record<string, TrackingEventInfo> = {
  EMA: {
    label: "Posting/collection",
    explanation: "The postal operator received the parcel from the sender.",
  },
  EMB: {
    label: "Arrival at outward office of exchange",
    explanation:
      "The parcel reached the main export processing facility in the origin country.",
  },
  EMC: {
    label: "Departure from outward office of exchange",
    explanation:
      "The parcel left the origin-country export hub and is en route to the next leg.",
  },
  EXA: {
    label: "Item presented to export customs/security",
    explanation:
      "Export customs or security authorities are inspecting the parcel.",
  },
  EXB: {
    label: "Item held by export customs/security",
    explanation:
      "Export customs or security temporarily retained the parcel for checks.",
  },
  EXC: {
    label: "Item returned from export customs/security",
    explanation:
      "Export customs or security cleared the parcel and returned it to the postal operator.",
  },
  EXD: {
    label: "Item held at outward office of exchange",
    explanation:
      "The parcel is waiting at the export facility before it can depart.",
  },
  EXX: {
    label: "Export cancellation",
    explanation:
      "Export processing was cancelled, usually because shipping plans changed.",
  },
  EMJ: {
    label: "Arrival at transit office of exchange",
    explanation:
      "The parcel arrived in a transit country's exchange office.",
  },
  EMK: {
    label: "Departure from transit office of exchange",
    explanation:
      "The parcel departed the transit hub toward the destination country.",
  },
  EMD: {
    label: "Arrival at inward office of exchange",
    explanation:
      "The parcel reached the destination country's import facility.",
  },
  EDA: {
    label: "Held at inward office of exchange",
    explanation:
      "The parcel is on hold at the import facility for operational reasons.",
  },
  EDB: {
    label: "Item presented to import customs",
    explanation:
      "The parcel was handed to destination customs for clearance.",
  },
  EME: {
    label: "Held by import customs",
    explanation:
      "Destination customs are inspecting or processing the parcel.",
  },
  EDC: {
    label: "Item returned from customs (import)",
    explanation:
      "Customs finished processing and released the parcel back to the postal operator.",
  },
  EMF: {
    label: "Departure from inward office of exchange",
    explanation:
      "The parcel left the import facility and is moving into the domestic delivery network.",
  },
  EDD: {
    label: "Item into sorting centre",
    explanation:
      "The parcel arrived at a local sorting centre in the destination country.",
  },
  EDE: {
    label: "Item out of sorting centre",
    explanation:
      "Sorting is complete and the parcel left the sorting centre.",
  },
  EMG: {
    label: "Arrival at delivery office",
    explanation: "The parcel reached the local delivery post office.",
  },
  EDF: {
    label: "Item held at delivery depot",
    explanation: "The parcel is waiting at the local delivery depot.",
  },
  EDG: {
    label: "Item out for physical delivery",
    explanation: "A courier has the parcel and is attempting delivery.",
  },
  EDH: {
    label: "Item arrival at collection point",
    explanation:
      "The parcel is ready for the recipient to pick up at a collection point.",
  },
  EMI: {
    label: "Final delivery",
    explanation: "The parcel has been delivered to the recipient.",
  },
  EMH: {
    label: "Unsuccessful delivery attempt",
    explanation:
      "A delivery attempt failed; typically a notice will be left.",
  },
  EDX: {
    label: "Import terminated",
    explanation:
      "The import process was stopped; the parcel may be returning to sender.",
  },
  EMX: {
    label: "Item out of sorting centre",
    explanation: "The parcel left a sorting centre (legacy code).",
  },
};

const stateLabels: Record<string, string> = {
  "1": "Accepted",
  "2": "In Transit",
  "3": "Delivered",
};

export function getEventInfo(code?: string) {
  return code ? eventInformation[code.toUpperCase()] ?? null : null;
}

export function getStateLabel(stateCode?: string) {
  return stateCode ? stateLabels[stateCode] ?? null : null;
}

export function normalizeTrackingId(value: string) {
  return value.replace(/[^a-z0-9]/gi, "").toUpperCase().slice(0, 13);
}

export function isValidS10(value: string) {
  if (!/^[A-Z]{2}\d{9}[A-Z]{2}$/.test(value)) {
    return false;
  }

  const digits = value.slice(2, 11);
  const serial = digits.slice(0, 8).split("").map(Number);
  const suppliedCheckDigit = Number(digits[8]);
  const weights = [8, 6, 4, 2, 3, 5, 9, 7];
  const total = serial.reduce(
    (sum, digit, index) => sum + digit * weights[index],
    0,
  );
  const remainder = 11 - (total % 11);
  const expectedCheckDigit =
    remainder === 10 ? 0 : remainder === 11 ? 5 : remainder;

  return suppliedCheckDigit === expectedCheckDigit;
}
