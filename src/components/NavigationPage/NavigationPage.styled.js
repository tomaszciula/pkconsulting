import styled from "styled-components";

export const NavigationPageWrapper = styled.div`
width: 100%;
    height: 100vh;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    flex-direction: column;
    display: flex;
    background-color: #152339;
    position: relative;
    z-index: 99999;
    canvas {
position:absolute;
}
@media (max-width: 991px) {
.column-alig {
  flex-direction: column-reverse !important;
}
}
@media (max-width: 1000px) and (min-width: 767px) {
.extra-margin {
  margin-top: 80px;
}
}
@media (max-width: 767px) {
#_nav_menu-74-19 .menu-item a {
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    font-size: 16px;
}
`;
export const NavigationMenuWrapper = styled.nav`
  margin-top: 0px;
  margin-bottom: 0px;
`;
export const MainMenuList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;
  text-decoration: none;
`;
export const MainMenuListElement = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border-style: solid;
  border-width: 0;
  transition-timing-function: ease-in-out;
  transition-property: background-color, color, border-color;
  border-color: transparent;
  a {
    text-decoration: none;
    justify-content: center;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    font-size: 26px;
    text-decoration: none;
    border-style: solid;
    border-width: 0;
    transition-timing-function: ease-in-out;
    transition-property: background-color, color, border-color;
    border-color: transparent;
    color: #12fbd0;
    transition: 0.3s;
    background-color: transparent;
  }
  &:hover > a {
    color: white;
    border-left: 4px solid white;
  }
`;
export const NavigationPageFooter = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 45px;
`;
export const TelefonWrapper = styled.div`
  flex-direction: row;
  display: flex;
  margin-right: 20px;
`;
