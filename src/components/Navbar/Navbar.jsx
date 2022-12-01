
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";  
import "./Navbar.css";


const Navbar = () => {

    return (
        <nav id="navbar">
            <h2>
                <Link to="/"> < BiCameraMovie /> Movies TMDB</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    placeholder="Busque por um titulo" 
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    );
};

export default Navbar