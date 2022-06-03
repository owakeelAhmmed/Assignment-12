import React from 'react';
import img from '../../Images/contact.jpg'
const ContactUs = () => {
  return (
    <section className='  mt-14 mb-14 px-12'>
              <h1 className='text-center text-primary font-bold text-4xl  mb-8'>
                Contact Us
              </h1>
        <div className=' border border-gray-200 p-10 drop-shadow-2xl flex justify-between'>
          <div>
              <div className="card  border-gray-200 drop-shadow-xl">
                <div className="card-body">

                  <div className='flex mb-4 justify-between gap-3'>
                      <div >
                          <input type="text" placeholder="Type First Name" className="input border-gray-200 mb-4  input-bordered w-full max-w-xs" />
                          <input type="text" placeholder="Type Last Name" className="input border-gray-200  input-bordered w-full max-w-xs" />
                      </div>
                      
                      <div>
                        <input type="text" placeholder="Type Your Email" className="input border-gray-200 mb-4 input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type Your Phone Number" className="input border-gray-200  input-bordered w-full max-w-xs" />
                      </div>
                  </div>
                      <textarea className="textarea max-w-lg border-gray-200" placeholder="Your Message"></textarea>

                  <div className="card-actions mt-4 justify-center">
                    <button className="btn btn-primary">submit</button>
                  </div>
                </div>
              </div>
            </div>

          <div>
          <img src={img} alt="Shoes" className="rounded-xl w-96" />
          </div>
        </div>
    </section>
  );
};

export default ContactUs;