import Logo from "../../assets/shared/logo.svg";
import Navlinks from "../navigation/Nav-links";
import MobileNav from "./Mobile-nav";

function Navigation() {
    return (
        <header className="menu__container">
            <img src={Logo} alt="logo" />
            <hr className="line__nav"></hr>
            <nav className="links__container">
             <Navlinks />
                <MobileNav />
            </nav>
        </header>
    );
}

export default Navigation;