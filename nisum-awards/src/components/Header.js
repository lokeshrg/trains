import React from 'react';
import { Link } from 'react-router-dom';

// stateless componenet without extending React.Component
const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Nisum Awards</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/categories">Categories</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/nominees">Nominees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/results">Results</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );

};

export default Header;