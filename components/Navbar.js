import React from "react";
import Link from "next/link";

const Navbar = () => {
  const styles = {
    background: "gray",
    padding: "1rem",
  };
  return (
    <div style={styles}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      {/* <Link>Contact</Link> */}
    </div>
  );
};

export default Navbar;
