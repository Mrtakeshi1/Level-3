import airbnb from './airbnb 1.png';
function Navbar () {
    return (
        <nav>
            <img src={airbnb} className="nav--logo"/>
        </nav>
    );
}

export default Navbar;