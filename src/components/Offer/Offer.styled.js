import styled from "styled-components";
import arrow from "./../../assets/arrow.png";

export const OfferWrapper = styled.div`
  width: 100%;
`;
export const SectionFirstWrapper = styled.section`
  background-size: cover;
  background-attachment: fixed;
  background-color: rgba(21, 35, 57, 0.8);
  position: relative;
  background-repeat: repeat;
`;
export const SectionFirstInnerWrapper = styled.div`
  padding-bottom: 30%;
  flex-direction: unset;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* padding-top: 75px;
  padding-right: 20px;
  padding-bottom: 75px;
  padding-left: 20px; */
  margin-left: auto;
  margin-right: auto;
  height: 100%;
`;
export const SectionFirstInnerContent = styled.div`
  width: 100%;
  /* margin-top: 50px; */
  flex-direction: row;
  display: flex;
  align-items: flex-start;
  z-index: 3;
  flex-wrap: wrap;
  position: relative;
  /* background-image: url(${arrow}); */
`;
export const ArrowElement = styled.div`
  /* background-image: url(${arrow}); */
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  flex-direction: unset;
  display: none;
  background-position: center center;
`;
export const DescriptionAndSocialWrapper = styled.div`
  width: 80%;
  margin-top: 50px;
  flex-direction: row;
  display: flex;
  align-items: flex-start;
  z-index: 3;
  flex-wrap: wrap;
  position: absolute;
`;
export const DescriptionWrapper = styled.div`
  width: 50%;
  align-items: flex-start;
  text-align: left;
  z-index: 3;
  margin-top: 30px;
  color: white;
  position: relative;
  left: 100px;
`;
export const TextOffer = styled.h1`
  /* font-family: "Montserrat"; */
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 5px;
  text-shadow: 2px 2px 4px #000000;
`;
export const Line = styled.div`
  width: 78px;
  border-bottom-color: #12fbd0;
  border-bottom-width: 7px;
  border-bottom-style: solid;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
`;
export const TextDescription = styled.div`
  font-family: Verdana, Geneva, sans-serif;
  font-size: 16px;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 75%;
  text-shadow: 2px 2px 4px #000000;
  text-align: justify;
`;
export const SectionSecondWrapper = styled.section`
  position: relative;
  &::before {
    content: "";
    /* position: absolute; */
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    z-index: 0;
    transform: skewY(15deg);
  }
`;
export const SectionSecondInnerWrapper = styled.div`
  padding-top: 75px;
  padding-right: 20px;
  padding-bottom: 75px;
  padding-left: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  isplay: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const ElementWrapper = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
`;
export const LeftColumnWrapper = styled.div`
  width: 66.66%;
  justify-content: center;
  padding-right: 40px;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;
`;
export const Line1 = styled.div`
  width: 120px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #12fbd0;
  height: 2px;
  margin-bottom: 15px;
`;
export const TextHeader = styled.h4`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  text-align: justify;
`;
export const AnchorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  a {
    color: white;
    text-decoration: none;
  }
`;
export const OfferButton = styled.div`
  width: 100%;
  align-items: center;
  text-align: center;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  a {
    margin-top: 35px;
    margin-bottom: 35px;
    /* font-family: "Montserrat"; */
    font-size: 19px;
    font-weight: 700;
    border-radius: 0px;
    background-color: #12fbd0;
    border: 1px solid #12fbd0;
    color: #152339;
    padding: 10px 16px;
    transition: 0.3s;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }
`;
export const FooterWrapper = styled.footer`
  background-color: #152339;
  position: relative;
  width: 100%;
  background-size: cover;
  background-repeat: repeat;
`;
export const FooterContentWrapper = styled.div`
  /* padding-top: 75px;
  padding-right: 20px;
  padding-bottom: 75px;
  padding-left: 20px; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  max-width: 1060px;
`;
export const FooterContactWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  flex-wrap: nowrap;
`;
export const Telefon = styled.div`
  width: auto;
  align-items: flex-end;
  text-align: right;
  display: flex;
  flex-wrap: nowrap;
  /* flex-direction: column; */
    a {
    margin-top: 35px;
    margin-bottom: 35px;
    /* font-family: "Montserrat"; */
    font-size: 19px;
    font-weight: 700;
    border-radius: 0px;
    background-color: #12fbd0;
    border: 1px solid #12fbd0;
    color: #152339;
    padding: 10px 16px;
    transition: 0.3s;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }
`;
export const Between = styled.div`
  width: 187px;
  border-bottom-color: #12fbd0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  padding-left: 0px;
  padding-right: 0px;
  margin-left: 45px;
  margin-right: 45px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;
`;
