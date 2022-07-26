function Menu_crew({menuItem}) {
    return (
        <>
            {
                menuItem.map((item) => {
                    return <section className="planet__container" key={item.id}>
                        <img className="planet__img" src={item.img} alt="planet" />

                    </section>
                })
            }
        </>
    );
}

export default Menu_crew;