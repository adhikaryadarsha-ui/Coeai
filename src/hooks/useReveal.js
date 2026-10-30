import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useReveal() {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal:not(.is-visible)"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname]);

}

export default useReveal;