import Logo from "../../assets/shared/logo.svg";
import MobileNav from "./Mobile-nav";
import NavBar from "./NavBar";

function Navigation() {
    return (
        <header className="menu__container">
            <img src={Logo} alt="logo" />
            <hr className="line__nav"></hr>
            <NavBar />
            <MobileNav />
        </header>
    );
}

export default Navigation;