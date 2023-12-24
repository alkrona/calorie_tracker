import { useState } from "react";
import BarChart from "./components/BarChart"
import { UserData } from "./UserData";
function Chart(){
    const[userData,setUserData] = useState({
        labels:UserData.map((data)=>data.year) ,
        datasets: [{
            label:"Users Gained",
            data: UserData.map(data=>data.userGain),
            backgroundColor: ["red"],
            borderColor: "black",
            borderWidth:2,

        },]
    })
    return (
        <div className="Chart">
            <div style={{width :700}}>
            <BarChart chartData={userData}/>
            </div>
        </div>
    );
}
export default Chart