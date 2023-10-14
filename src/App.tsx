import React, {useEffect} from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import { GET_NEWS } from './actions/actions';
import { useDispatch,useSelector } from 'react-redux';
import {Routes, Route, useNavigate} from "react-router-dom"



function App() {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate()
   const category = useSelector(({ category }) => category)
  useEffect(()=>{
    dispatch(GET_NEWS(category,1))
    navigate(`/${category}`)
  }, [category,1])
  // useEffect(()=>{
    
  // }, [category,navigate])
  return (

    <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/:category" element={<MainPage/>}></Route>
    </Routes>
    
  );
}

export default App;
