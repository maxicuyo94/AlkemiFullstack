import { Route } from "react-router";
import "./App.css";
import { AddTransaction } from "./components/AddTransaction";
import { LandingPage } from "./components/LandingPage";
import { ListTransaction } from "./components/ListTransaction";
import TopNavBar from "./components/TopNavBar";

function App() {
  return (
    <div>
      <TopNavBar />
      <div className="App pt-4 container-fluid ">
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/add">
          <AddTransaction />
        </Route>
        <Route exact path="/list/:filter">
          <ListTransaction />
        </Route>
        <Route exact path="/edit/:id">
          <ListTransaction />
        </Route>
      </div>
    </div>
  );
}

export default App;
