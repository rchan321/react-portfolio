import React from "react";
import ReactDOM from "react-dom";

import Navigation from "../../components/Navigation";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
import Contact from '../../components/Contact';
import Resume from '../../components/Resume';

const routes = {
    "/user": () => <Users />,
    "/about": () => <About />,
    "/contact": () => <Contact />
  };
  
  function App() {
    const routeResult = useRoutes(routes);
    return (
      <div className="App">
        <A href="/user">Users Page</A>
        <A href="/about">About Page</A>
        <A href="/contact">Contacts Page</A>
        {routeResult}
      </div>
    );
  }
  
const routes = {
    "/user": () => <Users />,
    "/about": () => <About />,
    "/contact": () => <Contact />
  };



export default Header;