import items from "./Planetlist"
import {useState} from "react";
import ButtonsDes from "./Buttons-des";
import Menu_des from "./Menu_des";
import Navigation from "../../navigation/Navigation";


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
        <section className="destination__container">
            <Navigation />
            <div className="subhead">
                <span>01 </span>
                <p>PICK YOUR DESTINATION</p>
            </div>
            <ButtonsDes  button={buttons} filter={filter} />
            <Menu_des menuItem={menuItem} />
        </section>
    );
}

export default Destination;