import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
    const [products, setProducts] = useState([]);
   
    useEffect(() => {
      fetch('https://agile-scrubland-82961.herokuapp.com/product') 
            .then(Response => Response.json())
            .then(data => setProducts(data))

    },[]);



  return (
        <section className=' px-12'>
          <div className=''>
              <h1 className='text-4xl text-center text-primary font-bold  mb-5'>Available Product {products.length}</h1>

              <div className='grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                  products.map(product => 
                  <ProductCard 
                    product={product}
                    key={product._id}
                    
                  />)
                }
              </div>
          </div>
        </section>
  );
};

export default Product;