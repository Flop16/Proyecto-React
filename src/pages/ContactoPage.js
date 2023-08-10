import React from "react";

export default class ContactoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: '',
            mensaje: ''
        }
        this.submitted = this.submitted.bind(this);
        this.changed = this.changed.bind(this);
    }

    submitted(event) {
        alert("Se envió el formulario de " + this.state.nombre + " con el siguiente mensaje: " + this.state.mensaje);
        event.preventDefault();
    }

    changed(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <>
            <h2 className="mt-5">¡Contactanos!</h2>
            <form onSubmit={this.submitted}>
                <div className="form-group mt-5">
                    <label>Nombre</label>
                    <input type="text" className="form-control" name="nombre" onChange={this.changed} />
                </div>
                <div className="form-group my-2">
                    <label>Mensaje</label>
                    <textarea className="form-control" name="mensaje" onChange={this.changed}></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-4">Enviar</button>
            </form>
            </>
        )
    }
}


