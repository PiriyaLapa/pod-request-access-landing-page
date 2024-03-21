import * as React from "react";
import {StyledHeader} from '../../styles/styles';
import Logo from "../../components/Icons/Logo";
import Card from "../../components/cards/Card";

export default class Header extends React.Component {
  public render(): React.ReactNode {
    return <StyledHeader>
        <Logo />
        <Card />
    </StyledHeader>;
  }
}
