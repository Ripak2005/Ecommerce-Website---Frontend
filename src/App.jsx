/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Verify from './pages/Verify';
import { UserData } from './context/UserContext';
import Loader from './components/Loader';
import Account from './pages/Account';
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import OrderSuccess from './pages/OrderSuccess';
import Orders from './pages/Orders';
import OrderPage from './pages/OrderPage';
import Dashboard from './Admin/Dashboard';

const App = () => {
  const {loading, isAuth, user} = UserData()
  return (
   <>
    {loading ? (<Loader/>) : (<BrowserRouter>
    <Header isAuth = {isAuth}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/products' element={<Product/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/login' element={isAuth ? <Home/>:<Login/>}/>
        <Route path='/account' element={isAuth?<Account user={user}/>:<Login/>}/>
        <Route path='/checkout' element={isAuth?<Checkout/>:<Login/>}/>
        <Route path='/payment/:id' element={isAuth?<Payment/>:<Login/>}/>
        <Route path='/ordersuccess' element={isAuth?<OrderSuccess/>:<Login/>}/>
        <Route path='/order/:id' element={isAuth?<OrderPage/>:<Login/>}/>
        <Route path='/admin/dashboard' element={isAuth?<Dashboard user={user}/>:<Login/>}/>
        <Route path="/order" element={isAuth ? <Orders /> : <Login />} />
        <Route path='/cart' element={isAuth?<Cart/>:<Login/>}/>
        <Route path='/register' element={isAuth ? <Home/>:<Register/>}/>
        <Route path='/verify' element={isAuth ? <Home/>:<Verify/>}/>
      </Routes>
    </BrowserRouter>)}
   </>
  )
}

export default App
