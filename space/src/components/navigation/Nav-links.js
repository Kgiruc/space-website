import {NavLink} from "react-router-dom";

function Navlinks() {
    return (
        <ul>
            <NavLink to="/" ><li><span>00</span> HOME</li></NavLink>
            <NavLink to="/destination"><li><span>01</span> DESTINATION</li></NavLink>
            <NavLink to="/crew"><li><span>02</span> CREW</li></NavLink>
            <NavLink to="/technology"><li><span>03</span> TECHNOLOGY</li></NavLink>
        </ul>
    );
}

export default Navlinks;