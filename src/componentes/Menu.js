import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';

export default class Menu extends React.Component {


    render() {
        return(
            <div>
                <nav class="navbar navbar-expand-md fixed-top navbar-light bg-white">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">
                            <img src="/img/Logo.png" alt="logo" width="300px" />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <Link to="/" className="nav-link" aria-current="page"> Inicio </Link>
                                <Link to="/equipo" className="nav-link"> Quiénes somos </Link>
                                <Link to="/tratamientos" className="nav-link"> Tratamientos </Link>
                                <Link to="/contacto" className="nav-link"> Contacto </Link>
                                <Link to="/ubicacion" className="nav-link"> Dónde estamos </Link>
                            </div>
                        </div>
                    </div>
                </nav>
           
            </div>
        )
    }
}


