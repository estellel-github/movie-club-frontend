import PublicEventCard from "@/components/events/PublicEventCard";

interface UpcomingPublicEventsProps {
  events: {
    id: string;
    title: string;
    date: string;
    image: string;
  }[];
}

export default function UpcomingPublicEvents({
  events,
}: UpcomingPublicEventsProps) {
  return (
    <section className="container mx-auto p-6">
      <h2>Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {events.map((event) => (
          <PublicEventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
