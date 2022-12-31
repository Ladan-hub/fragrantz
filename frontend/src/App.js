import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Perfume from "./components/Perfumes/index";
import PerfumeDetail from "./components/PerfumeDetail";
import PerfumeForm from "./components/CreatePerfumeForm/index";
import EditForm from "./components/EditPerfumeForm";
import CommentForm from "./components/CreateCommentForm";
// import Splash from "./components/SplashPage";
import EditCommentForm from "./components/EditCommentForm";
import WoodyPerfumes from "./components/Perfumes/woody";

function App() {
  const loggedInUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  //console.log("This is the app")
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/perfumes/:perfumeId/comment">
            <CommentForm />
          </Route>
          <Route exact path="/perfumes/:perfumeId/comments/:commentId/edit">
            <EditCommentForm />
          </Route>
          <Route exact path="/perfumes/:perfumeId/edit">
            <EditForm />
          </Route>
          <Route exact path="/perfumes/:perfumeId">
            <PerfumeDetail />
          </Route>
          <Route path="/new">
            <PerfumeForm />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/woody">
            <WoodyPerfumes />
          </Route>
          <Route exact path="/">
            <Perfume />
          </Route>
          <Route>
            <h1>Page Not Found</h1>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
