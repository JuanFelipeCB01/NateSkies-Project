import {Route, Routes as RouterDom } from 'react-router-dom';
import React from 'react'
import HomePage from '../pages/HomePage';
import BioPage from '../pages/BioPage';

export default function Routes() {
  return (
    <RouterDom>
     <Route path='/' element={<HomePage/>}></Route>
     <Route path='/bio' element={<BioPage/>}></Route>
    </RouterDom>
  )
}
