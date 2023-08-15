import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';

export default class Menu extends React.Component {


    render() {
        return(

            <div className="row bg-white fixed-top px-4 py-2">
                <div className="col-12 d-flex align-items-center">
                    <img src="/img/Logo.png" alt="logo" className="img-fluid" />
                    <Link to="/" className="btn btn-light mx-3"> Inicio </Link>
                    <Link to="/equipo" className="btn btn-light mx-3"> Quiénes somos </Link>
                    <Link to="/tratamientos" className="btn btn-light mx-3"> Tratamientos </Link>
                    <Link to="/contacto" className="btn btn-light mx-3"> Contacto </Link>
                    <Link to="/ubicacion" className="btn btn-light mx-3"> Dónde estamos </Link>
                </div>
            </div>
        )
    }
}




