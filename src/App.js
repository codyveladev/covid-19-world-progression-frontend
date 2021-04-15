//Pages
import Main from "./Pages/Main";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Contributing from "./Pages/Contributing";
import VaccineByCountry from "./Pages/VaccineByCountry";
import TopTen from "./Pages/TopTen";
import VaccineInCountries from './Pages/VaccineInCountries'
import RawData from './Pages/RawData'
//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Context
import { DataProvider } from "./DataContext";

//Styling
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <Router>
        <Switch>
          <Route path="/" component={Main} exact></Route>
          <Route path="/about" component={About} exact></Route>
          <Route
            path="/vaccine-by-country"
            component={VaccineByCountry}
            exact
          ></Route>
          <Route
            path="/countries-with-most-vaccines"
            component={TopTen}
            exact
          ></Route>
          <Route
            path="/vaccines-in-countries"
            component={VaccineInCountries}
            exact
          ></Route>
          <Route
            path="/raw-data"
            component={RawData}
            exact
          ></Route>
          <Route
            path="/contact"
            component={Contact}
            exact
          ></Route>
          <Route
            path="/contributing"
            component={Contributing}
            exact
          ></Route>
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
