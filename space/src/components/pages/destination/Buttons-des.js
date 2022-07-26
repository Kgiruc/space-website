import {useState} from "react";

function ButtonsDes({button, filter}) {
    const [btnState, setBtnState] = useState(false);

    function handleClick() {
        setBtnState(btnState => !btnState);
    }


    let toggleClassCheck = btnState ? 'active' : null;

    return (
        <div className="planet__btn">
            {
                button.map((e, i) => {
                    return <button className={`planet_button ${toggleClassCheck}`}
                                   type="button"
                                   onClick={() => {
                                       filter(e);
                                       handleClick()
                                   }} key={i}>{e}
                    </button>
                })
            }
        </div>
    );
}

export default ButtonsDes;