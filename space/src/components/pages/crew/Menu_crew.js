function Menu_crew({menuItem}) {
    return (
        <>
            {
                menuItem.map((item) => {
                    return <section className="planet__container" key={item.id}>
                        <article className="planet__container__subs">
                            <h2>{item.title}</h2>
                            <span>{item.name}</span>
                            <p>{item.body}</p>
                        </article>
                        <img className="planet__img" src={item.img} alt="planet" />

                    </section>
                })
            }
        </>
    );
}

export default Menu_crew;