import { useState } from "react";
import EventCard from "./EventCard";

interface EventSectionProps {
  events: {
    id: string;
    title: string;
    location?: string;
    date: string;
    image: string;
  }[];
  viewType: "upcoming" | "past_limited" | "past_full";
  privateView?: boolean;
}

export default function EventSection({
  events = [],
  viewType,
  privateView = false,
}: EventSectionProps) {
  const [showAllPast, setShowAllPast] = useState(viewType === "past_full");

  const sectionTitle =
    viewType === "upcoming" ? "Upcoming Events" : "Past Events";

  // Ensure state updates correctly when toggling between views
  const displayedEvents =
    viewType === "past_limited" && !showAllPast ? events.slice(0, 3) : events;

  return (
    <section className="container mx-auto p-6">
      <h2>{sectionTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {displayedEvents.map((event) => (
          <EventCard key={event.id} event={event} privateView={privateView} />
        ))}
      </div>

      {viewType === "past_limited" && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAllPast((prev) => !prev)}
            className="btn mt-4"
          >
            {showAllPast ? "Show Less" : "See All Past Events"}
          </button>
        </div>
      )}
    </section>
  );
}
