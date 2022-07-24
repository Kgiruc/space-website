function ButtonsDes({button, filter}) {

    return (
        <div className="planet__btn">
            {
                button.map((e, i)=>{
                    return <button  type="button" onClick={()=> filter(e)}>{e}</button>
                })
            }
        </div>
    );
}

export default ButtonsDes;