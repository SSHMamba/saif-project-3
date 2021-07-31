import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import MovieDetails from './Pages/MovieDetails';
import ShowDetails from './Pages/ShowDetails';
import DiscoverPage from './Pages/DiscoverPage';
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
    <Route exact path="/discover" component={DiscoverPage}/>
    <Route exact path="/search/" component={Search}/>


    </main>
    </body>

    <Footer/>
    
    </Router>
    </>

  )

}

export default App;


// next & previous page buttons on search page still not functional