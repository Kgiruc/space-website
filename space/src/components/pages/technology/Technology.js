import items from "./Technologylist"
import {useState} from "react";
import ButtonsDes from "./Buttons-technology";
import Menu_technology from "./Menu_technology";
import Links from "../../Links"

const device = items.filter(item => item.id === 1)
const allCategories = [...new Set(items.map(item => item.id))];

function Technology() {
    const [menuItem, setMenuItem] = useState(device);
    const [buttons, setButtons] = useState(allCategories);


    const filter = (button) =>{
        const filteredData = items.filter(item => item.id === button)
        setMenuItem(filteredData);
    }
    return (
        <section className="technology__container">
            <Links />
            <ButtonsDes  button={buttons} filter={filter} />
            <p className="subhead1"><span>03 </span>SPACE LAUNCH 101</p>
            <Menu_technology menuItem={menuItem} />
        </section>
    );
}

export default Technology;