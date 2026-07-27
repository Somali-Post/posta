"use client";

import { ArrowRight, CheckCircle2, LoaderCircle, Search } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import {
  getEventInfo,
  getStateLabel,
  isValidS10,
  normalizeTrackingId,
} from "@/lib/tracking";

type TrackingEvent = {
  status: string;
  explanation?: string;
  location: string;
  code: string;
  timestamp: string;
};

type TrackingData = {
  trackingId?: string;
  status: string;
  message?: string;
  origin?: string;
  destination?: string;
  originCode?: string;
  destinationCode?: string;
  stateCode?: string;
  latestEventCode?: string;
  history: TrackingEvent[];
};

export function TrackingForm({ initialValue = "" }: { initialValue?: string }) {
  const [trackingId, setTrackingId] = useState(
    normalizeTrackingId(initialValue),
  );
  const [data, setData] = useState<TrackingData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialValue && isValidS10(normalizeTrackingId(initialValue))) {
      void requestTracking(normalizeTrackingId(initialValue));
    }
  }, [initialValue]);

  async function requestTracking(value: string) {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const response = await fetch(`/api/track/${value}`);
      const result = (await response.json()) as TrackingData & {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to retrieve tracking details.",
        );
      }

      setData(result);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Tracking is temporarily unavailable.",
      );
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValidS10(trackingId)) {
      setError(
        "Enter a valid 13-character S10 tracking number, for example RR123456785DE.",
      );
      setData(null);
      return;
    }

    void requestTracking(trackingId);
  }

  const currentStatus =
    getEventInfo(data?.latestEventCode)?.label ||
    getStateLabel(data?.stateCode) ||
    data?.status;

  return (
    <div className="trackingExperience">
      <form className="trackingSearch" onSubmit={handleSubmit} noValidate>
        <label htmlFor="tracking-page-number">Tracking number</label>
        <p>Use the 13-character S10 number from your receipt or confirmation.</p>
        <div className="trackingSearchRow">
          <div className="trackingInput">
            <Search size={20} aria-hidden="true" />
            <input
              id="tracking-page-number"
              value={trackingId}
              onChange={(event) =>
                setTrackingId(normalizeTrackingId(event.target.value))
              }
              placeholder="RR123456785DE"
              maxLength={13}
              autoComplete="off"
              aria-invalid={error ? "true" : "false"}
              disabled={loading}
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? (
              <LoaderCircle className="spin" size={19} aria-hidden="true" />
            ) : (
              <Search size={19} aria-hidden="true" />
            )}
            {loading ? "Checking" : "Track item"}
          </button>
        </div>
        <p className="trackingHelper">
          Format: two letters, nine digits and two country letters.
        </p>
        {error ? (
          <p className="formMessage formError" role="alert">
            {error}
          </p>
        ) : null}
      </form>

      {data ? (
        <section className="trackingResult" aria-live="polite">
          {data.status === "Not Found" ? (
            <div className="emptyTracking">
              <Search size={32} aria-hidden="true" />
              <h2>No tracking update is available</h2>
              <p>{data.message}</p>
              <p>
                The item may not have arrived in Somalia yet or no supported
                postal event has been received.
              </p>
            </div>
          ) : (
            <>
              <div className="trackingResultHeader">
                <div>
                  <p>Current status</p>
                  <h2>{currentStatus}</h2>
                </div>
                <p className="trackingId">{data.trackingId}</p>
              </div>

              <div className="routeSummary">
                <div>
                  <span>{data.originCode || "—"}</span>
                  <p>Origin</p>
                  <strong>{data.origin}</strong>
                </div>
                <ArrowRight size={28} aria-hidden="true" />
                <div>
                  <span>{data.destinationCode || "—"}</span>
                  <p>Destination</p>
                  <strong>{data.destination}</strong>
                </div>
              </div>

              <div className="trackingHistory">
                <h2>Tracking history</h2>
                {data.history.length ? (
                  <ol>
                    {[...data.history].reverse().map((event, index) => {
                      const information = getEventInfo(event.code);

                      return (
                        <li key={`${event.timestamp}-${event.code}-${index}`}>
                          <CheckCircle2 size={19} aria-hidden="true" />
                          <div>
                            <h3>{information?.label || event.status}</h3>
                            <p>
                              {information?.explanation || event.explanation}
                            </p>
                            <div>
                              <span>{event.location}</span>
                              <time dateTime={event.timestamp}>
                                {formatTimestamp(event.timestamp)}
                              </time>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                ) : (
                  <p>No postal events are available yet.</p>
                )}
              </div>
            </>
          )}
        </section>
      ) : null}
    </div>
  );
}

function formatTimestamp(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}
