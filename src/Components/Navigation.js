import { Link } from "react-router-dom";
import '../App.css'
import './Navigation.css'

function Navigation() {

    return (
        <div className="navigation">
            <ul>
                <li>
                    
                    <button className="watchListButton">
                        <Link to="/watchlist" className="watchListLink">
                            <h2>Watchlist</h2>
                        </Link>
                    </button>

                </li>

                <li>
                   
                    <button className="searchButton"> 
                    <Link to="/search">
                        <h2>Search</h2>                    
                    </Link>
                    </button>

                 </li>
            </ul>
        </div>
    )
}

export default Navigation;