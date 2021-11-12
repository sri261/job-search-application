import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import ListingPage from "./pages/ListingPage/ListingPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/listing">
          <ListingPage />
        </Route>
        <Route path="/details">
          <DetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
