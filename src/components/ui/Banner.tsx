import { Link } from "react-router-dom";

interface BannerProps {
  imgPath: string;
  title: string;
  linkPath: string;
  buttonText: string;
}

export default function Banner({
  imgPath,
  title,
  linkPath,
  buttonText,
}: BannerProps) {
  const altText = title + " Banner Image";
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="relative w-full max-w-3xl mx-auto mt-4 flex items-center justify-center">
        <img
          src={imgPath}
          alt={altText}
          className="rounded-lg shadow-lg w-full"
        />
        <Link
          to={linkPath}
          className="btn btn-warning absolute flex items-center justify-center px-6 py-3 text-lg rounded-lg"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
