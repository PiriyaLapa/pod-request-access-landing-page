import { Component, ReactNode } from "react";
import { dataCard } from "../../apis/Apis";
import {
  StyledCard,
  StyledContentCard,
  StyledTitleCard,
  StyledForm,
  StyledInput,
  StyledContainerIcon,
} from "../../styles/styles";
import PrimaryBtn from "../buttons/PrimaryBtn";
import IconApple from "../Icons/IconApple";
import IconGoogle from "../Icons/IconGoogle";
import IconPocket from "../Icons/IconPocket";
import IconSpotify from "../Icons/IconSpotify";

export default class Card extends Component {
  render(): ReactNode {
    const { title, content, textFieldContent, btnContent } = dataCard;
    return (
      <StyledCard>
        <StyledTitleCard>{title}</StyledTitleCard>
        <StyledContentCard>{content}</StyledContentCard>
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
