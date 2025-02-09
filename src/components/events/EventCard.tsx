// import { Link } from "react-router-dom";

export default function EventCard({ event }: { event: any }) {
  return (
    <div className="card bg-stone-800 shadow-lg">
      <figure>
        <img
          src={event.image}
          alt={event.title}
          className="w-full min-h-52 object-cover"
        />
      </figure>
      <div className="card-body p-3">
        <div className="card-title font-bold">{event.title}</div>
        <p>{event.date}</p>
        {/* <p className="text-sm text-gray-400">{event.location}</p> */}
        {/* <Link to={`/events/${event.id}`} className="btn btn-warning">
          Read More & RSVP
        </Link> */}
      </div>
    </div>
  );
}
