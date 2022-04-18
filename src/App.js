import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Services from './Component/Service/Services';
import About from './Component/About/About';
import Detail from './Component/Detail/Detail'
import Notfound from './Component/Notfound/Notfound';
import Signin from './Component/Signin/Signin';
import Signup from './Component/Signup/Signup';
import Requireauth from './Component/Requireauth/Requireauth';
import Checkout from './Component/Checkout/Checkout';
import Blog from './Component/Blog/Blog';

function App() {
  return (
    <div >
      <Header></Header>


      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/services/:serviceID' element={<Detail></Detail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        {/* <Route path='/signout' element={<Signup></Signup>}></Route> */}
        <Route path='/checkout' element={
          <Requireauth>
            <Checkout></Checkout>
          </Requireauth>
        }></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>




      <Footer></Footer>


    </div>
  );
}

export default App;
