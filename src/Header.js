import { BrowserRouter as Router, Route } from "react-router-dom";

function Header() {
return (
      <Router>
<header>
      <h1><a href="/"><span className="sr-only" htmlFor="header">Watch It</span>watchit</a></h1>
</header>
</Router>
)
}

export default Header;