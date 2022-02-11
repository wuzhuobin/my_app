import "./App.css";
import React from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import Context from "./store";

function App() {
  const [cartVisible, setCartVisible] = React.useState(false);
  const { cart } = React.useContext(Context);
  return (
    <div className="App">
      <Context.ContextProvider>
        <Header onCartButtonClick={() => setCartVisible(true)}></Header>
        {cartVisible && (
          <Cart onCloseButtonClick={() => setCartVisible(false)}></Cart>
        )}
        <main>
          <Meals />
        </main>
      </Context.ContextProvider>
    </div>
  );
}

export default App;
