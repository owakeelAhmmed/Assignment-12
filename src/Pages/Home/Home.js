import React, { useEffect, useState } from 'react';
import Headder from './Headder';
import Footer from '../Footer/Footer';
import Summary from '../Summary/Summary';
import Reviews from '../Reviews/Reviews';
import { Link, useNavigate } from 'react-router-dom';
import ContactUs from '../Support/ContactUs';
import HomeCard from '../Home/HomeCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [homeproducts, setHomeproducts] = useState([]);
   
    useEffect(() => {
      fetch('https://agile-scrubland-82961.herokuapp.com/product') 
            .then(Response => Response.json())
            .then(data => setProducts(data))

    },[]);

    useEffect(() => {
        fetch('https://agile-scrubland-82961.herokuapp.com/addproduct')
            .then(Response => Response.json())
            .then(data => setHomeproducts(data))
    },[])




    
    return (
        <section className=''>
            <Headder/>
            <div className=''>
              <h1 className='text-3xl text-center text-primary font-bold mt-8 mb-16'>Tools</h1>
                    <div className='px-12'>
                    <div className='grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                        
                        {
                                products.slice(0,3).map(p => <div 
                                key={p._id}>
                                <div style={{height:"480px"}} className="shadow-xl ">
                                <div className="">
                                    <img  className='p-6 w-40 mx-auto' src={p.picture} />
                                </div>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-primary">{p.name}</h2>
                                    <p className='text-primary'>{p.description}</p>
                                    <p className='text-primary'>Price: {p.price}</p>
                                    <p className='text-primary'>Quantity: {p.quantity}</p>
    
                                </div>
                                   
                            </div> 
                        </div>)
                            }

                            {
                                homeproducts.map(hp => <HomeCard
                                key={hp._id}
                                hp={hp}
                                /> )
                            }
    
                        </div>
                            <Link to='/product'><div className="flex justify-center items-center mt-8">
                            <button className="btn btn-primary  "> See All</button>
                            </div></Link>
                    </div>
            </div>
            <Summary/>
            <Reviews/>
            <ContactUs/>
            <Footer/>
        </section>
    );
};

export default Home;