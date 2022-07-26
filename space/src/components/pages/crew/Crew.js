import items from "./Crewlist"
import {useState} from "react";
import ButtonsDes from "./Buttons-crew";
import Menu_crew from "./Menu_crew";
import Links from "../../Links"

const person = items.filter(item => item.title === "COMMANDER")
const allCategories = [...new Set(items.map(item => item.title))];

function Crew() {
    const [menuItem, setMenuItem] = useState(person);
    const [buttons, setButtons] = useState(allCategories);


    const filter = (button) =>{
        const filteredData = items.filter(item => item.title === button)
        setMenuItem(filteredData);
    }
    return (
        <section className="crew__container">
            <Links />
            <p className="subhead1"><span>02 </span>MEET YOUR CREW</p>
            <ButtonsDes  button={buttons} filter={filter} />
            <Menu_crew menuItem={menuItem} />
        </section>
    );
}

export default Crew;