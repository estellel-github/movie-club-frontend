import { useState } from "react";
import { Link } from "react-router-dom";

interface RSVPBlockProps {
  userRSVPStatus: string;
  onRSVPChange: (newStatus: string) => void;
  isEventInPast: boolean;
}

export default function RSVPBlock({
  userRSVPStatus,
  onRSVPChange,
  isEventInPast,
}: RSVPBlockProps) {
  const [status, setStatus] = useState(userRSVPStatus);

  const handleRSVPChange = (newStatus: string) => {
    setStatus(newStatus);
    onRSVPChange(newStatus);
  };

  return (
    <>
      <section className="container mx-auto p-6">
        {isEventInPast ? (
          <h2>Event is in the past: RSVPs are closed! </h2>
        ) : (
          <h2>Your RSVP: {status}</h2>
        )}

        <div className="relative w-full max-w-3xl mx-auto mt-4 flex items-center justify-center">
          <img
            src="/images/rsvp.png"
            alt="RSVP Banner Image"
            className="rounded-lg shadow-lg w-full"
          />

          {isEventInPast && (
            <Link
              to="/events"
              className="btn btn-warning absolute flex items-center justify-center px-6 py-3 text-lg rounded-lg"
            >
              See Other Events
            </Link>
          )}

          {!isEventInPast && status === "Not Going" && (
            <button
              onClick={() => handleRSVPChange("Attending")}
              className="btn btn-warning absolute flex items-center justify-center px-6 py-3 text-lg rounded-lg"
            >
              Attend
            </button>
          )}
          {!isEventInPast && status === "Waitlisted" && (
            <button
              onClick={() => handleRSVPChange("Not Going")}
              className="btn btn-warning absolute flex items-center justify-center px-6 py-3 text-lg rounded-lg"
            >
              Remove RSVP
            </button>
          )}
          {!isEventInPast && status === "Attending" && (
            <button
              onClick={() => handleRSVPChange("Not Going")}
              className="btn btn-warning absolute flex items-center justify-center px-6 py-3 text-lg rounded-lg"
            >
              Remove RSVP
            </button>
          )}
        </div>
      </section>
    </>
  );
}
