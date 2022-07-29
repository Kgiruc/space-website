function Menu_crew({menuItem}) {
    return (
        <>
            {
                menuItem.map((item) => {
                    return <section className="crew__menu__container" key={item.id}>
                        <article className="crew__container__subs">
                            <h4>{item.title}</h4>
                            <h3>{item.name}</h3>
                            <p>{item.body}</p>
                        </article>
                        <img className="crew__img" src={item.img} alt="person"/>
                    </section>
                })
            }
        </>
    );
}

export default Menu_crew;