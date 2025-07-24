import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portofolio';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
<div>
        <Navbar />
      <About />
      <Portfolio />
      <Contact />
</div>
    </div>
  );
}

export default App;