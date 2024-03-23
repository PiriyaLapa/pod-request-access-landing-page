import * as React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import LandingPage from "./pages/LandingPage";

export default class App extends React.Component {
  public render() {
    return (
      <div>
        <GlobalStyles />
        <LandingPage />
      </div>
    );
  }
}
