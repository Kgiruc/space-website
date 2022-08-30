import items from "./Crewlist"
import {useState} from "react";
import ButtonsDes from "./Buttons-crew";
import MenuCrew from "./Menu_Crew";
import Navigation from "../../navigation/Navigation";


const person = items.filter(item => item.title === "COMMANDER")
const allCategories = [...new Set(items.map(item => item.title))];

function Crew() {
    const [menuItem, setMenuItem] = useState(person); // eslint-disable-next-line
    const [buttons, setButtons] = useState(allCategories);


    const filter = (button) =>{
        const filteredData = items.filter(item => item.title === button)
        setMenuItem(filteredData);
    }
    return (
        <section className="crew__container">
            <Navigation />
            <p className="subhead"><span>02 </span>MEET YOUR CREW</p>
            <MenuCrew menuItem={menuItem} />
            <ButtonsDes  button={buttons} filter={filter} />
        </section>
    );
}

export default Crew;