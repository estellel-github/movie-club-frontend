import Banner from "@/components/ui/Banner";
import InfoBlock from "@/components/ui/InfoBlock";
import EventSection from "@/components/events/EventSection";
import { upcomingEvents } from "@/utils/mockData";

export default function Landing() {
  // REPLACE MOCK DATA WITH API CALL

  return (
    <>
      <img src={"/images/cinema.png"}></img>
      <div className="text-center bg-linear-to-r from-neutral-950 to-gray-800 p-8">
        <div className="text-3xl sm:text-5xl font-bold">
          Watch. Talk. Share.
        </div>
        <div className="text-4xl sm:text-6xl font-bold text-yellow-400 mt-2">
          Berlin Movie Club
        </div>
      </div>
      <InfoBlock
        title="Welcome to the Berlin Movie Club!"
        text="Love movies? So do we! The Berlin Movie Club is a community of film lovers who meet regularly to watch and discuss movies—whether at the cinema, cozy venues, or unique locations around the city. Join us for our next movie night!"
      />
      <EventSection
        events={upcomingEvents}
        viewType="upcoming"
        privateView={false}
      />
      <Banner
        imgPath="/images/events.png"
        title="All Events"
        linkPath="/events-public"
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
