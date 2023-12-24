import React  from "react";

const Login = ()=>{
    return(
        <>
        <div className="container">
            <form>
            <input placeholder="name"></input>
            <input placeholder="password"></input>
            <input placeholder="email"></input>
            <button type="submit">Login</button>
            <button type="submit">Register New User</button>
            </form>
        </div>
        </>




    )
}
export default Login