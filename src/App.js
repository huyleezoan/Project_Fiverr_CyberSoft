import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import ResultSearchCourses from "./pages/ResultSearchCourses/ResultSearchCourses";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/" component={Home} />
        <HomeTemplate exact path="/resultsearchcourses" component={ResultSearchCourses} /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
