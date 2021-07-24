function Footer() {
    return (
    <footer>

        <div className="socials">

        <span className="contact">contact me</span>
        <ul>
        <li>Saif Hussaini</li>
        <li><a href="https://github.com/SSHMamba"><span className="sr-only" htmlFor="sociallinks">Github</span><i class="fab fa-github"></i></a></li>   
        
        <li><a href="https://www.linkedin.com/in/saif-hussaini-04a96b202/"><span className="sr-only" htmlFor="sociallinks">LinkedIn</span><i class="fab fa-linkedin-in"></i></a></li>
        </ul>
        <ul className="otherLinks">
            <li><p><a href="https://www.saifh.ca" className="credits">Visit my website for other projects</a></p></li>
        <li>
        <p className="credits">Powered with <a href="https://www.themoviedb.org/" className="tmdb">tmdb</a> api</p>
        </li>
        </ul>
        </div>

        <div className="juno">
        Created at Juno College / 2021
        </div>
    </footer>
    )
}

export default Footer;