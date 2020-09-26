import React from "react";

import dampsoftLogo from "../../assets/Dampsoft-Logo.jpg";
import { Nav } from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <img src={dampsoftLogo} alt="Dampsoft Logo" />
    </Nav>
  );
};

export default Navbar;
