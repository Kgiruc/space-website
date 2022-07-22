import Links from "../Links";
import {Link} from "react-router-dom"

function Home() {
    return (
        <div className="home__container">
            <Links />
            <section className="home__container__section">
                <span>SO, YOU WANT TO TRAVEL TO</span>
                <h1>SPACE</h1>
                <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
                    Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </p>
            </section>
            <Link to="/destination">
                <button className="home__btn">
                    EXPLORE
                </button>
            </Link>
        </div>
    );
}

export default Home;