import React from "react";
import logo from "./../../assets/logo2.png";
import { LogoWrapper } from "./LandingPage.styled";

const Logo = () => {
  return (
      <LogoWrapper>
        <img src={logo} alt="logo" />
      </LogoWrapper>
  );
};

export default Logo;
