import * as React from "react";
import {StyledHeader} from '../../styles/styles';
import Logo from "../../components/Icons/Logo";
import Card from "../../components/cards/Card";

interface HeaderProps{
  bgImg:string
}
export default class Header extends React.Component<HeaderProps> {
  public render(): React.ReactNode {
    const {bgImg}  = this.props;
    return <StyledHeader $bgImg={bgImg}>
        <Logo />
        <Card />
    </StyledHeader>;
  }
}
