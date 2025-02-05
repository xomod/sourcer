import React, { useState } from 'react';
import LitteraProvider from "react-littera";
import { ThemeProvider } from "react-jss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar } from "components/common";
 
import { Home as HomePage, SinglePost as SinglePostPage, Wrong as WrongPage } from "../pages";
import DynamicTheme from "../utils/theme";

function App() {
  const [locale, setLocale] = useState("en_US");

  return (
    <div className="App">
      <ThemeProvider theme={new DynamicTheme()}>
        <Router basename={process.env.REACT_APP_BASENAME || "/"}>
          <LitteraProvider language={locale} setLanguage={setLocale}>
            <AppBar />

              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/p/:id" component={SinglePostPage} />
                <Route component={WrongPage} />
              </Switch>
          </LitteraProvider>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
