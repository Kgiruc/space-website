function Menu_technology({menuItem}) {
    return (
        <>
            {
                menuItem.map((item) => {
                    return <section className="technology__menu__container" key={item.id}>
                        <article className="technology__container__subs">
                            <span>THE TERMINOLOGY...</span>
                            <h3>{item.name}</h3>
                            <p>{item.body}</p>
                        </article>
                        <img className="technology__img" src={item.img} alt="device"/>
                    </section>
                })
            }
        </>
    );
}

export default Menu_technology;