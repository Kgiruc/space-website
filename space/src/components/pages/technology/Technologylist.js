import launch from "../../../assets/technology/image-launch-vehicle-portrait.jpg";
import port from "../../../assets/technology/image-spaceport-portrait.jpg";
import capsule from "../../../assets/technology/image-space-capsule-portrait.jpg";
import launch__tablet from "../../../assets/technology/image-launch-vehicle-landscape.jpg";
import port__tablet from "../../../assets/technology/image-spaceport-landscape.jpg";
import capsule__tablet from "../../../assets/technology/image-space-capsule-landscape.jpg";


export default [
    {
        name: 'LAUNCH VEHICLE',
        body: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from ' +
            'Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier' +
            ' rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an ' +
            'awe-inspiring sight on the launch pad!',
        img: launch,
        img_tablet:launch__tablet,
        id: 1,
    },
    {
        name: 'SPACEPORT',
        body: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the ' +
            'seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ' +
            'ideally situated to take advantage of the Earth’s rotation for launch.',
        img: port,
        img_tablet:port__tablet,
        id: 2,
    },
    {
        name: 'SPACE CAPSULE',
        body: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter ' +
            'the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the ' +
            'flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
        img: capsule,
        img_tablet:capsule__tablet,
        id: 3,
    },
]
