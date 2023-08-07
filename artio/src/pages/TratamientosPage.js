import React from "react";
import ListaTratamientos from "../componentes/ListaTratamientos";

export default class TratamientosPage extends React.Component {

    tratamientos = [
        {
            nombre: 'Faciales',
            img: '/img/Tratam_1.png',
            descripcion: 'Descripción del tratamiento 1'
        },
        {
            nombre: 'Corporales',
            img: '/img/Tratam_2.png',
            descripcion: 'Descripción del tratamiento 2'
        },
        {
            nombre: 'Aparatología',
            img: '/img/Tratam_3.png',
            descripcion: 'Descripción del tratamiento 3'
        },
        {
            nombre: 'Holísticos',
            img: '/img/Tratam_3.png',
            descripcion: 'Descripción del tratamiento 4'
        }
    ]
    
    render() {
        return(
            <>
                <h2> Tratamientos </h2>
                <ListaTratamientos tratamientos={this.tratamientos} />
            </>
        )
    }
}



