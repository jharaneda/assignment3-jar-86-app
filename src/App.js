import ProductListJar86 from "./Components/ProductListJar86/ProductListJar86";
import CartJar86 from "./Components/CartJar86/CartJar86";
import HeaderJar86 from "./Components/HeaderJar86/HeaderJar86";
import { useState, useEffect } from "react";
import {
  getCartJar86,
  addItemJar86,
  removeItemJar86,
  checkout,
  getInventory,
  getTotals,
} from "./Components/ServicesJar86/inventoryServiceJar86";

function App() {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState({
    total: 0,
  });

  useEffect(() => {
    refreshPage();
  }, []);

  async function refreshPage() {
    setLoading(true);

    getCartJar86()
      .then((json) => {
        setCart(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });

    await getInventory()
      .then((json) => {
        setInventory(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });

    await getTotals()
      .then((json) => {
        setTotal(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  }

  return <div className="App">algo</div>;
}

export default App;
