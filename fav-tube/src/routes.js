import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Watch from './pages/Watch/Watch';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Search from './pages/Search/Search';

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/watch/:id' element={<Watch/>} ></Route>
            <Route path='/search' element={<Search/>}></Route>
            <Route path='*' element={<PageNotFound/>} ></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
