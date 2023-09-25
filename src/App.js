import './App.css';
import Home from "./components/Home";
import About from "./components/About";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
