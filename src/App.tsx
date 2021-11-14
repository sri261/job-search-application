import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import ListingPage from "./pages/ListingPage/ListingPage";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/listing" />
        </Route>
        <Route exact path="/listing">
          <ListingPage />
        </Route>
        <Route exact path="/details/:id">
          <DetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
