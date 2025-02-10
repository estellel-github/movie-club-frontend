import { useParams } from "react-router-dom";
import InfoBlock from "@/components/ui/InfoBlock";
import RSVPBlock from "@/components/events/RSVPBlock";
import AttendeeList from "@/components/events/AttendeeList";
import CommentsSection from "@/components/events/CommentsSection";
import { useState } from "react";
import HeroHigh from "@/components/ui/HeroHigh";

export default function SingleEvent() {
  const { eventId } = useParams();

  // Mock Data (Replace with API call later)
  const event = {
    id: eventId,
    title: "February Movie #3 - The Brutalist",
    date: "Feb. 28 2025 - 19:00",
    location: "Filmtheater am Friedrichshain, Bötzowstraße 1-5, 10407 Berlin",
    image: "/images/thebrutalist.png",
    movieId: 1,
    host: "Jane",
    isEventInPast: false,
    details:
      "For our 3rd meetup in February, we will go to Filmtheater am Friedrichshain to watch The Brutalist. Let's meet in front of the cinema at 18:45! Afterwards we will head for drinks and have our usual discussion at a nearby bar - location TBD. Stay tuned!",
    maxAttendees: 6,
    attendees: [
      { id: "1", name: "Jane", image: "/images/avatar.png", isHost: true },
      { id: "2", name: "Peter", image: "/images/avatar.png" },
      { id: "3", name: "Marc", image: "/images/avatar.png" },
      { id: "4", name: "Maria", image: "/images/avatar.png" },
      { id: "5", name: "Chris", image: "/images/avatar.png" },
      { id: "6", name: "Julie", image: "/images/avatar.png" },
    ],
    waitlist: [
      { id: "7", name: "Diego", image: "/images/avatar.png" },
      { id: "8", name: "Hanah", image: "/images/avatar.png" },
      { id: "9", name: "Salma", image: "/images/avatar.png" },
    ],
    userRSVP: "Not Going",
  };

  const comments = [
    {
      id: "1",
      user: "Jane",
      text: "Looking forward to the movie and hosting the discussion! See you there!",
      date: "Feb 7, 2025 at 13:45",
      isHost: true,
    },
    {
      id: "2",
      user: "Ann",
      text: "Can't make it this time 😆 Have a great time, everyone 🎉",
      date: "Feb 8, 2025 at 13:45",
      isHost: false,
    },
    {
      id: "3",
      user: "Chris",
      text: "Will only join the discussion since I already saw the movie today. See you then",
      date: "Feb 12, 2025 at 13:45",
      isHost: false,
    },
  ];

  // States
  const [userRSVPStatus, setUserRSVPStatus] = useState(event.userRSVP);

  // Handle RSVP Change
  const handleRSVPChange = (newStatus: string) => {
    setUserRSVPStatus(newStatus);
  };

  return (
    <>
      <HeroHigh imgPath={event.image} title={event.title} />

      {/* Event Details */}
      <section className="container mx-auto p-6 grid md:grid-cols-3 gap-6">
        <div className="bg-yellow-500 p-6 rounded-lg text-stone-800">
          <h3 className="text-lg font-bold">Hosted By</h3>
          <p>{event.host}</p>
          <h3 className="text-lg font-bold mt-4">Date/Time</h3>
          <p>{event.date}</p>
          <h3 className="text-lg font-bold mt-4">Location</h3>
          <p>{event.location}</p>
        </div>
        <div className="md:col-span-2 bg-stone-800 p-6 rounded-lg text-lg">
          <p>{event.details}</p>
        </div>
      </section>

      {/* Movie Info */}
      <InfoBlock
        title="See Movie Info"
        text="Click below to see more details about this movie."
        buttonText="See Movie Info"
        buttonLink={`/movies/${event.movieId}`} // RECHECK / REPLACE IF NEEDED
      />

      {/* RSVP Section */}
      <RSVPBlock
        userRSVPStatus={event.userRSVP}
        onRSVPChange={handleRSVPChange}
        isEventInPast={event.isEventInPast}
      />

      {/* Attendee List */}
      <AttendeeList
        maxAttendees={event.maxAttendees}
        attendees={event.attendees}
        waitlist={event.waitlist}
      />

      {/* Comments Section */}
      <CommentsSection comments={comments} />
    </>
  );
}
