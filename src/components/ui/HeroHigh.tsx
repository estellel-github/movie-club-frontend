interface HeroProps {
  imgPath: string;
  title: string;
}

export default function Hero({ imgPath, title }: HeroProps) {
  const altText = title + " Hero Image";
  return (
    <div className="relative w-full border-b-2 border-b-stone-800 mb-4">
      <img src={imgPath} className="w-full h-104 object-cover" alt={altText} />
      <h1 className="absolute inset-0 flex text-6xl mt-16 justify-center text-center text-neutral-100">
        {title}
      </h1>
    </div>
  );
}
