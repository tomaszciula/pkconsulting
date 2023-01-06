import React from "react";
import {
  HamburgerMenuWrapper,
  NavIconWrapper,
  RightTopCornerWrapper,
} from "./LandingPage.styled";
import menuh from "../../assets/menu.png";
import menux from '../../assets/menu-x.png'

const RightTopCorner = (props) => {
  return (
    <RightTopCornerWrapper>
      <HamburgerMenuWrapper>
        <NavIconWrapper onClick={() => props.setMenu(!props.menu)}>
          { props.menu ?  (<img src={menuh} alt="hamburger menu" />) : (<img src={menux} alt="hamburger menu" />) }
        </NavIconWrapper>
      </HamburgerMenuWrapper>
    </RightTopCornerWrapper>
  );
};

export default RightTopCorner;
