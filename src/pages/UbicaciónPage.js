import React from "react";

export default class UbicaciónPage extends React.Component {

    render() {
        return(
            <>
            <h3>Nuestra ubicación</h3>

            <div>
                <img src="/img/mapa.png" alt="mapa" />
                <p className="my-3">¡Estamos a muy pocas cuadras de la estación J.M. Bosch!</p>
                <p>Villa Bosch (CP 1682), Partido de Tres de Febrero, Buenos Aires.</p>
            </div>
            </>
        )
    }
}
