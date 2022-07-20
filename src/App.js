import "./App.css";
import Jumbotron from "./Components/Jumbotron";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="p-[5%] bg-yellow-300">
        <Navbar />
        <Jumbotron />
      </div>
    </>
  );
}

export default App;
