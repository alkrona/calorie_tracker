import api from "./api";
import React,{useState,useEffect} from 'react'

import RangeSlider from 'react-bootstrap-range-slider';
const App = () =>{
  const[dataEntries,setDataEntries] = useState([]);
  const[value,setValue] = useState(0);
  const[formData,setFormData]= useState({
    date:'',
    calorie:'',
    weight:''
  });
  const fetchDataEntries = async() => {
    const response = await api.get('/calorie_entry/');
    setDataEntries(response.data)
  };
  useEffect(() => {
    fetchDataEntries();
  },[]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:event.target.value,

    });
  };
  const handleFormSubmit = async(event) =>{
    event.preventDefault();
    await api.post('/calorieEntry/',formData);
    fetchDataEntries();
    setFormData({
      date:'',
      calorie:'',
      weight:''
    });
  };
  
  return(
    <div>
    <nav className='navbar navbar-dark bg-primary'> 
      <div className='container-fluid'>
        <a className='navbar-brand' href ='#'>
          Calorie App
        </a>
      </div>

    </nav>
    <div className='container'>
      <form onSubmit={handleFormSubmit}>
        <div className='mb-3 mt-3'>
          <label htmlFor='date' className='form-label'>
            Date
          </label>
          <input type='text' className='form-control' id='date' name='date' onChange={handleInputChange} value={formData.date}/>
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
    </div>
  </div>


  );
}


export default App;