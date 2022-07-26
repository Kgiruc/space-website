

function ButtonsDes({button, filter}) {

    return (
        <div className="crew__btn">
            {
                button.map((e, i)=>{
                    return <button type="button" onClick={() =>filter(e)} key={i}>{}</button>
                })
            }
        </div>
    );
}

export default ButtonsDes;