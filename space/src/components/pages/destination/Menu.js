function Menu({menuItem}) {
    return (
        <>
            {
                menuItem.map((item) => {
                    return <section className="planet__container" key={item.id}>
                        <img className="planet__img" src={item.img} alt="planet" />
                        <article className="planet__container__subs">
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                            <hr></hr>
                                <div className="planet__results">
                                    <span>AVG. DISTANCE</span>
                                    <span>EST. TRAVEL TIME</span>
                                </div>
                                <div className="planet__results__points">
                                    <p>{item.distance}</p>
                                    <p>{item.travel}</p>
                                </div>
                        </article>
                    </section>
                })
            }
        </>
    );
}

export default Menu;