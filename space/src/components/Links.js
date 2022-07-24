import Logo from "../assets/shared/logo.svg";
import {NavLink} from "react-router-dom";

function Links() {
    return (
        <header className="menu__container">
        <img src={Logo} alt="logo" />
            <hr className="line__nav"></hr>
        <nav className="links__container">
            <ul>
                <NavLink to="/" ><li><span>00</span> HOME</li></NavLink>
                <NavLink to="/destination"><li><span>01</span> DESTINATION</li></NavLink>
                <NavLink to="/crew"><li><span>02</span> CREW</li></NavLink>
                <NavLink to="/technology"><li><span>03</span> TECHNOLOGY</li></NavLink>
            </ul>
        </nav>
        </header>
    );
}

export default Links;