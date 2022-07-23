import { useState } from "react";
import Planetlist from "./Planetlist";

function Destination() {
    const [planets, setPlanets] = useState([
        {title:'Mars', body: 'osz ty kurwa mars', author: 'osz ty autor', id:1},
        {title:'pluton', body: 'osz ty kurwa pluton', author: 'osz ty kurwa', id:2},
        {title:'saturn', body: 'osz ty kurwa msaturn', author: 'osz ty suka', id:3},
        {title:'ziemia', body: 'osz ty kurwa ziemia kurwa', author: 'osz ty bydlo', id:4},
    ])

    const handleChange = (id) => {
        const newPlanet = {planets.filter((planets) => planets.id === 2)};
        setPlanets(newPlanet);
    }

    return (
        <div className="destination__container">
            <Planetlist planets={planets.filter((planets)=> planets.id === 1)} handleChange={handleChange} />
        </div>
    );
}

export default Destination;