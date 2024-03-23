import styled from "styled-components";
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
  border:none;
  background-color:#54E6AF;
  color:#121725;
  width:162px;
  height:46px;
  border-radius:28px;
  position:relative;
  right:167px;
  &:hover{
    transition:0.6s;
    background-color:#B3FFE2;
    
  }
`;
// Style Card
export const StyledCard = styled.div``;
export const StyledTitleCard = styled.span`
  color:#54E6AF;
  display:block;
text-transform:uppercase;
`;
export const StyledContentCard = styled.span``;
export const StyledForm = styled.form``;
export const StyledInput = styled.input`
  background-color: #2c344b;
  border-radius: 28px;
  width: 427px;
  height: 56px;
  border: none;
  color: #ffff;
  padding-left:6vw;
  &::placeholder {
    color: #C2CBE5;
    text-align:left;
  }
`;
export const StyledContainerIcon = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
`;
// Styled Icon
export const StyledLogo = styled.div``;
export const StyledIconApple = styled.div``;
export const StyledIconGoolge = styled.div``;
export const StyledIconPocket = styled.div``;
export const StyledIconSpotify = styled.div``;
// Styled seaction
export const StyledHeader = styled.div``;
export const StyledBgPatternDots = styled.div``;
export const StyledPrimaryImg = styled.img``;

export const WhiteWord = styled.span`
  color:#ffff;
`;
