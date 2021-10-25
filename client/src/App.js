import { Route } from "react-router";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { ListTransaction } from "./components/ListTransaction";
import TopNavBar from "./components/Nav";

function App() {
  return (
    <div>
      <TopNavBar />
      <div className="App pt-4 container-fluid ">
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/add">
          <h1>ADDD</h1>
        </Route>
        <Route exact path="/list/:filter">
          <ListTransaction/>
        </Route>
      </div>
    </div>
  );
}

export default App;
