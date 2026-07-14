'use client';

import Image from 'next/image';
import { FormEvent, useMemo, useState } from 'react';
import { Card, Badge } from '@/components/ui/Section';
import { getEventInfo, getStateLabel } from '@/lib/trackingEvents';
import { isValidS10, normalizeTrackingId } from '@/lib/s10';
import { countryCodeToFlag } from '@/lib/utils';

type TrackingEvent = {
  status: string;
  location: string;
  code: string;
  timestamp: string;
  explanation?: string;
};

type TrackingData = {
  trackingId: string;
  status: string;
  origin?: string;
  destination?: string;
  originCode?: string;
  destinationCode?: string;
  history: TrackingEvent[];
  message?: string;
  stateCode?: string;
  latestEventCode?: string;
};

type ApiErrorPayload = { error?: string; message?: string };

const UPU_GTT_URL = 'https://globaltracktrace.ptc.post/gtt.web/';

export function TrackingClient() {
  const [trackingId, setTrackingId] = useState('');
  const [data, setData] = useState<TrackingData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputError, setInputError] = useState<string | null>(null);
  const [errorKey, setErrorKey] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const normalizedId = useMemo(() => normalizeTrackingId(trackingId), [trackingId]);

  const handleIdChange = (value: string) => {
    setTrackingId(normalizeTrackingId(value));
    setInputError(null);
    setErrorKey(null);
    setErrorMessage(null);
    setData(null);
  };

  const handleTrack = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = normalizedId.trim();

    if (!id || !isValidS10(id)) {
      setInputError('Enter a valid 13-character S10 tracking number, for example RR123456785DE.');
      return;
    }

    setIsLoading(true);
    setData(null);
    setInputError(null);
    setErrorKey(null);
    setErrorMessage(null);

    try {
      const response = await fetch(`/api/track/${id}`);
      let payload: unknown = null;

      try {
        payload = await response.json();
      } catch {
        payload = null;
      }

      if (!response.ok) {
        const apiError = (payload || {}) as ApiErrorPayload;
        if (response.status === 400 || apiError.error === 'INVALID_S10') {
          setErrorKey('INVALID_S10');
          setErrorMessage(apiError.message || 'Invalid tracking number. Please check the format and try again.');
        } else if (response.status === 429 || apiError.error === 'RATE_LIMIT') {
          setErrorKey('RATE_LIMIT');
          setErrorMessage(apiError.message || 'Too many attempts. Please wait and try again.');
        } else {
          setErrorKey('TRACK_ERROR');
          setErrorMessage(apiError.message || 'Tracking is temporarily unavailable. Please try again soon.');
        }
        return;
      }

      setData(payload as TrackingData);
    } catch {
      setErrorKey('TRACK_ERROR');
      setErrorMessage('Tracking is temporarily unavailable. Please try again soon.');
    } finally {
      setIsLoading(false);
    }
  };

  const isNotFound = data?.status === 'Not Found';
  const isPreArrival = data?.status === 'Pre-Arrival';
  const showTransitGuidance = Boolean(isNotFound || isPreArrival);

  return (
    <div className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
      <Card className="-mt-10 relative z-10">
        <form onSubmit={handleTrack} className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <label htmlFor="trackingId" className="text-sm font-bold text-navy-950">
              Tracking number
            </label>
            <input
              id="trackingId"
              type="text"
              value={trackingId}
              onChange={(event) => handleIdChange(event.target.value)}
              placeholder="RR123456785DE"
              maxLength={13}
              data-tracking-input="true"
              aria-invalid={inputError ? 'true' : 'false'}
              aria-describedby={inputError ? 'tracking-error' : 'tracking-help'}
              disabled={isLoading}
              className="mt-2 text-lg font-semibold uppercase tracking-wide"
            />
            <p id="tracking-help" className="mt-2 text-sm text-ink-muted">
              S10 tracking numbers use two letters, nine digits and two country letters.
            </p>
            {inputError && (
              <p id="tracking-error" className="mt-2 text-sm font-semibold text-red-700">
                {inputError}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-full bg-gold-500 px-7 py-3 text-sm font-bold text-navy-950 transition hover:bg-gold-400 disabled:cursor-not-allowed disabled:bg-ink-muted disabled:text-white md:mt-8"
          >
            {isLoading ? 'Checking...' : 'Track Item'}
          </button>
        </form>
      </Card>

      <div className="mt-8">
        {isLoading && (
          <Card>
            <p className="text-lg font-semibold text-navy-950">Checking tracking updates...</p>
            <p className="mt-2 text-sm text-ink-muted">Please wait while Somali Post checks the tracking service.</p>
          </Card>
        )}

        {!isLoading && errorKey && (
          <GuidanceCard title={errorTitle(errorKey)} body={errorMessage || 'Please try again or contact Somali Post.'} />
        )}

        {!isLoading && showTransitGuidance && (
          <GuidanceCard
            title="No tracking update is available"
            body="This usually means the item has not yet arrived in Somalia or no supported event has been received. Tracking will update when supported postal events become available."
          />
        )}

        {!isLoading && data && !showTransitGuidance && !errorKey && <TrackingResult data={data} />}

        {!isLoading && !data && !errorKey && !inputError && (
          <Card>
            <p className="text-lg font-semibold text-navy-950">Enter a tracking number to begin.</p>
            <p className="mt-2 text-sm text-ink-muted">
              The redesigned page continues to use the existing Somali Post tracking backend.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}

function GuidanceCard({ title, body }: { title: string; body: string }) {
  return (
    <Card>
      <Badge>Tracking guidance</Badge>
      <h2 className="mt-4 text-2xl font-bold text-navy-950">{title}</h2>
      <p className="mt-3 max-w-3xl leading-7 text-ink-muted">{body}</p>
      <a
        href={UPU_GTT_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-border px-4 py-3 text-sm font-bold text-navy-900 transition hover:border-gold-500"
      >
        <Image src="/images/upu-logo.png" alt="UPU" width={28} height={28} />
        UPU Global Track & Trace
      </a>
    </Card>
  );
}

function TrackingResult({ data }: { data: TrackingData }) {
  const currentEvent = getEventInfo(data.latestEventCode, 'en');
  const currentState = getStateLabel(data.stateCode, 'en');
  const status = currentEvent?.label || currentState || data.status;

  return (
    <div className="space-y-6">
      <Card className="bg-navy-950 text-white">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-400">Current status</p>
        <h2 className="mt-3 text-3xl font-bold">{status}</h2>
        <p className="mt-2 text-white/70">{data.trackingId}</p>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <CountryCard label="Origin" name={data.origin || 'Unknown'} code={data.originCode} />
        <CountryCard label="Destination" name={data.destination || 'Unknown'} code={data.destinationCode} />
      </div>

      <Card>
        <h2 className="text-2xl font-bold text-navy-950">Tracking history</h2>
        <ol className="mt-6 space-y-6 border-l-2 border-navy-900 pl-6">
          {data.history.map((event) => {
            const info = getEventInfo(event.code, 'en');
            return (
              <li key={`${event.timestamp}-${event.code}`} className="relative">
                <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-white bg-gold-500" />
                <p className="text-lg font-bold text-navy-950">{info?.label || event.status}</p>
                {(info?.explanation || event.explanation) && (
                  <p className="mt-1 text-sm leading-6 text-ink-muted">{info?.explanation || event.explanation}</p>
                )}
                <p className="mt-2 text-sm font-semibold text-ink">{event.location}</p>
                <p className="mt-1 text-sm text-ink-muted">{formatTimestamp(event.timestamp)}</p>
              </li>
            );
          })}
        </ol>
      </Card>
    </div>
  );
}

function CountryCard({ label, name, code }: { label: string; name: string; code?: string }) {
  return (
    <Card>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-ink-muted">{label}</p>
      <p className="mt-3 text-3xl">{code ? countryCodeToFlag(code) : ''}</p>
      <p className="mt-2 text-xl font-bold text-navy-950">{code ? `${name} (${code})` : name}</p>
    </Card>
  );
}

function errorTitle(errorKey: string) {
  if (errorKey === 'INVALID_S10') return 'Invalid tracking number';
  if (errorKey === 'RATE_LIMIT') return 'Too many requests';
  return 'Unable to retrieve tracking details';
}

function formatTimestamp(value: string) {
  const time = Date.parse(value);
  if (Number.isNaN(time)) return value;
  return new Date(time).toLocaleString('en', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
