import React from "react";
import {
  MainMenuList,
  MainMenuListElement,
  NavigationMenuWrapper,
  NavigationPageFooter,
  NavigationPageWrapper,
  TelefonWrapper,
} from "./NavigationPage.styled";
import logo from "./../../assets/logo2.png";
import RightTopCorner from "../LandingPage/RightTopCorner";

const NavigationPage = (props) => {
  return (
    <NavigationPageWrapper>
            <RightTopCorner menu={props.menu} setMenu={props.setMenu} />
      <img src={logo} alt="logo" />
      <NavigationMenuWrapper>
        <MainMenuList>
          <MainMenuListElement>
            <a href="https://pkconsulting.pl/" aria-current="page">
              O mnie
            </a>
          </MainMenuListElement>
          <MainMenuListElement>
            <a href="https://pkconsulting.pl/oferta/" aria-current="page">
              Oferta
            </a>
          </MainMenuListElement>
          <MainMenuListElement>
            <a href="https://pkconsulting.pl/o-nas/" aria-current="page">
              Kim jesteśmy
            </a>
          </MainMenuListElement>
          <MainMenuListElement>
            <a href="https://pkconsulting.pl/" aria-current="page">
              Realizacje
            </a>
          </MainMenuListElement>
          <MainMenuListElement>
            <a href="https://pkconsulting.pl/kontakt/" aria-current="page">
              Kontakt
            </a>
          </MainMenuListElement>
        </MainMenuList>
        <NavigationPageFooter>
          <TelefonWrapper>
            <div style={{ color: "#ffffff", fontSize: "16px" }}>Zadzwoń:</div>
            <a
              href="tel:505146677"
              target="_self"
              style={{ color: "#12fbd0", fontSize: "16px", marginLeft: "5px", textDecoration: 'none', display: 'inline-block' }}
            >
              +48 505146677
            </a>
          </TelefonWrapper>
        </NavigationPageFooter>
      </NavigationMenuWrapper>
    </NavigationPageWrapper>
  );
};

export default NavigationPage;
