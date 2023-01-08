import React from "react";
import {
  ContactContentWrapper,
  ContactDescriptionWrapper,
  ContactLine,
  ContactLogoWrapper,
  ContactSectionFirstContentWrapper,
  ContactTextDescription,
  ContactWrapper,
  SectionFirstWrapper,
} from "./Contact.styled";
import logo from "../../assets/logo2.png";
import RightTopCorner from "../LandingPage/RightTopCorner";

const Contact = (props) => {
  return (
    <ContactWrapper>
      <RightTopCorner menu={props.menu} setMenu={props.setMenu} />
      <SectionFirstWrapper>
        <ContactSectionFirstContentWrapper>
          <ContactContentWrapper>
            <ContactLogoWrapper>
              <a href="/" target="_self">
                <img src={logo} alt />
              </a>
            </ContactLogoWrapper>
            <ContactDescriptionWrapper>
              <h1>KONTAKT</h1>
              <ContactLine />
              <ContactTextDescription>
                Zapytaj o bezpłatną konsultację i analizę Twojego biznesu.
                Sprawdź co możemy dla Ciebie zrobić.
              </ContactTextDescription>
              <a href="/contact">NAPISZ DO MNIE</a>
            </ContactDescriptionWrapper>
          </ContactContentWrapper>
        </ContactSectionFirstContentWrapper>
      </SectionFirstWrapper>
    </ContactWrapper>
  );
};

export default Contact;
