import React, { useState } from "react";
import LandingPage from "../LandingPage/LandingPage";
import NavigationPage from "../NavigationPage/NavigationPage"
const MainView = () => {
  const [menu, setMenu] = useState(false);
  return (
  !menu ? <LandingPage menu={menu} setMenu={setMenu} /> : <NavigationPage menu={menu} setMenu={setMenu}/>)
};

export default MainView;
