import React, {useEffect} from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import { GET_NEWS } from './actions/actions';
import { useDispatch,useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
   const category = useSelector(({ category }) => category)
  useEffect(()=>{
    dispatch(GET_NEWS(category))
  },[category])
  return (
    <div className="wrapper">
      <MainPage></MainPage>
    </div>
  );
}

export default App;
