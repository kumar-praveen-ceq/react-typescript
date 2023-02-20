import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Createpackage from './Components/Createpackage';
import './App.css';
import { ErrorMessageExample } from './Components/ErrorMessageExample';
import { FieldArrayComp } from './Components/FieldArrayComp';
import { Navbar } from './Components/Navbar';
import NewForm from './Components/NewForm';
import SignupForm from './Components/SignupForm';
import TwoFactorVerificationForm from './Components/TwoFactorVerificationForm';
import WithBootstrap from './Components/WithBootstrap';
import WithMaterialUI from './Components/WithMaterialUI';
import FieldArraObj from './Components/FieldArraObj';
import CreateForm from './Components/CreateForm';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<SignupForm/>}/>
          <Route path='/signup' element={<NewForm/>}/>
          <Route path='/errormessageexample' element={<ErrorMessageExample/>}/>
          <Route path='/fieldarraycomp' element={<FieldArrayComp/>}/>
          <Route path='/fieldarrayobject' element={<FieldArraObj/>}/>
          <Route path='/twostepverificationform' element={<TwoFactorVerificationForm/>}/>
          <Route path='/withMUI' element={<WithMaterialUI/>}/>
          <Route path='/withbootstrap' element={<WithBootstrap/>}/>
          <Route path='/Createpackage' element={<Createpackage/>}/>
          <Route path='/createform' element={<CreateForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
