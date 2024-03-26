import styled from "styled-components";
import { StyledHeaderProps } from "../interface/interface";
export const StyledScreenSizeDetect = styled.div`
  width: 90%;
  height: auto;
  display: inline-block;
  background-color: rgba(143, 227, 249, 0.2);
  padding: 2%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100%);
  h1 {
    font-family: "Chivo";
    font-style: normal;
    font-weight: 900;
    text-transform: capitailze;
    font-size: 1em;
    span {
      color: #54e6af;
    }
  }
`;
// Styled Page
export const StyledLandingPage = styled.div`
  //
`;

// Style Button
export const StyledPrimaryBtn = styled.button`
  border: none;
  background-color: #54e6af;
  color: #121725;
  width: 162px;
  height: 46px;
  border-radius: 28px;
  font-family: "Chivo";
  font-weight: 700;
  font-size: 14px;
  line-height: 28px;
  font-style: normal;
  /* position: relative;
  right: 167px; */
  &:hover {
    transition: 0.6s;
    background-color: #b3ffe2;
  }

  @media screen and (max-width: 767px) {
    width: 327px;
    height: 46px;
    align-items: center;
    letter-spacing: 0.5px;
  }
  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    position: absolute;
    top: 340px;
    right: 20vw;
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    position: relative;
    left: -20%;
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    /* background-color:#6096B4; */
  }
  @media screen and (min-width: 1920px) {
    /* background-color:#CADEFC; */
  }
`;
// Style Card
export const StyledCard = styled.div`
  @media screen and (max-width: 767px) {
    display: grid;
    padding: 0% 3%;
  }
  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 635px;
    max-height: 509px;
    width: 75%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #121725;
    position: relative;
    top: 200px;
    left: 38px;
    z-index: 200;

    padding: 4% 23px;

    /* position:absolute;
    top:300px; */
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    max-width: 723px;
    max-height: 509px;
    width: 65vw;
    height: 80vh;
    position: relative;
    top: -320px;
    left: 90px;
    z-index: 200;
    background-color: #121725;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 5%;

    &::after {
      content: " ";
      display: table;
      clear: both;
    }
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    max-width: 723px;
    max-height: 509px;
    width: 100vw;
    height: 100vh;
    background-color: #121725;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 2vh;

    position: absolute;
    top: 300px;
    left: 200px;
  }

  @media screen and (min-width: 1920px) {
    /* background-color:#CADEFC; */
  }
`;
export const StyledTitleCard = styled.span`
  font-family: "chivo";
  font-style: normal;
  color: #54e6af;
  display: block;
  text-transform: uppercase;

  @media screen and (max-width: 767px) {
    font-weight: 300;
    font-size: 26px;
    line-height: 38px;
    text-align: center;
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-weight: 400;
    font-size: 42px;
    line-height: 56px;
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    font-weight: 400;
    font-size: 52px;
    line-height: 62px;
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    font-family: "Chivo";
    font-style: normal;
    font-style: 400;
    font-size: 52px;
    line-height: 62px;
    text-transform: uppercase;
  }
  @media screen and (min-width: 1920px) {
    /* background-color:#CADEFC; */
  }
`;
export const StyledContentCard = styled.span`
  font-family: "Chivo";
  font-style: normal;
  font-weight: 300;
  color: #c2cbe5;

  @media screen and (max-width: 767px) {
    display: inline-block;
    text-align: center;
    font-size: 15px;
    line-height: 25px;
    align-items: center;
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 60vw;
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    width: 60vw;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    font-family: "Chivo";
    font-style: normal;
    font-weight: 400;
    font-size: 1.125em; // 18px
    line-height: 1.75em; // 28px;
    letter-spacing: initial;
    text-transform: none;
    width: 70%;
  }
  @media screen and (min-width: 1920px) {
    /* background-color:#CADEFC; */
  }
`;
export const StyledForm = styled.form`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vh;
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    //
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    /* background-color:#93BFCF; */
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    /* background-color:#6096B4; */
  }
  @media screen and (min-width: 1920px) {
    /* background-color:#CADEFC; */
  }
`;
export const StyledInput = styled.input`
  background-color: #2c344b;
  border-radius: 28px;
  width: 427px;
  height: 56px;
  border: none;
  color: #ffff;
  padding-left: 6vw;
  &::placeholder {
    color: #c2cbe5;
    text-align: left;
  }

  @media screen and (max-width: 767px) {
    width: 327px;
    height: 46px;
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    /* background-color:#93BFCF; */
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    /* background-color:#6096B4; */
  }
  @media screen and (min-width: 1920px) {
    /* background-color:#CADEFC; */
  }
`;
export const StyledContainerIcon = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    text-align: start;
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    /* background-color:#93BFCF; */
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    /* background-color:#6096B4; */
  }
  @media screen and (min-width: 1920px) {
    /* background-color:#CADEFC; */
  }
`;
export const StyledContainerIconMobile = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  text-align: center;
  @media screen and (max-width: 767px) {
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    /* background-color:#93BFCF; */
    display: none;
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    /* background-color:#6096B4; */
    display: none;
  }
  @media screen and (min-width: 1920px) {
    display: none;
  }
`;
// Styled Icon
export const StyledLogo = styled.div`
  @media screen and (max-width: 767px) {
    padding-top: 20%;
    display: block;
    text-align: center;
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    position: relative;
    top: 50px;
    left: 55px;
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    position: relative;
    top: 50px;
    left: 140px;
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    /* background-color:#6096B4; */
  }
  @media screen and (min-width: 1920px) {
    /* background-color:#CADEFC; */
  }
`;
export const StyledIconApple = styled.div``;
export const StyledIconGoolge = styled.div``;
export const StyledIconPocket = styled.div``;
export const StyledIconSpotify = styled.div`
  @media screen and (max-width: 767px) {
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    /* background-color:#6096B4; */
  }
  @media screen and (min-width: 1920px) {
    /* background-color:#CADEFC; */
  }
`;
// Styled seaction
export const StyledHeader = styled.section<StyledHeaderProps>`
  /* overflow:hidden; */
  @media screen and (max-width: 767px) {
    display: grid;
    height: auto;
    grid-gap: 2vh;
    height: 100vh;
    background-image: linear-gradient(
        rgba(18, 23, 37, 0.85),
        rgba(18, 23, 37, 0.85)
      ),
      url(${(props) => props.$bgImg});
    object-fit: cover;
    background-repeat: no-repeat;
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    /* background-color:#6096B4; */
  }
  @media screen and (min-width: 1920px) {
    /* background-color:#CADEFC; */
  }
`;

export const StyledBgPatternDots = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    position: relative;
    top: 300px;
    left: 30px;
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    position: absolute;
    z-index: 300;
    top: 550px;
    right: 10px;
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 700px;
    right: 0px;
  }
  @media screen and (min-width: 1920px) {
    /* background-color:#CADEFC; */
  }
`;
export const StyledPrimaryImg = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 1;
  }

  // Labtop
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    position: relative;
    z-index: 1;
    max-width: 888px;
    max-height: 640px;
    width: 65vw;
    float: right;
  }

  // Desktop
  @media screen and (min-width: 1440px) {
    float: right;
  }
  @media screen and (min-width: 1920px) {
    /* background-color:#CADEFC; */
  }
`;

export const WhiteWord = styled.span`
  color: #ffff;
`;

export const StyledIconAppleMobile = styled.div`
  display: inline-block;
`;
export const StyledIconGoogleMobile = styled.div``;
export const StyledIconPocketMobile = styled.div``;
export const StyledIconSpotifyMobile = styled.div``;
export const ErrorMessage = styled.span`
    display:inline-block;
  font-family:'Chivo';
  font-style:normal;
  font-weight:400;
  font-size:14px;
  color: red;
`;
