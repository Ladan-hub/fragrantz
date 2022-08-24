import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Perfume from "./components/Perfumes/index";
import PerfumeDetail from "./components/PerfumeDetail";
import PerfumeForm from "./components/PerfumeForm/index";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/perfumes/new">
            <PerfumeForm />
          </Route>
          <Route exact path="/">
            <Perfume />
          </Route>
          <Route path="/perfumes/:perfumeId">
            <PerfumeDetail />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
