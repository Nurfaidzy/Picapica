import "./App.css";
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
      </div>
    </>
  );
}

export default App;
