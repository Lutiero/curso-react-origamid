import Home from "./components/Home.jsx";
import Product from "./components/Product.jsx";

const App = () => {
  const {pathname} = window.location;
  let Component;
  if (pathname === "/home") {
    Component = Home;
  } else {
    Component = Product;
  }

  return (
    <>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/products">Produtos</a></li>
      </ul>
      <Component />
    </>
  )
}

export default App;
