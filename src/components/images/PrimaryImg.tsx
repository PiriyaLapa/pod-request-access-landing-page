import { Component, ReactNode } from "react";
import { StyledPrimaryImg } from "../../styles/styles";
import { PrimaryImgProps } from "../../interface/interface";

export default class PrimaryImg extends Component<PrimaryImgProps> {
  render(): ReactNode {
    const {urlImg} = this.props;
    return <StyledPrimaryImg src={urlImg} />;
  }
}
