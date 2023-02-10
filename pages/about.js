import Link  from "next/link";
import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      {/* <Navbar/> */}
      This is a about page <br />
      <Link href="/">Home</Link>
    </div>
  );
};

export default About;
