import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import NavbarPage from "./common/nav/nav";
//import Footer from "./common/footer/footer";
import Header from "./components/header/header";
//import Faq from "./components/faq/faq";

function App() {
  return (
    <div className="App">
      <NavbarPage/>
      <Header/>
      
      
    </div>
  );
}

export default App;
