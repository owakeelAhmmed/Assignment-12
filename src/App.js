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
import MyOrder from './Pages/Dashboard/MyOrder';
import AllUsers from './Pages/Dashboard/AllUsers';
import Payment from './Pages/Dashboard/Payment';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyProfile from './Pages/Dashboard/MyProfile';







function App() {
    return (
      <section className='max-w-7xl mx-auto'>
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
            {/* Dashboard */}
            <Route path="/dashboard" element={
            <RequireAuth>
              <Dashboard/>
            </RequireAuth>} >
              <Route index element={<MyOrder/>}/>
              <Route path="addproduct" element={<AddProduct/>}/>
              <Route path="addreview" element={<AddReview/>}/>
              <Route path="myprofile" element={<MyProfile/>}/>
              <Route path="manageproduct" element={<ManageProducts/>}/>
              <Route path="payment/:id" element={<Payment/>}/>
              <Route path="alluser" element={<AllUsers/>}/>
            </Route>
            {/* Dashboard- end */}
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/*" element={<NotFound/>} />
          </Routes>
      </section>
    );
}

export default App;