import Navbar from "../../components/layout/navBar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Welcome to Movie Club 🎬</h1>
        <p className="text-gray-600">
          Your activity feed will be displayed here.
        </p>
      </div>
    </div>
  );
}
