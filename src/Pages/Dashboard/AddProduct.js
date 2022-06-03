import React from 'react';
import toast from 'react-hot-toast';

const AddProduct = () => {



  

  const handleAddProduct = event => {
    event.preventDefault();
    const productimage = event.target.productimage.value;
    const productname = event.target.productname.value;
    const price = event.target.price.value; 
    const quantity = event.target.quantity.value; 
    const description = event.target.description.value; 

    
    const addproduct = {productimage, productname, price, quantity, description};
    //send data to the server
    fetch('https://agile-scrubland-82961.herokuapp.com/addproduct', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify(addproduct)

    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            
            toast.success('Add Successfully')
            event.target.reset();
            
    })
}






  return (
    <section >
      <h1 className='text-4xl'>Add Your Product </h1>


      <form onSubmit={handleAddProduct} className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto mt-12 bg-gray-100">
              <div className="card-body">
                
                <div className="form-control">
                  <input type="text" id='productimage' placeholder="Product Url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <input type="text" id='productname' placeholder="Product Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <input type="text" id='price' placeholder="Price" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                  <input type="number" id='quantity' placeholder="Quantity" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                <textarea type="text" id="description" class="textarea" placeholder="Your Description"></textarea>
                </div>
               
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Add Product</button>
                </div>
              </div>
            </form>
    </section>
  );
};

export default AddProduct;