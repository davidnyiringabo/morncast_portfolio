import "./navbar.css"
import {Link} from "react-router-dom"
import logoimg from "/logo.png"
const Navbar = ()=>{
        return(
            <div  className="navbar">
                <div className="left-logo">
                    <img src={logoimg}/>
                    <h4>Morncast</h4>
                </div>
                <div className="right-navbar-content">
                    <Link to={"/"} className="navbar-link"><button type="button">Home</button></Link>
                    <Link to={"/about"}  className="navbar-link"><button type="button">About Us</button></Link>
                    <Link to={"/services"}  className="navbar-link"><button type="button">Services</button></Link>
                    <Link to={"/news"}  className="navbar-link"><button type="button">News</button></Link>
                    <Link to={"/contact"}  className="navbar-link"><button type="button" style={{border:'1px solid #42BDEC'}}>Contact us</button></Link>

                </div>
            </div>
        )
}

export default Navbar