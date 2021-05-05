import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router"
import HowItWorks from "./HowItWorks";


function App() {
  return (
<>
      <NavBar />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/HowItWorks" component={HowItWorks} />
      </Switch>
      

    </>


   
      
      
    
  );
}

export default App;
