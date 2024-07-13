import Products from "./products/products";
import { Context } from "./context/context";
import { useState } from "react";


function App() {
  
  return (
    <>
      <Context.Provider value={1}>
        <Products />
      </Context.Provider>
    </>
  );
}

export default App;
