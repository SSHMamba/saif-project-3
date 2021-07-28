import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import MovieDetails from './Pages/MovieDetails';
import ShowDetails from './Pages/ShowDetails';
import Search from './Pages/Search';
import WatchList from './Pages/Watchlist';
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
    
    <Route exact path ="/movie/:movieID" component={MovieDetails}/>
    <Route exact path ="/tv/:showID" component={ShowDetails}/>
    <Route exact path="/watchlist" component={WatchList}/>
    <Route exact path="/search/" component={Search}></Route>


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