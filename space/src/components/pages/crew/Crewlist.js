import commander from "../../../assets/crew/image-douglas-hurley.webp"
import mission_spec from "../../../assets/crew/image-mark-shuttleworth.webp"
import pilot from "../../../assets/crew/image-victor-glover.webp"
import engineer from "../../../assets/crew/image-anousheh-ansari.webp"

export default [
    {
        title: 'COMMANDER',
        name: 'DOUGLAS HURLEY',
        body: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and ' +
            'former NASA astronaut. He launched into space for the third time as commander ' +
            'of Crew Dragon Demo-2.',
        img: commander,
        id: 1,
    },
    {
        title: 'MISSION SPECIALIST',
        name: 'MARK SHUTTLEWORTH',
        body: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, ' +
            'the company behind the Linux-based Ubuntu operating system. ' +
            'Shuttleworth became the first South African to travel to space as a space tourist.',
        img: mission_spec,
        id: 2,
    },
    {
        title: 'PILOT',
        name: 'Victor Glover',
        body: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International' +
            ' Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.' +
            'He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
        img: pilot,
        id: 3,
    },
    {
        title: 'FLIGHT ENGINEER',
        name: 'Anousheh Ansari',
        body: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. ' +
            'Ansari was the fourth self-funded space tourist, the first self-funded woman to ' +
            'fly to the ISS, and the first Iranian in space. ',
        img: engineer,
        id: 4,
    },
]