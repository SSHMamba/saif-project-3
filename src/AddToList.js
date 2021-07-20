import { useEffect, useState } from "react";
import './AddToList.css'
import firebase from "./firebase";

const AddToList = ({movie}) => {
    const dbRef = firebase.database().ref('user/lists');
    const [watchlist, setWatchlist] = useState([]);




    const removeMovie = (movieID) => {
        const dbRef = firebase.database().ref('user/lists')
        dbRef.child(movieID).remove();
    }

    const addToFirebase = () => {
        const button = document.querySelector('.AddButton')
        dbRef.push({
            title: movie.title,
            poster: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
            id: movie.id,
            runtime: movie.runtime,
            genres: movie.genres,
            vote_average: movie.vote_average
        })
    }

    useEffect( () => {

        dbRef.on('value', (snapshot) => {
            for (let movie in snapshot.val()){
                const movieID = movie.id;
                const snapshotID = snapshot.val()[movie].id;
                if (movieID === snapshotID){}
            }

        } )
        
    }, [movie.id, dbRef])


    useEffect(() => {
        const dbRef = firebase.database().ref('user/lists');
        dbRef.on('value', (response) => {
            const newState = [];

            const data = response.val();
            console.log(data);

            for (let key in data) {
                newState.push({key: key, name: data[key]})
            }
            setWatchlist(newState);
        })
    },[]);

    return (
        <button className="AddButton" onClick={addToFirebase}> <p>Add to Watchlist </p></button>
    )








 }

 export default AddToList;