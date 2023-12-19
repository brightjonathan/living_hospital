import { useState, useEffect } from 'react';
import './App.css';
import './Style/SearchStyling.css';
import { auth } from './Firebase-config';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NarBar from './Component/NarBar';
import Home from './Pages/Home';
import Birth from './Pages/Birth';
import Antenetal from './Pages/Antenetal';
import Search from './Pages/Search';
import About from './Pages/About';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import BirthDetails from './Component/BirthDetails';
import AntenetalDetails from './Component/AntenetalDetails';
import { SkeletonTheme } from 'react-loading-skeleton';
import PageNotFound from './Pages/PageNotFound';


const App = () => {

  const [ user, setuser ] = useState(null);
  const [ isAuth, setisAuth ] = useState(localStorage.getItem('AdminIsAuthorised'));

  //auth user with useEffect 
  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
     if (authUser){
       setuser(authUser);
     }else{
       setuser(null)
     }
    })
 },[user]);

  return ( 
    <SkeletonTheme>
      <ToastContainer />
      <NarBar/>
      <Routes>
        <Route path='/' element={ <Home /> } /> 
        <Route path='/dashboard' element={<Dashboard isAuth={isAuth} />} />
        <Route path='/birth_registration' element={<Birth isAuth={isAuth} />} />
        <Route path='/antenetal_registration' element={<Antenetal isAuth={isAuth} />} />
        <Route path='/search' element={<Search isAuth={isAuth} />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign_up' element={<SignUp setisAuth={setisAuth} />} />
        <Route path='/login' element={<Login setisAuth={setisAuth} setuser={setuser} />}/>
        <Route path='/birth_detail/:id' element={ <BirthDetails isAuth={isAuth} />} />
        <Route path='/antenetal_detail/:id' element={<AntenetalDetails isAuth={isAuth} /> } />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </SkeletonTheme> 
  )
}

export default App;


