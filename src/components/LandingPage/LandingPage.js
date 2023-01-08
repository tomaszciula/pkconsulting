import React from "react";
import {
  Block512,
  Drop,
  Drop2,
  InnerWrapper,
  Ocean,
  Social,
  Top1Wrapper,
  TriangleBox,
  Wave,
  Wrapper,
} from "./LandingPage.styled";
import Logo from "./Logo";
import RightTopCorner from "./RightTopCorner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingPage = (props) => {
  return (
    <Top1Wrapper>
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
        <Social>
          <a
            id="link-527-15"
            href="https://www.facebook.com/Getknow-103860504696287/?modal=admin_todo_tour"
            target="_blank"
          >
            <div id="fancy_icon-526-15" >
            {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
              {/* <svg id="svg-fancy_icon-526-15">
                <use xlinkHref="#FontAwesomeicon-facebook"></use>
              </svg> */}
            </div>
          </a>
        </Social>
      </Wrapper>
    </Top1Wrapper>
  );
};

export default LandingPage;
