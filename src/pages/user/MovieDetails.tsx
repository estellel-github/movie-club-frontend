import InfoBlock from "@/components/ui/InfoBlock";
import Banner from "@/components/ui/Banner";
import { Link, useParams } from "react-router-dom";
import HeroHigh from "@/components/ui/HeroHigh";

interface MovieInfo {
  id: string;
  title: string;
  backgroundImage: string;
  description: string;
  director: string;
  releaseYear: number;
  country: string;
  avgScore: string;
  trailerLink: string;
  tmdbLink: string;
  relatedEvents?: {
    id: string;
    title: string;
    location: string;
    date: string;
    image: string;
  }[];
}

export default function SingleMovie() {
  const { movieId } = useParams<{ movieId: string }>();

  if (!movieId) {
    return null; // Prevent rendering while redirecting
  }

  // MOCK DATA - REPLACE WITH API CALL

  const movie: MovieInfo = {
    id: movieId,
    title: "The Substance",
    backgroundImage: "/images/thesubstance.png",
    description:
      "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
    director: "Coralie Fargeat",
    releaseYear: 2024,
    country: "France",
    avgScore: "71%",
    trailerLink: "https://www.youtube.com/watch?v=trailer123",
    tmdbLink: "https://www.themoviedb.org/movie/123456",
    relatedEvents: [
      {
        id: "december-movie-2",
        title: "December Movie #2 - The Substance",
        location: "Babylon Kreuzberg, Dresdener Straße 126, 10999 Berlin",
        date: "Dec 13 2024 - 19:00",
        image: "/images/event-substance.jpg",
      },
    ],
  };

  return (
    <>
      <HeroHigh imgPath={movie.backgroundImage} title={movie.title} />

      <section className="container mx-auto p-6 bg-stone-800 rounded-lg">
        <h2 className="font-bold text-xl">
          If you follow the instructions, what could go wrong?
        </h2>
        <p className="mt-2 text-gray-300">{movie.description}</p>
        <div className="mt-4">
          <p>
            <span className="font-bold">Director:</span> {movie.director}
          </p>
          <p>
            <span className="font-bold">Release Year:</span> {movie.releaseYear}
          </p>
          <p>
            <span className="font-bold">Country:</span> {movie.country}
          </p>
          <p>
            <span className="font-bold">Average Score (TMDB):</span>{" "}
            {movie.avgScore}
          </p>
        </div>
        <div className="mt-4">
          <Link to={movie.trailerLink} className="btn btn-warning mr-2">
            🎥 Watch the Trailer
          </Link>
          <Link
            to={movie.tmdbLink}
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↗ More Info on TMDB
          </Link>
        </div>
      </section>

      <section className="container mx-auto p-6">
        <h2>Related Events</h2>
        {movie.relatedEvents && movie.relatedEvents.length > 0 ? (
          movie.relatedEvents.map((event) => (
            <div
              key={event.id}
              className="card card-side bg-stone-800 shadow-lg"
            >
              <figure>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full rounded-lg"
                />
              </figure>
              <div className="card-body">
                <div className="card-title">{event.title}</div>
                <p>{event.location}</p>
                <p>{event.date}</p>
                <div className="card-actions">
                  <Link
                    to={`/events/${event.id}`}
                    className="btn btn-warning mt-2"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No related events.</p>
        )}
      </section>

      <InfoBlock
        title="Want to Suggest a Movie or Location?"
        text="Have a favorite film you’d love to watch with the club? Know a great venue for our next screening?"
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      <Banner
        imgPath="/images/taperolls.png"
        title="Check Out Our Movie Index"
        linkPath="/movies"
        buttonText="See All Movies"
      />
    </>
  );
}
