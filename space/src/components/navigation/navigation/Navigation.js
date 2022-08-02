import Logo from "../../../assets/shared/logo.svg";
import Navlinks from "../Nav-links";

function Navigation() {
    return (
        <header className="menu__container">
            <img src={Logo} alt="logo" />
            <hr className="line__nav"></hr>
            <nav className="links__container">
             <Navlinks />
            </nav>
        </header>
    );
}

export default Navigation;