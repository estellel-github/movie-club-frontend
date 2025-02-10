import Hero from "@/components/ui/Hero";
import InfoBlock from "@/components/ui/InfoBlock";
import EventSection from "@/components/events/EventSection";
import { upcomingEvents, pastEvents } from "@/utils/mockData";

export default function Events() {
  // REPLACE MOCK DATA WITH API CALL

  return (
    <>
      <Hero imgPath="/images/events.png" title="Our Events" />

      <EventSection
        events={upcomingEvents}
        viewType="upcoming"
        privateView={true}
      />

      <InfoBlock
        title="Want to be an event host?"
        text="Passionate about movies and organizing events? Become a host and help shape our movie nights! As a host, you can select films, coordinate screenings, and lead discussions with fellow cinephiles."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      <EventSection
        events={pastEvents}
        viewType="past_limited"
        privateView={true}
      />
    </>
  );
}
