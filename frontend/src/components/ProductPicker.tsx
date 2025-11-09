// src/components/ProductPicker.tsx
import React, { useEffect, useState } from "react";
import ARViewer from "./ARViewer";

interface Product {
  _id: string;
  name: string;
  description: string;
  modelUrl: string;
  price: number;
}

const ProductPicker: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>🛍 AR Product Viewer</h1>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((product) => (
          <div
            key={product._id}
            onClick={() => setSelectedProduct(product)}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "8px",
              cursor: "pointer",
              width: "200px",
              textAlign: "center",
              boxShadow: selectedProduct?._id === product._id ? "0 0 10px #007bff" : "0 0 5px #ddd",
              transition: "0.2s",
            }}
          >
            <h3>{product.name}</h3>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>{product.description}</p>
            <p style={{ fontWeight: "bold" }}>₹{product.price}</p>
          </div>
        ))}
      </div>

      {/* Render selected product viewer */}
      <ARViewer product={selectedProduct} />
    </div>
  );
};

export default ProductPicker;
