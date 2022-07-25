import Links from "../../Links";

function Crew() {
    return (
        <section className="crew__container">
            <Links />
            <div className="crew__btn">
            <button value={1}>1</button>
            <button value={2}>2</button>
            <button value={3}>3</button>
            <button value={4}>4</button>
            </div>
        </section>
    );
}

export default Crew;