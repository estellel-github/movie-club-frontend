import Hero from "@/components/ui/Hero";
import Banner from "@/components/ui/Banner";
import EventSection from "@/components/events/EventSection";
import { pastEvents, upcomingEvents } from "@/utils/mockData";

export default function PublicEvents() {
  // REPLACE MOCK DATA WITH API CALL

  return (
    <>
      <Hero imgPath="/images/events.png" title="Our Events" />

      <EventSection
        events={upcomingEvents}
        viewType="upcoming"
        privateView={false}
      />

      <Banner
        imgPath="/images/signup.png"
        title="Interested in Joining?"
        linkPath="/signup"
        buttonText="Sign Up"
      />

      <EventSection
        events={pastEvents}
        viewType="past_limited"
        privateView={false}
      />
    </>
  );
}
