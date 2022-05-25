import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Product from './Pages/Product/Product';
import Purchase from './Pages/Product/Purchase';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Navbar from './Pages/Shared/Navbar';

function App() {
    return (
      <section className='max-w-7xl mx-auto'>
         <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={
            <RequireAuth>
              <Product/>
            </RequireAuth>
            } />
            <Route path="/purchase/:id" element={
            <RequireAuth>
              <Purchase/>
            </RequireAuth>
            } />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/*" element={<NotFound/>} />
          </Routes>
      </section>
    );
}

export default App;