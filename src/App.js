import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarPage from './common/nav/nav';
import Footer from './common/footer/footer';
import Header from './components/header/header';
import Faq from './components/faq/faq';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarPage />
        {/* <Switch>
        <Route path="/" exact component={Header} />
        </Switch> */}
        <Header />
        <Faq />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
