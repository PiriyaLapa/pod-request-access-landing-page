import React, { Component, ReactNode } from "react";
import { dataCard } from "../../apis/Apis";
import {
  StyledCard,
  StyledContentCard,
  StyledTitleCard,
  StyledForm,
  StyledInput,
  StyledContainerIcon,
  WhiteWord,
} from "../../styles/styles";
import PrimaryBtn from "../buttons/PrimaryBtn";
import IconApple from "../Icons/IconApple";
import IconGoogle from "../Icons/IconGoogle";
import IconPocket from "../Icons/IconPocket";
import IconSpotify from "../Icons/IconSpotify";
import BgPatternDots from "../vectors/BgPatternDots";

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
        <StyledForm>
          <StyledContainerIcon>
            <IconSpotify />
            <IconApple />
            <IconGoogle />
            <IconPocket />
          </StyledContainerIcon>
          <StyledInput type="text" placeholder={textFieldContent} />
          <PrimaryBtn btnMessage={btnContent} />
        </StyledForm>
        {/* <BgPatternDots /> */}
      </StyledCard>
    );
  }
}

