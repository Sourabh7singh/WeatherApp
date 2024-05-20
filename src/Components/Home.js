import React from 'react'
import FirstContainer from './FirstContainer';
import SecondContainer from './SecondContainer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  return (
    <div className="main-container">
      <ToastContainer/>
      <FirstContainer/>
      <SecondContainer/>
    </div> 
  )
}

export default Home
