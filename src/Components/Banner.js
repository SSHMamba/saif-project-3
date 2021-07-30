import { useState, useEffect } from "react";
import "./Banner.css"
const Banner = () => {
const [banner, setBanner] = useState([]);
const url = 'https://api.themoviedb.org/3/trending/all/day?api_key=d62e1adb9803081c0be5a74ca826bdbd'
const backdropImages = "https://image.tmdb.org/t/p/original"


useEffect(() => {
 fetch(url)
      .then((res) => res.json())
      .then((data)=> {
        setBanner(data.results[Math.floor(Math.random() * data.results.length - 1)])
      })

}, [setBanner])



    return (
                    
        <>
        <div className="bannerFade"/>
        <div className="banner___contents">
        <div className="bannerPoster top"          
        style={{ 
          backgroundImage: `url(${backdropImages}${banner.backdrop_path})`
          }}>
        </div>

    </div>
    </>
    );   
}

export default Banner;