import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login'
import Single from './pages/single/Single'
import New from './pages/new/New'
import List from './pages/list/List'
import ModeContext from './context';

import "./style/dark.scss"


function App() {
  const [dark, setDark] = useState(false)

  return (
    <ModeContext.Provider value={{ darkmode: setDark , dark}} >
      <div className={dark ? "app dark" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='products'>
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ModeContext.Provider>
  );
}

export default App;
