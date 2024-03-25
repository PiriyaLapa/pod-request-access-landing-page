import * as React from "react";
import { StyledHeader } from "../../styles/styles";
import Logo from "../../components/Icons/Logo";
import Card from "../../components/cards/Card";
import PrimaryImg from "../../components/images/PrimaryImg";
import tabletImg from "../../assets/tablet/image-host.jpg";
import desktopImg from '../../assets/desktop/image-host.jpg';
import BgPatternDots from "../../components/vectors/BgPatternDots";

interface HeaderProps {
  bgImg: string;
  isDesktop:boolean;
}
export default class Header extends React.Component<HeaderProps> {
  public render(): React.ReactNode {
    const { bgImg,isDesktop } = this.props;
    return (
      <StyledHeader $bgImg={bgImg}>
        <Logo />
        <PrimaryImg urlImg={isDesktop ? desktopImg : tabletImg} />
        <Card />
        <BgPatternDots />
      </StyledHeader>
    );
  }
}
