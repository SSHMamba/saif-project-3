import firebase from "../firebase";
import { useState, useEffect } from "react";
import './Watchlist.css'
import { Link } from 'react-router-dom';
import Navigation from "../Components/Navigation";


const WatchList = () => {
    const [fireBaseListMovies, setFireBaseListMovies] = useState([]);
    const [fireBaseListTV, setFireBaseListTV] = useState([]);

// Display watchlist items that were added to Firebase
 useEffect( () => {
        const dbRef = firebase.database().ref('user/lists/movies');

        dbRef.on('value', (response) => {
            const data = response.val()
            const newFireBaseListMovies = []
            
            for (let key in data) {
                newFireBaseListMovies.unshift({key: key, movie: data[key]} )
            }
            
            setFireBaseListMovies(newFireBaseListMovies)
        })
    }, [])

// Remove watchlist items from Firebase
const removeFromList = (fireBaseItem) => {
        const dbRef = firebase.database().ref('user/lists/movies');

        dbRef.child(fireBaseItem).remove();
    }

useEffect(() => {
    const dbRef = firebase.database().ref('user/lists/tv');

    dbRef.on('value', (TVResponse) => {
        const TVData = TVResponse.val();
        const newFireBaseListTV = [];

        for (let show in TVData) {
            newFireBaseListTV.unshift({key: show, tv: TVData[show]})
        }

        setFireBaseListTV(newFireBaseListTV);
    })
})

const removeFromTVList = (fireBaseItem) => {
        const dbRef = firebase.database().ref('/user/lists/tv');

        dbRef.child(fireBaseItem).remove();
}


return (
    <div>
             <Navigation />   
    <h2 className="watchListTitle">Watchlist</h2>

    <h2 className="watchListCategories">Movies</h2>
    <ul className="listWrapper">

        {
        fireBaseListMovies.map( (item) => {
            return (

                    <li show={item.show} className="slideUp">
                        
                    <Link to={`movie/${item.movie.id}`}>
                                    
                    { item.movie.poster ?
                    <img 
                    src={`https://image.tmdb.org/t/p/original${item.movie.poster}`} 
                    alt={`Movie poster for ${item.movie.title}` }  className="info"
                    />
                    : null
                    }
                            
                    </Link>

                    
    <button className="removeButton" 
            onClick={() => {removeFromList(item.key)}}> 
    <span> x </span> 
    </button>
    


            </li> 
                               
        )
    })
    
}

    </ul>
        <h2 className="watchListCategories">TV Shows</h2>
    <ul className="listWrapper">

        {
            fireBaseListTV.map( (itemTV) => {
                return (
                    <li key={itemTV.key} className="slideUp">
                    <Link to={`tv/${itemTV.tv.id}`}>
                                    
                    { itemTV.tv.poster ?
                    <img 
                    src={`https://image.tmdb.org/t/p/original${itemTV.tv.poster}`} 
                    alt={`TV Show poster for ${itemTV.tv.name}`}  className="info"
                    />
                    : null
                    }
                            
                    </Link>

    
    <button className="removeButton" 
            onClick={() => {removeFromTVList(itemTV.key)}}> 
    <span> X </span> 
    </button>

            </li> 
                )
            })
        }
    </ul>
    </div>
    
    )
};

export default WatchList;