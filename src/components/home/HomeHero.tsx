import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="parcel-hero" aria-labelledby="parcel-hero-title">
      <div className="parcel-hero__inner">
        <div className="parcel-hero__content">
          <p className="parcel-hero__eyebrow">
            Somalia&apos;s National Postal Service
          </p>

          <h1 id="parcel-hero-title" className="parcel-hero__title">
            Connecting Somalia through trusted postal services
          </h1>

          <p className="parcel-hero__description">
            Receive international mail, track supported postal items and access
            official guidance for sending mail to Somalia.
          </p>

          <div className="parcel-hero__actions">
            <Link href="/track" className="button button--gold">
              <TrackingIcon />
              <span>Track an Item</span>
              <ArrowIcon />
            </Link>

            <Link
              href="/send-to-somalia"
              className="button button--secondary"
            >
              <MailIcon />
              <span>How to Send Mail to Somalia</span>
            </Link>
          </div>
        </div>

        <div className="parcel-hero__visual">
          <div className="parcel-hero__image-frame">
            <Image
              src="/images/parcel-service.webp"
              alt="Parcels prepared for international postal processing"
              fill
              priority
              sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 590px"
              className="parcel-hero__image"
            />
          </div>

          <div
            className="parcel-hero__postcode"
            aria-label="BN1011 is the current interim postal code"
          >
            <span className="parcel-hero__postcode-label">
              Interim postal code
            </span>

            <span className="parcel-hero__postcode-value">BN1011</span>

            <span className="parcel-hero__postcode-mark" aria-hidden="true">
              <CheckIcon />
            </span>
          </div>

          <Link
            href="/services/receiving"
            className="parcel-hero__inbound-card"
            aria-label="Learn about receiving international mail"
          >
            <span className="parcel-hero__inbound-icon" aria-hidden="true">
              <MailIcon />
            </span>

            <span className="parcel-hero__inbound-content">
              <span className="parcel-hero__inbound-label">
                Inbound mail
              </span>

              <span className="parcel-hero__inbound-heading">
                Arrival at inward office of exchange
              </span>

              <span className="parcel-hero__inbound-body">
                Tracking updates appear as postal events are received from
                participating postal operators.
              </span>
            </span>

            <span className="parcel-hero__inbound-arrow" aria-hidden="true">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function TrackingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 6h10" />
      <path d="M4 11h7" />
      <path d="M4 16h5" />
      <path d="m15 15 2 2 4-5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m7 12 3 3 7-7" />
    </svg>
  );
}
