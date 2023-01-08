import React, { useCallback } from "react";
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
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const NavigationPage = (props) => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  return (
    <div style={{ position: 'relative' }}>
  <div style={{ position: 'absolute' }}>
  <Particles height="100vh" width="100vw" id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={{
                background: {
                    color: {
                        value: "#0d47a1",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }} />
</div>
<NavigationPageWrapper >

      <RightTopCorner menu={props.menu} setMenu={props.setMenu} />
      {/* <div style={{ position: "absolute" }}> */}
        {/* <Particles height="100vh" width="100vw" params={configParticles} /> */}

        <img src={logo} alt="logo" />
        <NavigationMenuWrapper>
          <MainMenuList>
            <MainMenuListElement>
              <a href="/about" aria-current="page">
                O mnie
              </a>
            </MainMenuListElement>
            <MainMenuListElement>
              <a href="/offer" aria-current="page">
                Oferta
              </a>
            </MainMenuListElement>
            {/* <MainMenuListElement>
            <a href="https://pkconsulting.pl/o-nas/" aria-current="page">
              Kim jesteśmy
            </a>
          </MainMenuListElement> */}
            <MainMenuListElement>
              <a href="/realizations" aria-current="page">
                Realizacje
              </a>
            </MainMenuListElement>
            <MainMenuListElement>
              <a href="/contact" aria-current="page">
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
                style={{
                  color: "#12fbd0",
                  fontSize: "16px",
                  marginLeft: "5px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                +48 505146677
              </a>
            </TelefonWrapper>
          </NavigationPageFooter>
        </NavigationMenuWrapper>
    </NavigationPageWrapper>
    </div>
  );
};

export default NavigationPage;
