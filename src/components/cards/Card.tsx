import React, { ChangeEvent, Component, FormEvent, ReactNode } from "react";
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
  ErrorMessage,
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
import { EmailInputState } from "../../interface/interface";
// import BgPatternDots from "../vectors/BgPatternDots";

export default class Card extends Component<{}, EmailInputState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      error: null,
      submitted: false,
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: event.target.value,
      error: null,
    });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email } = this.state;

    if (!this.isValidEmail(email)) {
      this.setState({ error: "Oops! Please check you email", submitted: true });
    } else {
      console.log("Email submitted", email);
      this.setState({ submitted: true });
    }
  };

  isValidEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  render(): ReactNode {
    const { title, content, textFieldContent, btnContent } = dataCard;
    const parts = title.split("everywhere.");
    const {email, error, submitted} = this.state;
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
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledInput type="text" placeholder={textFieldContent} value={email} onChange={this.handleChange}/>
          {submitted && error && <ErrorMessage>{error}</ErrorMessage>}
          <PrimaryBtn  btnMessage={btnContent}/>
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
