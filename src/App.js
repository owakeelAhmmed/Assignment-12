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
import toast, { Toaster } from 'react-hot-toast';
import Dashboard from './Pages/Dashboard/Dashboard';
import Blogs from './Pages/Blogs/Blogs';
import MyOrder from './Pages/MyOrder/MyOrder';
import AddProduct from './Pages/AddProduct/AddProduct';






function App() {
    return (
      <section className='max-w-7xl mx-auto  '>
        <Toaster />
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
            <Route path="/dashboard" element={
            <RequireAuth>
              <Dashboard/>
            </RequireAuth>} >
              <Route index element={<MyOrder/>}/>
              <Route path="addproduct" element={<AddProduct/>}/>


            </Route>
            <Route>
              
            </Route>
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/*" element={<NotFound/>} />
          </Routes>
      </section>
    );
}

export default App;