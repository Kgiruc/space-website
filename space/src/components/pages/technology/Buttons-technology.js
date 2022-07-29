function ButtonsDes({button, filter}) {

    return (
        <div className="technology__btn">
            {
                button.map((e, i)=>{
                    return <button type="button" onClick={() =>filter(e)} key={i}>{}</button>
                })
            }
        </div>
    );
}

export default ButtonsDes;