function ButtonsDes({button, filter}) {
    return (
        <div>
            {
                button.map((e, i)=>{
                    return <button type="button" onClick={()=> filter(e)}>{e}</button>
                })
            }
        </div>
    );
}

export default ButtonsDes;