// src/App.tsx
import React from "react";
import ProductPicker from "./components/ProductPicker";

const App: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <ProductPicker />
    </div>
  );
};

export default App;
