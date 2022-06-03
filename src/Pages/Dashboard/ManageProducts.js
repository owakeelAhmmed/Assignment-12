import React, { useEffect, useState } from 'react';
import ManageProductCard from './ManageProductCard';

const ManageProducts = () => {
    const [addproducts, setAddProducts] = useState([]);
      console.log(addproducts)
    useEffect(() =>{

      fetch('https://agile-scrubland-82961.herokuapp.com/addproduct')
            .then(Response => Response.json())
            .then(data => setAddProducts(data))



    },[])
 




  return (
    <section className='px-8 mt-10'>   
      
        <div className='grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            addproducts.map(addproduct  => <ManageProductCard
              addproducts={addproducts}
            setAddProducts={setAddProducts}
            addproduct={addproduct}
            key={addproduct._id}>
          </ManageProductCard>)
          }
        </div>
    </section>
  );
};

export default ManageProducts;