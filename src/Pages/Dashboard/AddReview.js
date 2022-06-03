import React from 'react';
import toast from 'react-hot-toast';

const AddReview = () => {


  const handleAddReview = event => {
    event.preventDefault();
    const photo = event.target.photourl.value;
    const name = event.target.name.value;
    const description = event.target.description.value; 
    const rating = event.target.rating.value; 

    
    const addreview = {photo, name, description, rating};
    //send data to the server
    fetch('https://agile-scrubland-82961.herokuapp.com/reviews', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify(addreview)

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


      <form onSubmit={handleAddReview} className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto mt-12 bg-gray-100">
              <div className="card-body">
                
                <div className="form-control">
                  <input type="text" id='photourl' placeholder="Your Photo Url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <input type="text" id='name' placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <textarea type="text" id="description" class="textarea" placeholder="Your Description"></textarea>
                </div>
                <div className="form-control">
                <input type="text" id="rating" className="input input-bordered" placeholder="Rating"></input>
                </div>
                
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Add Review</button>
                </div>
              </div>
            </form>
    </section>
  );
};

export default AddReview;