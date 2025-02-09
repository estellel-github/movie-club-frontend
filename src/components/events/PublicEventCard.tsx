interface PublicEventCardProps {
  event: {
    id: string;
    title: string;
    date: string;
    image: string;
  };
}

export default function PublicEventCard({ event }: PublicEventCardProps) {
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
      </div>
    </div>
  );
}
