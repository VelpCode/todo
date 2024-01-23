import React from 'react'
import "./home.css"
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ReactComponent as YourIcon } from './undraw_fun-underline.svg';
import { ReactComponent as Sport } from './sport.svg';
import { ReactComponent as Blocks } from './blocks.svg';



const Home = () => {
  return (
    <div className = "home d-flex justify-center">
        <div className='continent'>
            <h1>Manage the boatload<br></br>of activities on your plate. <br></br></h1>
            <p>Elimate unnessary activies, stay on top of your goals and tasks<br></br>
            with the best activity tracker on the market    .</p>
            <Link to="/active" className="dudebutton">Add Activity <IoAddCircleOutline size={20} className="icon-vertical-adjust"/></Link>
            <YourIcon  className = "mamooty"/>
            <Sport className = "sport"/>
            <Blocks className = "block"/>
        </div>
    </div>
  )
};

export default Home;