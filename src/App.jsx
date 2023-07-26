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

function App() {
  return (
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
