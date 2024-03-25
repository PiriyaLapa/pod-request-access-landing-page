import React, { Component, ReactNode } from "react";
import { dataCard } from "../../apis/Apis";
import {
  StyledCard,
  StyledContentCard,
  StyledTitleCard,
  StyledForm,
  StyledInput,
  // StyledContainerIcon,
  WhiteWord,
  StyledContainerIconMobile,
  StyledContainerIcon,
} from "../../styles/styles";
import PrimaryBtn from "../buttons/PrimaryBtn";
import IconSpotifyMobile from "../Icons/IconSpotifyMobile";
import IconAppleMobile from "../Icons/IconAppleMobile";
import IconGoogleMobile from "../Icons/IconGoogleMobile";
import IconPocketMobile from "../Icons/IconPocketMobile";
import IconSpotify from "../Icons/IconSpotify";
import IconApple from "../Icons/IconApple";
import IconGoogle from "../Icons/IconGoogle";
import IconPocket from "../Icons/IconPocket";
// import BgPatternDots from "../vectors/BgPatternDots";

export default class Card extends Component {
  render(): ReactNode {
    const { title, content, textFieldContent, btnContent } = dataCard;
    const parts = title.split("everywhere.");
    return (
      <StyledCard>
        <StyledTitleCard>
          {parts.map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index < parts.length - 1 && <WhiteWord>everywhere.</WhiteWord>}
            </React.Fragment>
          ))}
        </StyledTitleCard>
        <StyledContentCard>{content}</StyledContentCard>
        <StyledContainerIconMobile>
          <IconSpotifyMobile />
          <IconAppleMobile />
          <IconGoogleMobile />
          <IconPocketMobile />
        </StyledContainerIconMobile>
        <StyledForm>
          <StyledInput type="text" placeholder={textFieldContent} />
          <PrimaryBtn btnMessage={btnContent} />
        </StyledForm>
      <StyledContainerIcon>
            <IconSpotify />
            <IconApple />
            <IconGoogle />
            <IconPocket />
      </StyledContainerIcon>
      </StyledCard>
    );
  }
}
