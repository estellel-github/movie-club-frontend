import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Moves the viewport to the top
  }, [pathname]); // Runs whenever the route changes

  return null;
}
