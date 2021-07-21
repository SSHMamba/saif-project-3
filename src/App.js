import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import MovieDetails from './Components/MovieDetails';
import ShowDetails from './Components/ShowDetails';
import Search from './Components/Search';
import WatchList from './Components/Watchlist';
import React from 'react';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Router>

    <Header />

    <body>

    <main>

    <Route exact path="/" component={Home} />
    
    <Route exact path ="/movies/:movieID" component={MovieDetails}/>
    <Route exact path ="/shows/:showID" component={ShowDetails}/>
    <Route exact path="/watchlist" component={WatchList}/>
    <Route exact path="/search" component={Search}></Route>


    </main>
    </body>

    <Footer/>
    
    </Router>
    </>

  )

}

export default App;


// watchlist shows link to showdetails
// search function for tv shows