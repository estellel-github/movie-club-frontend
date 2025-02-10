import { Link } from "react-router-dom";

interface InfoBlockProps {
  title: string;
  text: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function InfoBlock({
  title,
  text,
  buttonText,
  buttonLink,
}: InfoBlockProps) {
  return (
    <section className="container mx-auto mt-4 p-6">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="bg-stone-800 p-6 rounded-lg mt-4 text-lg">
        <p>{text}</p>
        {buttonText && buttonLink && (
          <Link to={buttonLink} className="btn btn-warning mt-4">
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}
