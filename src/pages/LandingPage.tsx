import * as React from "react";
import { StyledLandingPage } from "../styles/styles";
import Header from "./sections/Header";
import mobileBg from '../assets/mobile/image-host.jpg';
// import ScreenSizeDetectComponent from "../components/screensizedetect/ScreenSizeDetect";
// import { ScreenSizeDetect } from "../helpers/detectScreenSize";

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
    const { windowWidth} = this.state;
    const isDesktop = windowWidth >= 1024;
    // const labelScreenNow = new ScreenSizeDetect(windowWidth);
    return (
      <StyledLandingPage>
        <Header bgImg={mobileBg} isDesktop={isDesktop}/>
        {/* <ScreenSizeDetectComponent
          screenNow={labelScreenNow.detectScreenSize()}
          windowWidth={windowWidth}
          windowHeight={windowHeight}
        /> */}
      </StyledLandingPage>
    );
  }
}
