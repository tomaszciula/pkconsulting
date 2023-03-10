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
                    SEO to w skr??cie optymalizacja strony dla wyszukiwarek
                    internetowych. Zmodernizuj?? Twoj?? stron?? i j?? wypozycjonuj??.
                    Dzi??ki temu sprawi??, ??e zaimponuje ona odwiedzaj??cym.
                    Efektywnie i systematycznie zwi??ksz?? sprzeda?? oraz wypromuj??
                    Twoj?? mark??.
                  </TextDescription>
                  <Line />
                  <AnchorsWrapper>
                    <a href="#sem">SEM</a>
                    <a href="#video">VIDEO/ZDJ??CIA</a>
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
                    <Link to="/contact">Popro?? o wycen??</Link>
                  </OfferButton>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="sem">SEM</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      SEM to poj??cie szersze ni?? SEO. Dzi??ki dzia??aniom SEM
                      prawid??owo dopasuj?? s??owa kluczowe, witryna stanie si??
                      bardziej widoczna. Ty i Twoja firma zyskacie
                      niepowtarzaln?? okazj?? do tego, aby wyj???? naprzeciw
                      oczekiwaniom u??ytkownik??w i ich potrzebom. Wsp??lnie
                      zdob??dziemy leady, przyspieszymy sprzeda??. Wp??yniemy na
                      wzrost ruchu na stronie, zwi??kszymy rozpoznawalno???? marki.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="video">VIDEO / ZDJ??CIA</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Realizuj?? animacje, intra, zdj??cia produktowe, zdj??cia do
                      post??w, filmy reklamowe. Nadam charakter Twojej marce w
                      sieci, zbuduj?? wymarzony wizerunek, je??li skorzystasz z
                      kompleksowych rozwi??za?? z mojej oferty.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="social">SOCIAL MEDIA MARKETING</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Oddaj??c w moje r??ce sw??j fanpage mo??esz by?? pewien
                      regularno??ci post??w, anga??uj??cych tre??ci i osi??gni??cia
                      po????danych efekt??w. Skuteczne reklamy, pop artowe grafiki
                      oraz content video to materia??y, kt??re wyr????ni?? Twoj??
                      firm?? na tle innych w social mediach. Konfiguracje kont
                      biznesowych i reklamowych oraz kampanie reklamowe, to
                      kolejny etap naszej wsp????pracy.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="rodo">RODO</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Regulaminy, polityka prywatno??ci to standard. Ka??dy klient
                      korzystaj??c z moich us??ug otrzymuje kompleksowe
                      rozwi??zania.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="g">GOOGLE ADS</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Efektywne dzia??ania marketingowe w Google, kt??re dostosuj??
                      do Twojego bud??etu, zapewni?? ka??dej firmie wi??kszy ruch na
                      stronie lub w sklepie. Zwi??ksz?? liczb?? zapyta?? ofertowych,
                      rozpoznawalno????, a co za tym idzie konwersje i przychody.
                      Ze mn?? Twoja firma stanie si?? bardziej konkurencyjna.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="e-com">SKLEPY INTERNETOWE/E-COMMERCE</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Nowoczesne, spersonalizowane i dostosowane pod urz??dzenia
                      mobilne projekty to moja specjalno????. Podnios?? sprzeda??
                      sklepu oraz zwi??ksz?? jego rentowno????. Korzystam z
                      najbardziej zaawansowanych rozwi??za?? i system??w promocji
                      oraz sprzeda??y. Wiem jak promowa?? sklepy internetowe,
                      zwi??ksza?? ich rozpoznawalno????, a przede wszystkim podnosi??
                      ich sprzeda??. Moje do??wiadczenie z e-commerce pozwoli??o
                      ju?? w??a??cicielom wielu sklep??w zwi??kszy?? ruch oraz zyski.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="portal">SKLEPY INTERNETOWE/PORTALE</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Stworz?? dla Ciebie stron?? wizyt??wkow??, one page, stron??
                      firmow??, bloga, Landing Page. Je??li b??dziesz bardziej
                      nastawiony na interakcj?? z u??ytkownikiem, to zbudujemy
                      portal. Wsp??lnie zaprojektujemy portal produktowy, czyli
                      serwis e-commerce, gdzie sprzedasz swoje produkty i
                      oferowane us??ugi.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="f">FACEBOOK ADS</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Dobior?? najbardziej optymaln?? strategi?? dla Twojego
                      biznesu. Efektywnie i systematycznie zwi??ksz?? sprzeda??
                      oraz wypromuj?? Twoj?? mark?? w??asn?? poprzez FB! Dotrzemy do
                      Klient??w zainteresowanych Twoim produktem lub us??ug??,
                      razem zwi??kszymy ??wiadomo???? marki.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="kb">KONSULTACJE BIZNESOWE</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Rozpocznij wsp????prac?? ze Mn??. Wsp??lny audyt twojej
                      strony,social medi??w oraz konsultacja biznesowa online
                      dostarczy Ci cennych informacji o zmianach jakie
                      powiniene?? wdro??y??. Ustalimy strategi?? dla Twojej marki i
                      produktu.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="logo">PROJEKTY GRAFICZNE/LOGOTYPY</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Projekty graficzne to moja pasja. Tworz?? nowe, ??wie??e i
                      nieszablonowe logotypy. Zaprojektuj?? dla Ciebie wizyt??wk??,
                      baner, grafiki na Social Media, ulotki, katalogi i wiele
                      innych materia????w reklamowych.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="event">SZKOLENIA/REKRUTACJE/EVENTY</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Zorganizuj?? dla Ciebie konferencj??, spotkanie biznesowe
                      lub wyj??tkowy event. Przeprowadz?? procesy rekrutacyjne dla
                      Twojej firmy. Aktywuj?? potencja?? Twojej organizacji
                      poprzez cykl szkole?? biznesowych.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="cm">CONTENT MARKETING</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Anga??uj??ce tre??ci pod k??tem SEO oraz user experience na
                      stron??, blog, do reklam opracowuj?? w trybie ekspresowym.
                      Teksty na posty to moja specjalno????. Copywritng to produkt
                      premium jaki oferuj?? moim Klientom.
                    </b>
                  </TextHeader>
                  <Line1 />
                  <TextHeader style={{ fontSize: "30px", fontWeight: "700" }}>
                    <a name="pm">PERFORMANCE MARKETING</a>
                  </TextHeader>
                  <TextHeader>
                    <b>
                      Akcje marketingowe jakie opracuj?? dla Twojej marki b??d??
                      elastyczne, oszcz??dne i dadz?? szybkie rezultaty. Tw??j
                      ukszta??towany wizerunek prze??o??ymy na po????dane dzia??ania
                      odbiorc??w. Skupiam si?? na efektach.
                    </b>
                  </TextHeader>
                </LeftColumnWrapper>
              </ElementWrapper>
            </SectionSecondInnerWrapper>
          </SectionSecondWrapper>
          <OfferButton>
            <Link to="/contact">Popro?? o wycen??</Link>
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
