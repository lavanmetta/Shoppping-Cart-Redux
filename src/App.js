import "./App.css";
import Badge from "./components/ShoppingCart/Badge";
import Card from "./components/ShoppingCart/Card";

function App() {
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Badge />
      <Card />
    </div>
  );
}

export default App;
