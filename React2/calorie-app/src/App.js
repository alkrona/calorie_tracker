import api from "./api";
import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import RangeSlider from 'react-bootstrap-range-slider';
import Sidebar from "./sideBar";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Data from "./Data"
import Login from "./components/Login";
import DataEntry from "./DataEntry";
const App = () =>{
return(
    <div>
    <nav className='navbar navbar-dark bg-primary'> 
      <div className='container-fluid'>
        <a className='navbar-brand' href ='#'>
          Calorie App
        </a>
      </div>

    </nav>
    <BrowserRouter>
    <div className="d-flex">
      <div className="col-auto">
        <Sidebar/>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/data" element = {<DataEntry/>}></Route>
          <Route path="/history" element = {<Login/>}></Route>
        </Routes>
      </div>


    {/* <div className='container'>
      <form onSubmit={handleFormSubmit}>
        <div className='mb-3 mt-3'>
          <label htmlFor='date' className='form-label'>
            Date
          </label>
          <input type='text' className='form-control' id='date' name='date' onChange={handleInputChange} value={formData.date}/>
        </div>
        <div className='mb-3 mt-3'>
        <label htmlFor='date' className='form-label'>
            Find Calorie Count
          </label>
          <input type='text' placeholder="What did you eat today" className='form-control' id='calorieText' name='calorieText' onClick={handleCalorieTextClick.bind(null,calorieText.calorieText)} onChange={handleInputChangeCalorie} value={calorieText.calorieText}/>
          <button type="submit" onClick={handleCalorieCount} value={calorieText.calorieText} > Find Calories</button>
        </div>

        <div>
          calorie
        <RangeSlider name="calorie"

      value={formData.calorie}
      min={0}
      max ={3000}
      step = {1}
      variant="light"
      
      onChange={handleInputChange}
    />
    </div>
        <div>
          weight
        <RangeSlider name="weight"

      value={formData.weight}
      min={0}
      max ={150}
      step = {0.1}
      variant="light"
      onChange={handleInputChange}
    />
    </div>
        
        <button type='submit' id='submit' name='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div> */}
  </div>
  </BrowserRouter>
  </div>

  );
}


export default App;
function Home(){
  return <h2> Home</h2>
}
// function Data(){
//   return(<h2> Data</h2>
    
//   )
// }