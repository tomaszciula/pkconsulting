import React from "react";
import {
  Drop,
  Drop2,
  Ocean,
  TriangleBox,
  Wave,
  Wrapper,
} from "./LandingPage.styled";
import Logo from "./Logo";
import RightTopCorner from "./RightTopCorner";

const LandingPage = () => {
  return (
    <Wrapper>
      <TriangleBox>
        <Ocean>
          <Wave />
          <Wave />
        </Ocean>
      </TriangleBox>
      <Drop />
      <Drop2 />
      <RightTopCorner />
      <Logo />
    </Wrapper>
  );
};

export default LandingPage;
