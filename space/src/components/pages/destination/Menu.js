function Menu({menuItem}) {
    return (
        <>
            {
                menuItem.map((item) => {
                    return <section className="planet__container" key={item.id}>
                        <h2>{item.title}</h2>
                        <img src={item.img} alt="planet" />
                        <p>{item.body}</p>
                        <hr></hr>
                        <p>AVG. DISTANCE{item.distance}</p>
                        <p>EST. TRAVEL TIME {item.travel}</p>
                    </section>
                })
            }
        </>
    );
}

export default Menu;