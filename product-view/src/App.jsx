import "./App.scss";
import Card from "./components/ProductCard";
import Content from "./components/Content";

function App() {
  return (
    <Card>
      <Content
        category={"Perfume"}
        heading={"Gabrielle Essence Eau De Parfum"}
        description={
          "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
        }
      />
    </Card>
  );
}

export default App;
