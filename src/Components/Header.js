import React from "react";
import '../Css/Styles.css';
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <>
    <div className="header">
        <nav>
            <ul id='menu'>
                <Link to="/">Home</Link>
                <Link to="/Services">Services</Link>
            </ul>
        </nav>
    </div>
       </>
    );
}
export default Header;  
