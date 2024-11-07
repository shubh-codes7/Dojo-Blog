import { Link } from "react-router-dom";
import React from 'react';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo">
                <Link to='/' className="logo-link"><h1>dojo-blog</h1></Link>
            </div>
            <ul className="nav-items">
                <li style={{
                    color: "white",
                    backgroundColor: "red",
                    borderRadius: "5px",
                    padding: "4px 8px",
                    
                    }}><Link to="/create">New Blog</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;