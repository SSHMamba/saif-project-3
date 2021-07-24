import './AddToList.css'
import firebase from "../firebase";
import { useState } from 'react';

const AddToList = ({addItem}) => {
const [added, setAdded] = useState(true);

    const dbRef = firebase.database().ref('user/lists/movies');

    const addToFirebase = () => {
        dbRef.push({
            poster: `https://image.tmdb.org/t/p/original${addItem.poster_path}`,
            id: addItem.id
        })
        setAdded(false)



    }



    return (
        <>
        { added ? <button className="AddButton" 
                onClick={addToFirebase}> 
                
        <p>+ Add to Watchlist </p>
        
        </button> : <button className="AddedButton" 
                > 
                
        <p>     Added! </p>
        
        </button> }
        
        </>
    )

 }

 export default AddToList;