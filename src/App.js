import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact-us";
import Diets from "./components/Diets";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Services from "./components/Services";
import Home from "./components/Home";
import SignUp from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignUp";
import Reset from "./components/Reset";
import Cards from "./components/Card";
import DashboardNav from "./components/Dashboard_Nav";
import Exercise from "./components/Exercise";
import Stores from "./components/Stores.js";
import Videocarosel from "./components/Videocarosel.js";
// import PrivacyPolicy from "./components/PrivacyPolicy";
import Exc from "./components/Exc";
import Exb from "./components/Exb";
import Exl from "./components/Exl";
import Exbs from "./components/Exbs";
import Mobile from "./components/Mobile";


function App() {
  return (
    <div className="App">
      <Router>
        <div className="app">
          <Switch>

        

          <Route path="/exb">
              <DashboardNav />
              <Exb />
              <Videocarosel />
              <Stores />
              <Footer />
            </Route>

            <Route path="/exbs">
              <DashboardNav />
              <Exbs />
              <Videocarosel />
              <Stores />
              <Footer />
            </Route>

            <Route path="/exl">
              <DashboardNav />
              <Exl />
              <Videocarosel />
              <Stores />
              <Footer />
            </Route>


            <Route path="/mobile">
              <Header />
              <Mobile />
              <Footer />
            </Route>

            <Route path="/exercises">
              <DashboardNav />
              <Exercise />
              <Stores />
              <Footer />
            </Route>

            <Route path="/ex">
              <DashboardNav />
              <Exc />
              <Videocarosel />
              <Stores />
              <Footer />
            </Route>

            <Route path="/reset">
              <Header />
              <Reset />
              <Stores />
              <Footer />
            </Route>

            <Route path="/register">
              <Header />
              <SignIn />
              <Stores />
              <Footer />
            </Route>

            <Route path="/dashboard">
              <DashboardNav />
              <Dashboard />
              <Stores />
              <Footer />
            </Route>

            
            <Route path="/premium">
              <Header />
              <SignUp />
              <Stores />
              <Footer />
            </Route>

            <Route path="/contact">
              <Header />
              <Contact />

              <Stores />
              <Footer />
            </Route>

            <Route path="/gallery">
              <Header />
              <Gallery />
              <Stores />
              <Footer />
            </Route>

            <Route path="/services">
              <Header />
              <Services />
              <Stores />
              <Footer />
            </Route>

            <Route path="/diets">
              <DashboardNav />
              <Diets />
              <Stores />
              <Footer />
            </Route>

            <Route path="/about">
              <Header />
              <About />
              <Cards />
              <Stores />
              <Footer />
            </Route>

            <Route path="/">
              
              <Header />
              <Home />
              <Stores />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
