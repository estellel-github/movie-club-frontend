import Banner from "@/components/ui/Banner";
import EventCard from "../../components/events/EventCard";
import { Link } from "react-router-dom";
import UpcomingPublicEvents from "@/components/events/UpcomingPublicEvents";

export default function Landing() {
  // Mock event data (replace with API call later)
  const upcomingPublicEvents = [
    {
      id: "1",
      title: "February Movie #1 - Babygirl",
      date: "Feb. 15, 2025 - 19:00",
      location: "Babylon Kreuzberg, Dresden Str. 126, Berlin",
      image: "/images/babygirl.jpg",
    },
    {
      id: "2",
      title: "February Movie #2 - Wicked",
      date: "Feb. 22, 2025 - 19:00",
      location: "Babylon Kreuzberg, Dresden Str. 126, Berlin",
      image: "/images/wicked.jpg",
    },
    {
      id: "3",
      title: "February Movie #3 - The Brutalist",
      date: "Feb. 28, 2025 - 19:00",
      location: "Filmtheater am Friedrichshain, Berlin",
      image: "/images/brutalist.jpg",
    },
  ];

  return (
    <>
      {/* Landing Hero Section */}
      <img src={"/images/cinema.png"}></img>
      <div className="text-center bg-linear-to-r from-neutral-950 to-gray-800 p-8">
        <div className="text-3xl sm:text-5xl font-bold">
          Watch. Talk. Share.
        </div>
        <div className="text-4xl sm:text-6xl font-bold text-yellow-400 mt-2">
          Berlin Movie Club
        </div>
      </div>

      {/* About Section */}
      <section className="container mx-auto mt-4 p-6">
        <h2>Welcome to the Berlin Movie Club!</h2>
        <div className="bg-stone-800 p-6 rounded-lg mt-4 text-lg">
          <p>
            Love movies? So do we! The Berlin Movie Club is a community of film
            lovers who meet regularly to watch and discuss movies—whether at the
            cinema, cozy venues, or unique locations around the city. Join us
            for our next movie night!
          </p>
          {/* <Link to="/about" className="btn btn-warning mt-4">
            Read More
          </Link> */}
        </div>
      </section>

      <UpcomingPublicEvents events={upcomingPublicEvents} />

      <Banner
        imgPath="/images/events.png"
        title="All Events"
        linkPath="/events"
        buttonText="See All Events"
      />

      <Banner
        imgPath="/images/signup.png"
        title="Interested in Joining?"
        linkPath="/signup"
        buttonText="Sign Up"
      />

      <Banner
        imgPath="/images/contact.png"
        title="Any Questions?"
        linkPath="/contact"
        buttonText="Contact Us"
      />
    </>
  );
}
