import React from "react";
import Navbar from "../Sections/Navbar";
import Tagline from "../Sections/Tagline";
import Freeoffers from "../Sections/Freeoffers";
import Bottom from "../Sections/Bottom";

function Home() {
  return (<>
    <Navbar/>
    <Tagline/>
    <Freeoffers/>
    <Bottom />
    </>
  );
}

export default Home;

