import React  from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from "react-router-dom";
function Sidebar(){
    return (
        <div className="sidebar d-flex flex-column justify-content-space-between bg-dark text-white p-4">
            <div>
            <a href="d-flex align-items-center ">
                <i className="bi bi-bootstrap fs-5 me-2"></i>
                <span className="fs-4">Sidebar</span>
            </a>
            <hr className="text-secondary"/>
            <ul className="nav nav-pills flex-column p-0 m-0"> 
                <li className="nav-item p-1">
                    <Link to="/data" className="nav-link text-white">
                        <i className="bi bi-speedometer me-2 fs-5 text-white"></i>
                        <span className="fs-5">Data Entry</span>
                    </Link>
                    </li>
                <li className="nav-item p-1">
                    <Link to="/history" className="nav-link text-white">
                        <i className="bi bi-grid me-2 fs-5 text-white"></i>
                        <span className="fs-5">Track Record</span>
                    </Link>
                    </li> 
                <li className="nav-item p-1">
                    <Link to="/" className="nav-link text-white">
                        <i className="bi bi-people me-2 fs-5 text-white"></i>
                        <span className="fs-5">Food Finder</span>
                    </Link>
                    </li>                    

            </ul>
            </div>
            <div>
                <hr className="text-secondary"/>
                    <i className="bi bi-person fs-5"></i>
                    <span>Kiran</span>
                
            </div>
        </div>
    )
}
export default Sidebar