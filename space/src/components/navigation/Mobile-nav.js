import Navlinks from "./Nav-links";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg"
import {useState} from "react";

function MobileNav() {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <img  className="mobile-nav__img__hamburger"
                            src={hamburger}
                            alt="menu mobile"
                            onClick={() => setOpen(true)}
                            />

    const closeIcon = <img  className="mobile-nav__img__close"
                            src={close}
                            alt="menu mobile close"
                            onClick={() => setOpen(false)}
                            />

    return (
        <nav className="mobile-nav">
            {open ? closeIcon : hamburgerIcon}
            {open && <Navlinks />}
        </nav>
    );
}

export default MobileNav;