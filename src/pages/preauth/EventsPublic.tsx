import { useState } from "react";
import EventCard from "@/components/events/EventCard";
import Hero from "@/components/ui/Hero";
import Banner from "@/components/ui/Banner";
import UpcomingPublicEvents from "@/components/events/UpcomingPublicEvents";

export default function PublicEvents() {
  const [showAllPast, setShowAllPast] = useState(false);

  // Mock Data (Replace with API response later)
  const upcomingPublicEvents = [
    {
      id: "1",
      title: "February Movie #1 - Babygirl",
      date: "Feb. 15 2025 - 19:00",
      image: "/images/event1.jpg",
    },
    {
      id: "2",
      title: "February Movie #2 - Wicked",
      date: "Feb. 22 2025 - 19:00",
      image: "/images/event2.jpg",
    },
    {
      id: "3",
      title: "February Movie #3 - The Brutalist",
      date: "Feb. 28 2025 - 19:00",
      image: "/images/event3.jpg",
    },
  ];

  const pastEvents = [
    {
      id: "4",
      title: "January Movie #3 - The Outrun",
      date: "Jan. 28 2025 - 19:00",
      image: "/images/event4.jpg",
    },
    {
      id: "5",
      title: "January Movie #2 - Queer",
      date: "Jan. 22 2025 - 19:00",
      image: "/images/event5.jpg",
    },
    {
      id: "6",
      title: "January Movie #1 - Nosferatu",
      date: "Jan. 15 2025 - 19:00",
      image: "/images/event6.jpg",
    },
    {
      id: "7",
      title: "December Movie #3 - The Last of the Sea Women",
      date: "Dec. 20 2024 - 19:00",
      image: "/images/event7.jpg",
    },
    {
      id: "8",
      title: "December Movie #2 - The Substance",
      date: "Dec. 13 2024 - 19:00",
      image: "/images/event8.jpg",
    },
    {
      id: "9",
      title: "December Movie #1 - The Wild Robot",
      date: "Dec. 3 2024 - 19:00",
      image: "/images/event9.jpg",
    },
  ];

  return (
    <>
      <Hero imgPath="/images/events.png" title="Our Events" />

      <UpcomingPublicEvents events={upcomingPublicEvents} />

      <Banner
        imgPath="/images/signup.png"
        title="Interested in Joining?"
        linkPath="/signup"
        buttonText="Sign Up"
      />

      {/* Past Events */}
      <section className="container mx-auto p-6">
        <h2>Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {pastEvents
            .slice(0, showAllPast ? pastEvents.length : 3)
            .map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
        </div>
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAllPast(!showAllPast)}
            className="btn btn-warning mt-4"
          >
            {showAllPast ? "Show Less" : "See All Past Events"}
          </button>
        </div>
      </section>
    </>
  );
}
