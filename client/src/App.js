import { Route } from "react-router";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import TopNavBar from "./components/Nav";

function App() {
  return (
    <div>
      <TopNavBar />
      <div className="App container-fluid">
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/add">
          <h1>ADDD</h1>
        </Route>
        <Route exact path="/list/:filter">
          <h1>filter</h1>
        </Route>
      </div>
    </div>
  );
}

export default App;
