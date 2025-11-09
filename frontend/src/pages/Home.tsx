import React, { useState } from 'react';
import ProductPicker from '../components/ProductPicker';
import ARViewer from '../components/ARViewer';
import { fetchProduct } from '../services/api';

const Home: React.FC = () => {
  const [productId, setProductId] = useState<string | null>(null);
  const [product, setProduct] = useState<any>(null);

  const handleSelect = async (id: string) => {
    setProductId(id);
    const p = await fetchProduct(id);
    setProduct(p);
  };

  return (
    <div style={{display:'flex',height:'100%'}}>
      <aside style={{width:320, borderRight:'1px solid #eee', padding:12}}>
        <h3>Products</h3>
        <ProductPicker onSelect={handleSelect} />
      </aside>
      <main style={{flex:1}}>
        {product ? (
          <ARViewer product={product} />
        ) : (
          <div style={{padding:20}}>Select product</div>
        )}
      </main>
    </div>
  );
};

export default Home;
