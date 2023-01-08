import styled from "styled-components";

export const ContactWrapper = styled.div`
  width: 100%;
`;
export const SectionFirstWrapper = styled.section`
  background-image: linear-gradient(
      rgba(21, 35, 57, 0.8),
      rgba(21, 35, 57, 0.8)
    ),
    url(https://getknow.pl/wp-content/uploads/2020/04/o-nas-tlo.jpg);
  background-attachment: fixed;
  width: 100%;
  background-size: cover;
  background-repeat: repeat;
`;
export const ContactSectionFirstContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 20%;
  padding-top: 75px;
  padding-right: 20px;
  padding-left: 20px;
  max-width: 1060px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
`;
export const ContactContentWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  flex-direction: row;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;
export const ContactLogoWrapper = styled.div`
  display: flex;
  width: 35%;
  height: 100%;
  margin-bottom: auto;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    text-decoration: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    color: #12fbd0;
    background-color: transparent;
  }
  img {
    height: 60px;
    max-width: 100%;
    border-style: none;
  }
`;
export const ContactDescriptionWrapper = styled.div`
  width: 50%;
  align-items: flex-end;
  text-align: right;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
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
  h1 {
    /* font-family: 'Montserrat'; */
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 5px;
    color: #ffffff;
    margin: 0;
  }
`;
export const ContactLine = styled.div`
  width: 78px;
  border-bottom-color: #12fbd0;
  border-bottom-width: 7px;
  border-bottom-style: solid;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;
`;
export const ContactTextDescription = styled.div`
  font-family: Verdana, Geneva, sans-serif;
  font-size: 14px;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 75%;
`;
