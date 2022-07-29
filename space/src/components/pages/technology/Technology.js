import items from "./Technologylist"
import {useState} from "react";
import ButtonsDes from "./Buttons-technology";
import Menu_crew from "./Menu_crew";
import Links from "../../Links"

const device = items.filter(item => item.title === "COMMANDER")
const allCategories = [...new Set(items.map(item => item.title))];

function Technology() {
    const [menuItem, setMenuItem] = useState(device);
    const [buttons, setButtons] = useState(allCategories);


    const filter = (button) =>{
        const filteredData = items.filter(item => item.title === button)
        setMenuItem(filteredData);
    }
    return (
        <section className="crew__container">
            <Links />
            <p className="subhead1"><span>02 </span>MEET YOUR CREW</p>
            <Menu_crew menuItem={menuItem} />
            <ButtonsDes  button={buttons} filter={filter} />
        </section>
    );
}

export default Technology;