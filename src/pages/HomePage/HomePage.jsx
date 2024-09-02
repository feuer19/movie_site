import React, { useEffect, useState } from "react";
import HomePageBanner from "./components/HomepageBanner";
import PopularMovieSlider from "./components/PopularMovieSlider";
import TopRatedMovieSlider from "./components/TopRatedMovieSlider";
import UpcomingMovieSlider from "./components/UpcomingMovieSlider";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  return (
    <div>
      <HomePageBanner />
      <div className={isMobile ? "px-3" : "px-5"}>
        <PopularMovieSlider />
        <TopRatedMovieSlider />
        <UpcomingMovieSlider />
      </div>
    </div>
  );
};

export default HomePage;
