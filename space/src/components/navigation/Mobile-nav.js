import Navlinks from "./Nav-links";
import hamburger from "../../assets/shared/icon-hamburger.svg";

function MobileNav() {
    return (
        <nav className="mobile-nav">
            <img src={hamburger} alt="menu-mobile" />
        <Navlinks />
        </nav>
    );
}

export default MobileNav;