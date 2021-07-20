import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import MovieDetails from './MovieDetails';
import WatchList from './Watchlist';
import React from 'react';
import Footer from './Footer';

function App() {
  return (
    <>
    <Router>

    <Header />

    <body>

    <main>

    <Route exact path="/" component={Home} />
    
    <Route exact path ="/movie/:movieID" component={MovieDetails}/>
    <Route exact path="/watchlist" component={WatchList}/>


    </main>
    </body>

    <Footer/>
    
    </Router>
    </>

  )

}

export default App;
