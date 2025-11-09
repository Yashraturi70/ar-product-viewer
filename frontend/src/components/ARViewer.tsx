// src/components/ARViewer.tsx
import React from "react";
import ModelViewer from "./ModelViewer";

interface Product {
  _id: string;
  name: string;
  description: string;
  modelUrl: string;
  price: number;
}

interface ARViewerProps {
  product: Product | null;
}

const ARViewer: React.FC<ARViewerProps> = ({ product }) => {
  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Select a product to view in AR</h2>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "1rem", textAlign: "center" }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <ModelViewer src={product.modelUrl} alt={product.name} />
      <p style={{ marginTop: "1rem", fontWeight: "bold" }}>
        💰 Price: ₹{product.price}
      </p>
    </div>
  );
};

export default ARViewer;
