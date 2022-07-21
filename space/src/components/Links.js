import Logo from "../assets/shared/logo.svg";

function Links() {
    return (
        <header className="menu__container">
        <img src={Logo} alt="logo" />
            <hr></hr>
        <nav className="links__container">
            <ul>
                <li><span>00</span> HOME</li>
                <li><span>01</span> DESTINATION</li>
                <li><span>02</span> CREW</li>
                <li><span>03</span> TECHNOLOGY</li>
            </ul>
        </nav>
        </header>
    );
}

export default Links;