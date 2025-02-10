interface HeroProps {
  imgPath: string;
  title: string;
}

export default function Hero({ imgPath, title }: HeroProps) {
  const altText = title + " Hero Image";
  return (
    <div className="relative w-full border-b-2 border-b-stone-800 mb-4">
      <img
        src={imgPath}
        className="opacity-50 w-full h-52 object-cover"
        alt={altText}
      />
      <h1 className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-neutral-200">
        {title}
      </h1>
    </div>
  );
}
