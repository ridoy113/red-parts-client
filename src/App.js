import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blogs from './Pages/Home/Blogs';
import Login from './Pages/Login/Login';
import Purches from './Pages/Pueches/Purches';
import Footer from './Pages/Shared/Footer';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div className='max-w-10xl mx-auto '>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blogs />} />
        <Route path="purches" element={
          <RequireAuth>
            <Purches></Purches>
          </RequireAuth>
        } />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

      </Routes>




      <Footer></Footer>
    </div>
  );
}

export default App;
