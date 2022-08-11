import './App.css';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import Options from './components/Options/Options';
import Reasons from './components/Reasons/Reasons';
import Sizes from './components/Sizes/Sizes';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Options />
      <Reasons />
      <Sizes />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
