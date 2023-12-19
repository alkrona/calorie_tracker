import React  from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'
function Sidebar(){
    return (
        <div className="d-flex flex-column">
            <a href="d-flex align-items-center bg-dark text-white">
                <i className="bi bi-bootstrap fs-5 me-2"></i>
                <span className="fs-4">Sidebar</span>
            </a>
            <hr className="text-secondary"/>
            <ul className="nav nav-pills flex-column"> 
                <li className="nav-item">
                    <a href="" className="nav-link">
                        <i className="bi bi-speedometer me-2 fs-5 text-white"></i>
                        <span className="fs-5">Data Entry</span>
                    </a>
                    </li>            

            </ul>
        </div>
    )
}
export default Sidebar