import Logo from "../assets/shared/logo.svg";

function Links() {
    return (
        <>
        <img src={Logo} alt="logo" />
            <hr></hr>
        <nav>
            <ul>
                <li><span>00</span>HOME</li>
                <li><span>01</span>DESTINATION</li>
                <li><span>02</span>CREW</li>
                <li><span>03</span>TECHNOLOGY</li>
            </ul>
        </nav>
        </>
    );
}

export default Links;