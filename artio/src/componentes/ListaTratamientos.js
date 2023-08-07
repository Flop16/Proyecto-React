import React from "react";

import Tratamientos from "./Tratamientos";

export default class ListaTratamientos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                {this.props.tratamientos.map((tratamientos) => (
                    <Tratamientos nombre={tratamientos.nombre} img={tratamientos.img} descripcion={tratamientos.descripcion} />
                ))}
            </>
        )
    }



}


