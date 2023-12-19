import api from "./api";
import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import RangeSlider from 'react-bootstrap-range-slider';

const DataEntry =()=>{

    const[dataEntries,setDataEntries] = useState([]);
    const[value,setValue] = useState(0);
    const[calorieText,setCalorieText]=useState({});
    const[formData,setFormData]= useState({
      date:new Date().toDateString(),
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
    const handleInputChangeCalorie = (event) => {
      setCalorieText({
        ...calorieText,
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
    const handleCalorieTextClick = (e) => {
      if (e === "What all did you eat today") {
        setCalorieText((calorieText) => ({
          ...calorieText,
          calorieText: '',
        }));
      }
    };
    
    const handleCalorieCount = async (event) => {
      event.preventDefault();
      console.log(calorieText);
    
      try {
        
        const calorie_response = await api.post('/calorie_count/',{"food_description": calorieText.calorieText})
        console.log(calorie_response.data.calories);
        setCalorieText(calorieText => ({
          ...calorieText,
          calorieText: String(calorie_response.data.calories),
  
        }));
        setFormData(formData =>({
          ...formData,
          formData :String(calorie_response.data.calories) ,
    
        }));
  
  
  
        
  
      } catch (error) {
        console.error("Error in handleCalorieCount:", error);
      }
    };
    return(
        <div className='container'>
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
    </div>
    )
}

export default DataEntry;