import React, {useEffect} from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import SearchPage from './pages/SearchPage/SearchPage';
import { GET_NEWS } from './actions/actions';
import { useDispatch,useSelector } from 'react-redux';
import {Routes, Route, useNavigate} from "react-router-dom"

function App() {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate()
  const category = useSelector(({ category }: {category:string}) => category)
  useEffect(()=>{
    dispatch(GET_NEWS(category,1))
    navigate(`/${category}`)
  }, [category])
 
  return (

    <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/:category" element={<MainPage/>}></Route>
      <Route path="/search" element={<SearchPage/>}></Route>
    </Routes>
    
  );
}

export default App;
