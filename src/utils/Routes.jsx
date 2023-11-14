import {Route, Routes as RouterDom } from 'react-router-dom';
import React from 'react'
import HomePage from '../pages/HomePage';
import BioPage from '../pages/BioPage';
import MerchPage from '../pages/MerchPage';
import ClipsPage from '../pages/ClipsPage';

export default function Routes() {
  return (
    <RouterDom>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/bio' element={<BioPage/>}></Route>
        <Route path='/merch' element={<MerchPage/>}/>
        <Route path='/videoclips' element={<ClipsPage/>}/>
    </RouterDom>
  )
}
