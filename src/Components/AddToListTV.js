import './AddToList.css'
import firebase from "../firebase";
import { useState } from 'react';

const AddToListTV = ({addItem, reloadPage}) => {
const [added, setAdded] = useState(true);

    const dbRef = firebase.database().ref('user/lists/tv');

    const addToFirebase = () => {
        dbRef.push({
            poster: `https://image.tmdb.org/t/p/original${addItem.poster_path}`,
            id: addItem.id,
            name: addItem.name
        })
        setAdded(false)



    }



    return (
        <>
        { added ? <button className="AddButton" 
                onClick={addToFirebase}> 
                
        <p>+ Watchlist </p>
        
        </button> : <button className="AddedButton" 
                > 
                
        <p>     Added! </p>
        
        </button> }
        
        </>
    )

 }

 export default AddToListTV;