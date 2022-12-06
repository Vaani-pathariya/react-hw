import img from "./back.jpg"
import Nav from "./Nav";
import "./nav.css"
function App() {
  return (
    <div className="App">
      <Nav/>
      <img src={img}></img>
    </div>
  );
}

export default App;
