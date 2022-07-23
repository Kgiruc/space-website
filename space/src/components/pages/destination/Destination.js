import items from "./Planetlist"
import {useState} from "react";
import ButtonsDes from "./Buttons-des";
import Menu from "./Menu";
import Links from "../../Links"

const planet = items.filter(item => item.title === "MOON")
const allCategories = [...new Set(items.map(item => item.title))];

function Destination() {
    const [menuItem, setMenuItem] = useState(planet);
    const [buttons, setButtons] = useState(allCategories);

    const filter = (button) =>{
        const filteredData = items.filter(item => item.title === button)
        setMenuItem(filteredData);
    }
    return (
        <div className="destination__container">
            <Links />
            <Menu menuItem={menuItem} />
            <ButtonsDes button={buttons} filter={filter}/>
        </div>

    );
}

export default Destination;