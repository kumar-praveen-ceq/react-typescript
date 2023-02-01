import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';

import Nav from './components/Nav';
import Order from './components/Order-summary';
import NotFound from './components/NotFound';
import Product from './components/Product';
import Featured from './components/Featured';
import New from './components/New';
import Profile from './components/Profile';
import { AuthProvider } from './components/auth';
import Login from './components/Login';
import { RequireAuth } from './components/RequireAuth';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
const LazyAbout=React.lazy(()=>import('./components/About'))

function App() {
  return(
    <AuthProvider>
    <Nav></Nav>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<React.Suspense fallback='Loading...'><LazyAbout/></React.Suspense>}/>
      <Route path="/order" element={<Order/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      <Route path="/product" element={<Product/>}>
        {/* <Route index element={<Featured/>}/> */}
        <Route path='featured' element={<Featured/>}></Route>
        <Route path='new' element={<New/>}></Route>
      </Route>
      <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path="/user" element={<Users/>}>
        <Route path=":userId" element={<UserDetails/>}/>
      </Route>
      {/* <Route path="/user/:userId" element={<UserDetails/>}/> */}
    </Routes>
    </AuthProvider>
  )
  
}

export default App;
