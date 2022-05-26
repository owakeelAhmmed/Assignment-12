import React from 'react';
import Product from '../Product/Product';
import Headder from './Headder';
import Footer from '../Footer/Footer';
import Summary from '../Summary/Summary';

const Home = () => {
    
    return (
        <section className=' '>
            <Headder/>
            <Product/>
            <Summary/>
            <Footer/>
        </section>
    );
};

export default Home;