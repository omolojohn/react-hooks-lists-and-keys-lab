import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a href="#home">home</a>
    <a href="#about">about</a>
    <a href="#project">project</a>
  </nav>;
}

export default NavBar;
