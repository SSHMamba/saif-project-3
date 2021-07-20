import './AddToList.css'
import firebase from "../firebase";

const AddToList = ({movie}) => {
    const dbRef = firebase.database().ref('user/lists');

    const addToFirebase = () => {
        dbRef.push({
            title: movie.title,
            poster: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
            id: movie.id
        })
    }

    return (
        <button className="AddButton" 
                onClick={addToFirebase}> 
                
        <p>Add to Watchlist </p>
        
        </button>
    )

 }

 export default AddToList;