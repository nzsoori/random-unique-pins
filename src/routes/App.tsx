import React, { lazy, Suspense } from "react";
import Header from "../components/header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/App.css";

const PageNotFound = lazy(() => import("../components/error/PageNotFound"));
const GeneratePins = lazy(() => import("../containers/generatePins"));
const SavedPins = lazy(() => import("../containers/savedPins"));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Suspense fallback={<div className="Loader"></div>}>
        <Switch>
          <Route path="/" component={GeneratePins} exact />
          <Route path="/saved" component={SavedPins} exact />

          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
