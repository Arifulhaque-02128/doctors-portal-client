import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import MySkill from './Components/About/MySkill';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <NavBar></NavBar>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <NavBar></NavBar>
          <br/><br/>
          <Fade left>
              <About></About>
              <MySkill></MySkill>
          </Fade>
          <Footer></Footer>
        </Route>
        <Route path='/projects'>
          <NavBar></NavBar>
          <br/><br/>
          <Fade left>
              <Projects></Projects>
          </Fade>
          <Footer></Footer>
        </Route>
        <Route path='/blog'>
          <Blog></Blog>
        </Route>
        <Route path='/contact'>
          <NavBar></NavBar>
          <br/><br/>
          <Flip left>
            <Contact></Contact>
          </Flip>
          <Footer></Footer>
        </Route>
        <Route exact path='/'>
          <NavBar></NavBar>
          <Home></Home>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
