import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Layout() {
  return (
    <div className="bg-neutral-900 text-neutral-200 max-w-4xl border-l-2 border-r-2 border-stone-800 min-h-screen flex flex-col">
      <Header />
      <main className="w-full flex-grow container mx-auto flex flex-col">
        <Outlet /> {/* This is where each page’s content will be injected */}
      </main>
      <Footer />
    </div>
  );
}
