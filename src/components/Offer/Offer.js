import React, { useCallback } from "react";
import {
  AnchorsWrapper,
  ArrowElement,
  Between,
  DescriptionAndSocialWrapper,
  DescriptionWrapper,
  ElementWrapper,
  FooterContactWrapper,
  FooterWrapper,
  LeftColumnWrapper,
  Line,
  Line1,
  OfferButton,
  OfferWrapper,
  SectionFirstInnerContent,
  SectionFirstInnerWrapper,
  SectionFirstWrapper,
  SectionSecondInnerWrapper,
  SectionSecondWrapper,
  Telefon,
  TextDescription,
  TextHeader,
  TextOffer,
} from "./Offer.styled";
import triangle1 from "../../assets/tringle.svg";
import RightTopCorner from "../LandingPage/RightTopCorner";
import logo from "../../assets/logo2.png";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Link } from "react-router-dom";

const Offer = (props) => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
      <OfferWrapper>
        <div style={{ position: "absolute" }}>
          <Particles
            height="100vh"
            width="100vw"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
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
            }}
          />
        </div>
        <RightTopCorner menu={props.menu} setMenu={props.setMenu} />

        <SectionFirstWrapper>
          <SectionFirstInnerWrapper>
            <SectionFirstInnerContent></SectionFirstInnerContent>

            <div style={{ position: "relative" }}>
              <DescriptionAndSocialWrapper>
                <DescriptionWrapper>
                  <TextOffer>OFERTA</TextOffer>
                  <Line />
                  <TextDescription>
                    SEO to w skrócie optymalizacja strony dla wyszukiwarek
                    internetowych. Zmodernizuję Twoją stronę i ją wypozycjonuję.
                    Dzięki temu sprawię, że zaimponuje ona odwiedzającym.
                    Efektywnie i systematycznie zwiększę sprzedaż oraz wypromuję
                    Twoją markę.
                  </TextDescription>
                  <Line />
                  <AnchorsWrapper>
                    <a href="#sem">SEM</a>
                    <a href="#video">VIDEO/ZDJĘCIA</a>
                    <a href="#social">SOCIAL MEDIA MARKETING</a>
                    <a href="#rodo">RODO</a>
                    <a href="#g">GOOGLE ADS</a>
                    <a href="#f">FACEBOOK ADS</a>
                    <a href="#e-com">SKLEPY INTERNETOWE/E-COMMERCE</a>
                    <a href="#portal">SKLEPY INTERNETOWE/PORTALE</a>
                    <a href="#kb">KONSULTACJE BIZNESOWE</a>
                    <a href="#logo">PROJEKTY GRAFICZNE/LOGOTYPY</a>
                    <a href="#event">SZKOLENIA/REKRUTACJE/EVENTY</a>
                    <a href="#cm">CONTENT MARKETING</a>
                    <a href="#pm">PERFORMANCE MARKETING</a>
                  </AnchorsWrapper>
                </DescriptionWrapper>
              </DescriptionAndSocialWrapper>
              <img src={triangle1} alt="tringle" />
            </div>
          </SectionFirstInnerWrapper>
          <SectionSecondWrapper>
            <SectionSecondInnerWrapper>
              <ElementWrapper>
                <LeftColumnWrapper>
                  <OfferButton>
                    <Link to="/contact">Poproś o wycenę</Link>
                  </OfferButton>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="sem">SEM</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      SEM to pojęcie szersze niż SEO. Dzięki działaniom SEM
                      prawidłowo dopasuję słowa kluczowe, witryna stanie się
                      bardziej widoczna. Ty i Twoja firma zyskacie
                      niepowtarzalną okazję do tego, aby wyjść naprzeciw
                      oczekiwaniom użytkowników i ich potrzebom. Wspólnie
                      zdobędziemy leady, przyspieszymy sprzedaż. Wpłyniemy na
                      wzrost ruchu na stronie, zwiększymy rozpoznawalność marki.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="video">VIDEO / ZDJĘCIA</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Realizuję animacje, intra, zdjęcia produktowe, zdjęcia do
                      postów, filmy reklamowe. Nadam charakter Twojej marce w
                      sieci, zbuduję wymarzony wizerunek, jeśli skorzystasz z
                      kompleksowych rozwiązań z mojej oferty.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="social">SOCIAL MEDIA MARKETING</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Oddając w moje ręce swój fanpage możesz być pewien
                      regularności postów, angażujących treści i osiągnięcia
                      pożądanych efektów. Skuteczne reklamy, pop artowe grafiki
                      oraz content video to materiały, które wyróżnią Twoją
                      firmę na tle innych w social mediach. Konfiguracje kont
                      biznesowych i reklamowych oraz kampanie reklamowe, to
                      kolejny etap naszej współpracy.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="rodo">RODO</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Regulaminy, polityka prywatności to standard. Każdy klient
                      korzystając z moich usług otrzymuje kompleksowe
                      rozwiązania.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="g">GOOGLE ADS</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Efektywne działania marketingowe w Google, które dostosuję
                      do Twojego budżetu, zapewnią każdej firmie większy ruch na
                      stronie lub w sklepie. Zwiększą liczbę zapytań ofertowych,
                      rozpoznawalność, a co za tym idzie konwersje i przychody.
                      Ze mną Twoja firma stanie się bardziej konkurencyjna.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="e-com">SKLEPY INTERNETOWE/E-COMMERCE</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Nowoczesne, spersonalizowane i dostosowane pod urządzenia
                      mobilne projekty to moja specjalność. Podniosę sprzedaż
                      sklepu oraz zwiększę jego rentowność. Korzystam z
                      najbardziej zaawansowanych rozwiązań i systemów promocji
                      oraz sprzedaży. Wiem jak promować sklepy internetowe,
                      zwiększać ich rozpoznawalność, a przede wszystkim podnosić
                      ich sprzedaż. Moje doświadczenie z e-commerce pozwoliło
                      już właścicielom wielu sklepów zwiększyć ruch oraz zyski.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="portal">SKLEPY INTERNETOWE/PORTALE</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Stworzę dla Ciebie stronę wizytówkową, one page, stronę
                      firmową, bloga, Landing Page. Jeśli będziesz bardziej
                      nastawiony na interakcję z użytkownikiem, to zbudujemy
                      portal. Wspólnie zaprojektujemy portal produktowy, czyli
                      serwis e-commerce, gdzie sprzedasz swoje produkty i
                      oferowane usługi.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="f">FACEBOOK ADS</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Dobiorę najbardziej optymalną strategię dla Twojego
                      biznesu. Efektywnie i systematycznie zwiększę sprzedaż
                      oraz wypromuję Twoją markę własną poprzez FB! Dotrzemy do
                      Klientów zainteresowanych Twoim produktem lub usługą,
                      razem zwiększymy świadomość marki.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="kb">KONSULTACJE BIZNESOWE</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Rozpocznij współpracę ze Mną. Wspólny audyt twojej
                      strony,social mediów oraz konsultacja biznesowa online
                      dostarczy Ci cennych informacji o zmianach jakie
                      powinieneś wdrożyć. Ustalimy strategię dla Twojej marki i
                      produktu.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="logo">PROJEKTY GRAFICZNE/LOGOTYPY</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Projekty graficzne to moja pasja. Tworzę nowe, świeże i
                      nieszablonowe logotypy. Zaprojektuję dla Ciebie wizytówkę,
                      baner, grafiki na Social Media, ulotki, katalogi i wiele
                      innych materiałów reklamowych.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="event">SZKOLENIA/REKRUTACJE/EVENTY</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Zorganizuję dla Ciebie konferencję, spotkanie biznesowe
                      lub wyjątkowy event. Przeprowadzę procesy rekrutacyjne dla
                      Twojej firmy. Aktywuję potencjał Twojej organizacji
                      poprzez cykl szkoleń biznesowych.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="cm">CONTENT MARKETING</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Angażujące treści pod kątem SEO oraz user experience na
                      stronę, blog, do reklam opracowuję w trybie ekspresowym.
                      Teksty na posty to moja specjalność. Copywritng to produkt
                      premium jaki oferuję moim Klientom.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="pm">PERFORMANCE MARKETING</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Akcje marketingowe jakie opracuję dla Twojej marki będą
                      elastyczne, oszczędne i dadzą szybkie rezultaty. Twój
                      ukształtowany wizerunek przełożymy na pożądane działania
                      odbiorców. Skupiam się na efektach.
                    </b>
                  </TextHeader>
                </LeftColumnWrapper>
              </ElementWrapper>
            </SectionSecondInnerWrapper>
          </SectionSecondWrapper>
          <OfferButton>
            <Link to="/contact">Poproś o wycenę</Link>
          </OfferButton>
          <img src={logo} alt="logo" style={{ width: "200px" }} />
        </SectionFirstWrapper>
        <FooterWrapper>
          <FooterContactWrapper>
            <Telefon>
              <a id="link_text-139-19" href="tel:+48661992661" target="_self">
                TEL.&nbsp;+48 661 992 661
              </a>
            </Telefon>
            <Between />
            <Telefon>
              <a
                id="link_text-141-19"
                href="mailto:kontakt@pkconsulting.pl"
                target="_self"
              >
                KONTAKT@PKCONSULTING.PL
              </a>
            </Telefon>
          </FooterContactWrapper>
        </FooterWrapper>
      </OfferWrapper>
    </>
  );
};

export default Offer;
