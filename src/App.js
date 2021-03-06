import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blogs from './Pages/Home/Blogs';
import Login from './Pages/Login/Login';
import Purches from './Pages/Pueches/Purches';
import Footer from './Pages/Shared/Footer';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddRatings from './Pages/Dashboard/AddRatings';
import Payment from './Pages/Dashboard/Payment';
import MyPortdolio from './Pages/MyPortdolio';



function App() {
  return (
    <div className='max-w-10xl mx-auto '>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blogs />} />
        <Route path="portfolio" element={<MyPortdolio></MyPortdolio>} />

        <Route path="purches" element={
          <RequireAuth>
            <Purches></Purches>
          </RequireAuth>
        } />

        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddRatings></AddRatings>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>



          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>




        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

      </Routes>




      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
