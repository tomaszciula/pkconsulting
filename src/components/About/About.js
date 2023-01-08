import React from "react";
import {
  AboutUs,
  AboutWrapper,
  Block1Wrapper,
  DescriptionWrapper,
  LeftColumnWrapper,
  Line,
  LogoWrapper,
  RightColumnWrapper,
  SectionFirstInnerContentWrapper,
  SectionFirstInnerWrapper,
  SectionFirstWrapper,
  SectionSecondWrapper,
  SectionThirdContentWrapper,
  SectionThirdWrapper,
  TextBlock,
  TextWrapper,
  TringleBackground,
} from "./About.styled";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";
import me from "../../assets/3-1463x2048.png";
import RightTopCorner from "../LandingPage/RightTopCorner";

const About = () => {
  return (

    <AboutWrapper>
      <RightTopCorner />
      <SectionFirstWrapper>
        <SectionFirstInnerWrapper>
          <SectionFirstInnerContentWrapper>
            <LogoWrapper>
              <Link to="/">
                <img src={logo} alt="logo" style={{ width: "200px" }} />
              </Link>
              <DescriptionWrapper>
                <h1>KIM JESTEŚMY?</h1>
                <Line />
                <TextBlock>
                  P.K. Consulting od 2015 r konsultuje strategie biznesowe dla
                  firm oraz buduje ich wizerunek . Zajmuję się najtrudniejszymi
                  kwestiami dla przedsiębiorców. Realizuję szeroko pojęty
                  marketing internetowy dla swoich Klientów.
                </TextBlock>
                <a href="/contact" target="_self">
                  POZNAJ NASZĄ OFERTĘ
                </a>
              </DescriptionWrapper>
            </LogoWrapper>
          </SectionFirstInnerContentWrapper>
        </SectionFirstInnerWrapper>
      </SectionFirstWrapper>
      <SectionSecondWrapper>
        <AboutWrapper>
          <AboutUs>O NAS</AboutUs>
          <h2>POZNAJMY SIĘ</h2>
          <Line />
        </AboutWrapper>

        <TringleBackground/>
      </SectionSecondWrapper>
      <SectionThirdWrapper>
        <SectionThirdContentWrapper>
          <Block1Wrapper>
            <LeftColumnWrapper>
              <h3>SATYSFAKCJA</h3>
              <TextWrapper>
                Wiemy, że o istnieniu firmy decydują nasi Klienci.{" "}
                Naszym priorytetem jest zapewnienie satysfakcji.
              </TextWrapper>
            </LeftColumnWrapper>
            <RightColumnWrapper>
              <img src={me} alt="my photo" />
            </RightColumnWrapper>
          </Block1Wrapper>
        </SectionThirdContentWrapper>
      </SectionThirdWrapper>
    </AboutWrapper>

  );
};

export default About;
