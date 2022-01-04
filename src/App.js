import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import ResultSearchCourses from "./pages/ResultSearchCourses/ResultSearchCourses";
import MarketplaceWorks from "./pages/MarketplaceWorks/MarketplaceWorks";
import DetailCourse from "./pages/DetailCourse/DetailCourse";
import DetailUser from "./pages/DetailUser/DetailUser";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/" component={Home} /> 
        <Route exact path="/search" component={ResultSearchCourses} />
        <Route exact path="/marketplace" component={MarketplaceWorks} />
        <Route exact path="/detailcourse/:id" component={DetailCourse} />
        <Route exact path="/detailuser" component={DetailUser} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
