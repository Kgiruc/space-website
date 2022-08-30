import items from "./Technologylist"
import {useState} from "react";
import ButtonsDes from "./Buttons-technology";
import MenuTechnology from "./Menu_Technology";

import Navigation from "../../navigation/Navigation";


const device = items.filter(item => item.id === 1)
const allCategories = [...new Set(items.map(item => item.id))];

function Technology() {
    const [menuItem, setMenuItem] = useState(device); // eslint-disable-next-line
    const [buttons, setButtons] = useState(allCategories);


    const filter = (button) =>{
        const filteredData = items.filter(item => item.id === button)
        setMenuItem(filteredData);
    }
    return (
        <section className="technology__container">
            <Navigation />
            <ButtonsDes  button={buttons} filter={filter} />
            <p className="subhead"><span>03 </span>SPACE LAUNCH 101</p>
            <MenuTechnology menuItem={menuItem} />
        </section>
    );
}

export default Technology;