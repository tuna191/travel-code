import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App';


import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Map from './routes/Map'
import Login from './routes/Login'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Map' element={<Map />} />
          <Route path='/Contact' element={<Contact />} />

        </Route>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

