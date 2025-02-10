import { useState } from "react";
import Hero from "@/components/ui/Hero";
import Banner from "@/components/ui/Banner";
import { useAuthStore } from "../../store/authStore";
import InfoBlock from "@/components/ui/InfoBlock";

export default function Home() {
  const [showAllActivity, setShowAllActivity] = useState(false);

  // Mock activity data (replace with API calls later)
  const activities = [
    { user: "John Doe", action: "joined the club", time: "1 day ago" },
    {
      user: "Emma Smith",
      action: "created a new event: Classic Movie Night - Casablanca",
      time: "2 days ago",
    },
    {
      user: "David Johnson",
      action: 'updated the event "Horror Marathon" (New time: 8 PM)',
      time: "2 days ago",
    },
    {
      user: "Michael Brown",
      action: 'RSVP’d to "90s Movie Trivia Night"',
      time: "3 days ago",
    },
    {
      user: "Chris Miller",
      action: 'commented on "Film Noir Discussion"',
      time: "3 days ago",
    },
    {
      user: "Isabella Anderson",
      action: 'added a new movie to the collection: "Blade Runner 2049"',
      time: "3 days ago",
    },
    {
      user: "Ethan Martinez",
      action: 'edited the details for "Action Movie Night"',
      time: "4 days ago",
    },
  ];

  const username = useAuthStore((state) => state.user?.username || "Guest");

  return (
    <>
      <Hero imgPath="/images/cinema.png" title={`Hi, ${username}! 👋`} />

      <Banner
        imgPath="/images/events.png"
        title="Join an Event"
        linkPath="/events"
        buttonText="See All Events"
      />

      <Banner
        imgPath="/images/taperolls.png"
        title="Check Out Our Movie Index"
        linkPath="/movies"
        buttonText="See All Movies"
      />

      <InfoBlock
        title="Want to Suggest a Movie or Location?"
        text="Have a favorite film you’d love to watch and discuss with the club? Know a great venue for our next screening?
        We’re always open to new ideas! 
        Whether it’s a cult classic, a hidden indie gem, or a unique location, we’d love to hear your suggestions."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* Recent Activity Section */}
      <section className="container mx-auto p-6">
        <h2>Recent Activity</h2>
        <div className="bg-stone-800 p-6 rounded-lg shadow-lg mt-4">
          {activities
            .slice(0, showAllActivity ? activities.length : 5)
            .map((activity, index) => (
              <p
                key={index}
                className="py-2 border-b border-stone-700 last:border-none"
              >
                <strong>{activity.user}</strong> {activity.action} ·{" "}
                <span className="text-gray-400">{activity.time}</span>
              </p>
            ))}
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAllActivity(!showAllActivity)}
            className="btn btn-warning mt-4"
          >
            {showAllActivity ? "Show Less" : "See All Activity"}
          </button>
        </div>
      </section>
    </>
  );
}
