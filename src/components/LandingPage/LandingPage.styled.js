import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url(https://getknow.pl/wp-content/uploads/2020/06/bg-990.svg);
  width: 990px;
  height: 440px;
  background-size: contain;
  position: relative;
`;

export const TriangleBox = styled.div`
  overflow: hidden;
  width: 100%;
  height: 544px;
  margin-left: -2px;
  border-bottom-right-radius: 45px;
  transform: rotate(33.3deg);
  transform-origin: top right;
  /* -webkit-box-shadow: -1px 1px 20px 9px rgb(0 0 0 / 75%);
  -moz-box-shadow: -1px 1px 20px 9px rgba(0, 0, 0, 0.75); */
  box-shadow: -1px 1px 20px 9px rgb(0 0 0 / 75%);
`;

export const Ocean = styled.div`
  height: 5%;
  width: 100%;
  position: absolute;
  bottom: -20px;
  left: 0;
  background: #015871;
  transform: rotate(-33.3deg);
  transform-origin: bottom right;
`;

export const Wave = styled.div`
  /* background: url(https://getknow.pl/wp-content/uploads/2020/06/wave.svg) repeat-x; */
  background: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='1600' height='198' viewBox='0 0 1600 198'%3e%3cdefs%3e%3clinearGradient id='linear-gradient' x1='0.5' y1='1.11' x2='0.5' gradientUnits='objectBoundingBox'%3e%3cstop offset='0' stop-color='%2357bbc1' stop-opacity='0.251'/%3e%3cstop offset='1' stop-color='%2312fbd0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath id='wave' d='M0-121C311-121,409.9.25,811,0c400,0,500-121,789-121v-77H0S0-150,0-121Z' transform='translate(1600 0) rotate(180)' fill-rule='evenodd' fill='url(%23linear-gradient)'/%3e%3c/svg%3e");
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
  :nth-of-type(2) {
    top: -175px;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.925s infinite,
      swell 7s ease -1.25s infinite;
    opacity: 1;
  }
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
`;

export const LogoWrapper = styled.div`
  height: 90px;
  position: absolute;
  right: -152px;
  bottom: -200px;
  img {
    width: 100%; /* or any custom size */
    height: 100%;
    object-fit: contain;
  }
`;

export const RightTopCornerWrapper = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  height: 200px;
  z-index: 999999;
  width: 445px;
  &::before {
    content: "";
    background: #fff;
    position: absolute;
    top: 0;
    right: -300px;
    -webkit-transform: skew(56.1deg);
    -ms-transform: skew(56.1deg);
    transform: skew(56.1deg);
    z-index: 9999;
    width: 445px;
    height: 200px;
    box-shadow: 0 0 11px rgb(183 198 203 / 65%);
  }
`;
export const NavIconWrapper = styled.div`
  width: 60px;
  height: 45px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
export const HamburgerMenuWrapper = styled.div`
  position: absolute;
  z-index: 99999;
  top: 50px;
  right: 45px;
`;
export const NavIconSpan = styled.span`
  display: block;
  position: absolute;
  height: 8px;
  width: 50%;
  background: #152339;
  opacity: 1;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
  margin-top: -5px;
  :nth-child(1),
  nth-child(2) {
    top: 0px;
  }
  */ :nth-child(odd) {
    left: 0px;
    border-radius: 9px 0 0 9px;
  }
`;
export const Drop = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  bottom: 10px;
  right: 282px;
  margin: 0 auto;
  background: #12fbd0;
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
  border-radius: 20px;
  -moz-animation-name: drip;
  -webkit-animation-name: drip;
  animation-name: drip;
  -moz-animation-timing-function: cubic-bezier(1, 0, 0.91, 0.19);
  -webkit-animation-timing-function: cubic-bezier(1, 0, 0.91, 0.19);
  animation-timing-function: cubic-bezier(1, 0, 0.91, 0.19);
  -moz-animation-duration: 2s;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -moz-animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  :before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 30px solid #12fbd0;
    top: -22px;
  }
  @keyframes drip {
    to {
      bottom: -90px;
    }
  }
`;

export const Drop2 = styled.div`
position: absolute;
    width: 20px;
    height: 20px;
    bottom: 10px;
    right: 282px;
    margin: 0 auto;
    background: #12FBD0;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    -moz-animation-name: drip;
    -webkit-animation-name: drip;
    animation-name: drip;
    -moz-animation-timing-function: cubic-bezier(1,0,.91,.19);
    -webkit-animation-timing-function: cubic-bezier(1,0,.91,.19);
    animation-timing-function: cubic-bezier(1,0,.91,.19);
    -moz-animation-duration: 2s;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -moz-animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    right: 315px !important;
    animation-delay: .5s;
    :before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 30px solid #12FBD0;
    top: -22px;
    @keyframes drip{
    to {
      bottom: -90px;
    }
  }
    `;
export const Block275 = styled.div`
  width: 100%;
  align-items: flex-end;
  text-align: right;
  align-self: left;
  z-index: 102;
  isplay: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;
`;
