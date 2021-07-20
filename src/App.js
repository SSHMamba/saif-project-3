import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import MovieDetails from './Components/MovieDetails';
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
