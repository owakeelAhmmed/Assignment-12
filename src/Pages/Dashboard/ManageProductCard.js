import React from 'react';

const ManageProductCard = ({addproduct, addproducts, setAddProducts}) => {
        const {productimage, productname, price, quantity, description} = addproduct;


        const handleUserDelete = id => {
          console.log('deleted', id);
          const proceed = window.confirm('Are you sure you want to delete this item?')
          if (proceed) {
              console.log('delete id', id);
              const url = `https://agile-scrubland-82961.herokuapp.com/addproduct/${id}`;
              fetch(url, {
                  method: 'DELETE',
              })
                  .then(response => response.json())
                  .then(data => {
                    console.log(data)
                      if (data.deletedCount > 0) {
                          console.log("deleted");
                          const remaining = addproducts.filter(product => product._id !== id);
                          setAddProducts(remaining);
                      }
                  })
          }
      };







  return (
    <section className=''>
       <div class="card  bg-base-100 shadow-xl">
               
                <div class="card-body  text-center">
                  <img style={{width:'100px'}} className='mx-auto' src={productimage} alt="" />
                  <h2 class=" text-red-500 text-center mt-5">{productname}</h2>
                  <p>{description}</p>
                  <p>{price}</p>
                  <p>{quantity}</p>
                  <div class="card-actions justify-end">
                  <button onClick={() => handleUserDelete(addproduct._id)} class="btn btn-xs btn-error">Delet</button>
                  </div>
                </div>
            </div>
    </section>
  );
};

export default ManageProductCard;