import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Description from './Description';
import MovieDetails from './MovieDetails';
import React from 'react';
import Footer from './Footer';

function App() {
  return (
    <>
    <Router>

    <Header />

    <body>

    <Description />

    <main>

    <Route exact path="/" component={Home} />
          
    <Route exact path ="/movie/:movieID" component={MovieDetails}/>


    </main>
    </body>

    <Footer/>
    
    </Router>
    </>

  )

}

export default App;
