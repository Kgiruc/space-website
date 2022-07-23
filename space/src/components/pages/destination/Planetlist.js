function Planetlist({planets, handleChange}) {
    return (
        <div className="planet-list">

            {planets.map((planet)=> (
                <div className="planet-preview" key={planet.id}>
                    <h2>{planet.title}</h2>
                    <div>{planet.body}</div>
                    <p>Od bydła dla { planet.author }</p>
                    <ul className="planets__btn">
                        <button>Mars</button>
                        <button onClick={() => handleChange(planet.id)}>pluton</button>
                        <button>saturn</button>
                        <button>ziemia</button>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Planetlist;