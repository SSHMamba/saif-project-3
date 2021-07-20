import firebase from "../firebase";
import { useState, useEffect } from "react";
import './Watchlist.css'
import { Link } from 'react-router-dom';

const WatchList = () => {
    const [fireBaseList, setFireBaseList] = useState([]);


// Display watchlist items that were added to Firebase
 useEffect( () => {
        const dbRef = firebase.database().ref('user/lists');

        dbRef.on('value', (response) => {
            const data = response.val()
            const newFireBaseList = []
            
            for (let key in data) {
                newFireBaseList.unshift({key: key, movie: data[key]} )
            }
            
            setFireBaseList(newFireBaseList)
        })
    }, [])

// Remove watchlist items from Firebase
const removeFromList = (fireBaseItem) => {
     const dbRef = firebase.database().ref('user/lists');
    dbRef.child(fireBaseItem).remove();
    }


return (
    <div>

    <h2 className="watchlistTitle">Watchlist</h2>

    <ul className="listWrapper">
        {
        fireBaseList.map( (item) => {
            return (
                    <li key={item.key}>
                    <Link to={`/movie/${item.movie.id}`}>
                                    
                    { item.movie.poster ?
                    <img 
                    src={`https://image.tmdb.org/t/p/original${item.movie.poster}`} 
                    alt={`Movie poster for ${item.movie.title}`} 
                    />
                    : null
                    }
                            
                    </Link>

    
    <button className="removeButton" 
            onClick={() => {removeFromList(item.key)}}> 
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