import Logo from "../assets/shared/logo.svg";
import {Link} from "react-router-dom";

function Links() {
    return (
        <header className="menu__container">
        <img src={Logo} alt="logo" />
            <hr></hr>
        <nav className="links__container">
            <ul>
                <Link to="/" ><li><span>00</span> HOME</li></Link>
                <Link to="/destination"><li><span>01</span> DESTINATION</li></Link>
                <Link to="/crew"><li><span>02</span> CREW</li></Link>
                <Link to="/technology"><li><span>03</span> TECHNOLOGY</li></Link>
            </ul>
        </nav>
        </header>
    );
}

export default Links;