import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import Reviews from './Components/Reviews';
import Cart from './Components/Cart';
import ProductsList from './Components/ProductsList';
import Product_Details  from './Components/Product_Details';
import Admin from './Components/Admin';
import CRUD from './Components/CRUD';
import AdminsOperations from './Components/AdminsOperations';
// import Footer from './Components/Footer';


function App() {
  return (
  <>
 <div className="main-content" id='app'>
  <main>
  <Navbar></Navbar>
  <Routes>
    <Route path='' element={<Home></Home>}> </Route>
    <Route path='/' element={<ProductsList></ProductsList>}> </Route>
    <Route path="/Product_Details" element={<Product_Details />} />
    <Route path="/Product_Details/:id" element={<Product_Details />} />
    <Route path='/about' element={<About></About>}> </Route>
    <Route path='/cart' element={<Cart></Cart>}> </Route>
    <Route path='/contact' element={<ContactUs></ContactUs>}> </Route>
    <Route path='/reviews' element={<Reviews></Reviews>}> </Route>
    <Route path='/admin' element={<Admin></Admin>}> </Route>
    <Route path='/crud' element={<CRUD></CRUD>}> </Route>
    <Route path='/Admins_Operations' element={<AdminsOperations></AdminsOperations>}> </Route>
  </Routes>
  {/* <Footer></Footer> */}
  </main>

  </div>
  </>
  
    );
}

export default App;
