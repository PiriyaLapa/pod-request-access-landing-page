import * as React from "react";
import { StyledLandingPage } from "../styles/styles";
import Header from "./sections/Header";

export default class LandingPage extends React.Component {
  // Define initial state to hold window dimensions
  state = {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  };

  // Function to update window dimensions in state
  updateWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  // Add event listener to update window dimensions when resized
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  // Remove event listener when component is unmounted
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  public render(): React.ReactNode {
    return (
      <StyledLandingPage>
        <Header />
      </StyledLandingPage>
    );
  }
}
