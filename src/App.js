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
