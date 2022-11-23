import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav id="navbar">
            <h2>
                <Link to="/">   Movies TMDB</Link>
            </h2>
            <form>
                <input type="text" placeholder="Busque por um titulo"/>
                <button type="submit">
                </button>
            </form>
        </nav>
    );
};

export default Navbar