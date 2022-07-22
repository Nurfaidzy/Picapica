import "./App.css";
import Footer from "./Components/Footer";
import Jumbotron from "./Components/Jumbotron";
import Navbar from "./Components/Navbar";
import Poke from "./Components/Poke";

function App() {
  return (
    <>
      <div className="p-[5%] bg-yellow-300">
        <Navbar />
        <Jumbotron />
        <Poke />
        <Footer />
      </div>
    </>
  );
}

export default App;
