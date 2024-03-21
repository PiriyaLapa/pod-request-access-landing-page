import * as React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import ScreenSizeDetect from "./components/screensizedetect/ScreenSizeDetect";
import LandingPage from "./pages/LandingPage";

export default class App extends React.Component {
  public render() {
    return (
      <div>
        <GlobalStyles />
        <h1>Pod-request-access-landing-page</h1>
        <LandingPage />
        <ScreenSizeDetect windowHeight={676} windowWidth={1820} screenNow="Mobile"/>
        
      </div>
    );
  }
}
