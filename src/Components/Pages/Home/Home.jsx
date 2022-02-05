import React from "react";
import "./Home.css";
import { Nav } from "../../Nav-Bar Component/Nav";
import Hero from "../../Hero-Section Component/Hero";
import SubHero from "../../Sub-Hero Component/SubHero";

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <SubHero />
    </>
  );
}

export default Home;
