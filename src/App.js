import React from 'react';
import {Route,Routes,Navigate} from 'react-router-dom'

//component
import SignUp from './component/SignUp';
import Login from './component/Login';

function App() {
  return (
   <>
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/' element={<Navigate to='/signup'/>}/>
      </Routes>
   </>
  );
}

export default App;
