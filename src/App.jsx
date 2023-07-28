import Navbar from './components/Navbar';
import Home from './components/Home';
import Players from './components/Players';
import Features from './components/Features';
import Faq from './components/Faq';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';
import './App.css';
import Major from './components/Major';
import Games from './components/Games';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    //   <Routes>
    //   <Route
    //     exact
    //     path="/"
    //     element={
    //       <>
    //         <Home />
    //         <Feature />

    //         <Token />

    //         <Road />
    //         <Faq1 />
    //         {/* <Faq /> */}
    //         {/* <MouseFollow /> */}
    //       </>
    //     }
    //   />
    //   <Route exact path="/locker" element={<Locker />} />
    // </Routes>

    // <Routes>
    //   <Route exact path="/" element ={

    //   }>
    // </Routes>
    <>
      <Navbar />
      <Home />
      <Players />
      <Games />
      <Major />
      <Features />
      <Tokenomics />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
