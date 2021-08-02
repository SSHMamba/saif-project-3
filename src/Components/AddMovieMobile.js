import './AddToList.css'
import firebase from "../firebase";
import { useState } from 'react';

const AddMovieMobile = ({addItem}) => {
const [added, setAdded] = useState(true);

    const dbRef = firebase.database().ref('user/lists/movies');

    const addToFirebase = () => {
        dbRef.push({
            poster: `https://image.tmdb.org/t/p/original${addItem.poster_path}`,
            id: addItem.id,
            title: addItem.title
        })
        setAdded(false)



    }



    return (
        <>
        { added ? <button className="AddButtonMobile" 
                onClick={addToFirebase}> 
                
        <p>+ Watchlist </p>
        
        </button> : <button className="AddedButtonMobile" 
                > 
                
        <p>     Added! </p>
        
        </button> }
        
        </>
    )

 }

 export default AddMovieMobile;