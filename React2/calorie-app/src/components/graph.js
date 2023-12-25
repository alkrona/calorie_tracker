import React,{useState,useContext} from "react";
import { LoginContext } from "../contexts/loginContext";
import api from "../api";
import Chart from 'chart.js/auto';
import WeightChart from "./WeightChart";
const Graph = () => {
    const [weight,setWeight]= useState([150, 155, 160, 165, 170, 175]);
    const [weight2,setWeight2]= useState([150, 155, 160, 165, 170, 175]);
    const {userID} = useContext(LoginContext);
    const handleGraphCalorieData = async(event) =>{
        console.log(`user_id:${userID}`)
        const response = await api.post('/retrive_calorie_data/',{"user_id":userID})
        setWeight(response.data)
        console.log(response)
    
    };
    const handleGraphWeightData= async(event) =>{
        console.log(`user_id:${userID}`)
        const response2 = await api.post('/retrive_weight_data/',{"user_id":userID})
        console.log(response2)
        setWeight2(response2.data)
        console.log(response2)
    
    };
    return(
        <>
        <div className="container">
           <h1>graph here</h1> 
           <button onClick={handleGraphCalorieData}>Show calorie data</button>
           <button onClick={handleGraphWeightData}>Show weight data</button>
           <WeightChart weights={weight}/>
           <WeightChart weights={weight2}/>
        </div>
        </>
    );
};
export default Graph