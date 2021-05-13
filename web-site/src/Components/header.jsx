import '../style.css'
import React from 'react';

const Header = () => {
    return (
        <div className="header d-flex space-between center-v">
            <h3>Jefferson cepeda</h3>
            <ul className="nav d-flex center-total">
                <li className="d-flex center-total"><a href="#">Proyectos</a></li>
                <li className="d-flex center-total"><a href="#">Contacto</a></li>
            </ul>
        </div>
    )
}

export default Header;