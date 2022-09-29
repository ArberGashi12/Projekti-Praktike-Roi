import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <Link to="/Login" style={{textDecoration: "none", backgroundColor: "#f6c800", borderRadius: "8px", color: "black", marginLeft: "555px", marginRight:"70px"}}><span1>Login</span1></Link>
                <Link to="" style={{textDecoration: "none", backgroundColor: "#f6c800", borderRadius: "8px", color: "black"}}><span1>Register</span1></Link>
            </div>
        </div>
    )
}

export default Header