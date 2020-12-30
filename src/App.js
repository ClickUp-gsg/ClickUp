import * as S from "./style";

import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import Home from "./pages/Home";
import Sign from "./pages/Sign";
import { ThemeProvider } from "styled-components";

const theme = {
  primary: "#7B68EE",
  primaryDark: "#5f48ea",
  light: "#d3cdf9",
  mobileWidth: "520px",
  ipadWidth: "720px",
  lapWidth: "1050px",
};

function App() {
  return (
    <S.App>
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signup">
              <Sign type="SignUp" />
            </Route>
            <Route exact path="/signin">
              <Sign type="SignIn" />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </S.App>
  );
}

export default App;

// eslint-disable-next-line no-lone-blocks
{
  /* <svg
        class="cu-mind__icon"
        width="76"
        height="91"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient x1="0%" y1="68.01%" y2="68.01%" id="a">
            <stop stop-color="#8930FD" offset="0%"></stop>
            <stop stop-color="#49CCF9" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="0%" y1="68.01%" y2="68.01%" id="b">
            <stop stop-color="#FF02F0" offset="0%"></stop>
            <stop stop-color="#FFC800" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g fill-rule="nonzero" fill="none">
          <path
            d="M.23 69.64l13.92-10.66c7.4 9.65 15.26 14.1 24 14.1 8.7 0 16.34-4.4 23.4-13.98l14.12 10.41c-10.2 13.8-22.86 21.1-37.52 21.1-14.61 0-27.4-7.24-37.92-20.97z"
            fill="url(#a)"
          ></path>
          <path
            fill="url(#b)"
            d="M38.1 23.3L13.34 44.63 1.88 31.36 38.16.09l36 31.3-11.51 13.23z"
          ></path>
        </g>
      </svg>*/
}
