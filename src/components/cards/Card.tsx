import { Component, ReactNode } from "react";
import { dataCard } from "../../apis/Apis";
import {
  StyledCard,
  StyledContentCard,
  StyledTitleCard,
  StyledForm,
  StyledInput,
} from "../../styles/styles";
import PrimaryBtn from "../buttons/PrimaryBtn";

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
      </StyledCard>
    );
  }
}
