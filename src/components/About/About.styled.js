import styled from "styled-components";
import bg from "./../../assets/about-bg.jpeg";

export const AboutWrapper = styled.div`
  width: 100vw;
`;
export const SectionFirstWrapper = styled.section`
  background-image: linear-gradient(
      rgba(21, 35, 57, 0.8),
      rgba(21, 35, 57, 0.8)
    ),
    url(${bg});
  background-attachment: fixed;
  width: 100vw;
  background-size: cover;
  background-repeat: repeat;
`;
export const SectionFirstInnerWrapper = styled.div`
  padding-bottom: 20%;
  padding-top: 75px;
  padding-right: 20px;
  padding-left: 20px;
  max-width: 1060px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
`;
export const SectionFirstInnerContentWrapper = styled.div`
  width: 100vw;
  margin-top: 50px;
  /* flex-direction: row; */
  display: flex;
  align-items: center;
  /* flex-wrap: nowrap; */
`;
export const LogoWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  margin-bottom: auto;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;
`;
export const DescriptionWrapper = styled.div`
  /* width: 50%; */
  align-items: flex-end;
  text-align: right;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  h1 {
    /* font-family: 'Montserrat'; */
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 5px;
    color: #ffffff;
  }
  a {
    font-size: 16px;
    font-weight: 700;
    border-radius: 0px;
    background-color: #12fbd0;
    border: 1px solid #12fbd0;
    color: #152339;
    padding: 8px 12.8px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
      color: white;
    }
  }
`;
export const TextBlock = styled.div`
  font-family: Verdana, Geneva, sans-serif;
  font-size: 16px;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 75%;
  text-align: justify;
`;
export const SectionSecondWrapper = styled.section`
  position: relative;
  width: 100%;
  background-size: cover;
  background-repeat: repeat;
  display: block;
`;
export const SectionSecondContentWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 75px;
  padding-right: 20px;
  padding-bottom: 75px;
  padding-left: 20px;
  max-width: 1060px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
`;
export const TringleBackground = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 0;
  transform: skewY(15deg);
  transform-origin: top right;
`;
export const AboutUsWrapper = styled.div`
  transform: translateY(-200px);
  z-index: 2;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;
`;
export const AboutUs = styled.div`
  /* font-family: 'Montserrat'; */
  font-weight: 600;
  font-size: 14px;
`;
export const Line = styled.div`
  width: 120px;
  border-bottom-color: #12fbd0;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;
`;
export const SectionThirdWrapper = styled.section`
  position: relative;
  width: 100%;
  background-size: cover;
  background-repeat: repeat;
`;
export const SectionThirdContentWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 20px;
  padding-left: 20px;
  max-width: 1060px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
`;
export const Block1Wrapper = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  display: flex;
  width: 100%;
  /* align-items: stretch; */
  justify-content: center;
  flex-wrap: wrap;
`;
export const LeftColumnWrapper = styled.div`
  width: 50%;
  align-items: center;
  text-align: center;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
`;
export const RightColumnWrapper = styled.div`
  width: 50%;
  flex-direction: column;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  flex-wrap: nowrap;
  img {
    max-width: 100%;
    border-style: none;
  }
`;
export const TextWrapper = styled.div`
color: #ffffff;
    text-align: center;
    font-size: 14px;
    font-family: Verdana,Geneva,sans-serif;
    font-weight: 500;
`
