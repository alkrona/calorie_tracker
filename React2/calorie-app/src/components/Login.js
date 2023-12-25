import React  from "react";
import api from "../api";
import { useState,useContext } from "react";
import { LoginContext } from "../contexts/loginContext";
const Login = ()=>{
    const {setUserID} = useContext(LoginContext);
    const[formData,setFormData]= useState({
        name:'',
        password:'',
        email:''
      });
    
      const handleInputChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]:event.target.value,
    
        });
      };
      const handleFormSubmit = async(event) =>{
        console.log("hahah")
        event.preventDefault();
        const responseData = await api.post('/get_user_id/',formData);
        const { data } = responseData;
        const { user_id } = data;
        setUserID(user_id
        );
        // Assuming responseData is an object with a "data" property
          // containing the "user_id"
      }
      const handleNewUser = async(event) =>{
        event.preventDefault();
        await api.post('/create_user/',formData);
        console.log("new user created")
      }    
        
      
    return(
        <>
        <div className="container">
            <form>
            <input type="text" className="form-control" name="name" id="name" placeholder="name" onChange={handleInputChange} value={formData.name}></input>
            <input type="text" className="form-control" name="password" id="password" placeholder="password" onChange={handleInputChange} value={formData.password}></input>
            <input type="text" className="form-control" name="email" id="email" placeholder="email"  onChange={handleInputChange} value={formData.email}></input>
            <button type="submit" onClick={handleFormSubmit} >Login</button>
            <button type="submit" onClick={handleNewUser}>Register New User</button>
            </form>
            
        </div>
        </>




    )
}
export default Login