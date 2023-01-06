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

const LandingPage = (props) => {
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
      <RightTopCorner menu={props.menu} setMenu={props.setMenu} />
      <Logo />
    </Wrapper>
  );
};

export default LandingPage;
