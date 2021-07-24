import { Link } from "react-router-dom";
import './Navigation.css'

function Navigation() {

    return (
        <div className="navigation">
            <ul>
                <li>
                    <Link to="/watchlist" className="watchListLink">
                    <button className="watchListButton"><h2>watchlist</h2></button>
                    </Link>
                </li>

                <li>
                    <Link to="/search">
                    <button className="searchButton"><h2>search</h2></button>
                    </Link>
                 </li>
            </ul>
        </div>
    )
}

export default Navigation;