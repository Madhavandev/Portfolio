import './App.css';
import "./assets/js/script";
import Header from './components/Header/Header';
import Newsletter from './components/Newsletter/Newsletter';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import WorkProcess from './components/WorkProcess/WorkProcess';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import TopScrollButton from './components/TopScrollButton';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />  
      <Services />
      <Work />
      <WorkProcess />
      <Newsletter />
      <About />
      <Contact />
      <TopScrollButton />
      <Footer />
    </div>
  );
}

export default App;
