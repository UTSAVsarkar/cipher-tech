import React from "react";
import CustomCarousel from "../CustomCarousel/CustomCarousel";
import CustomCards from "../CustomCards/CustomCards";
import About from "../About/About";
import "bootstrap/dist/css/bootstrap.min.css";

function Home({ setCurrPage, currPage }) {
  return (
    <>
      <CustomCarousel />
      <About setCurrPage={setCurrPage} currPage={currPage} />
      <CustomCards />
    </>
  );
}

export default Home;
