import React from "react";


export default class EquipoPage extends React.Component {

    render() {
        return(
            <>
            <h2>Profesionales a cargo</h2>

            <div className="contenedor-fluid">
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-sm-3">
                        <img src="/img/Tratam_1.png" alt="persona1" max-width={200} height={200} /> 
                    </div>
                    <div className="col-12 col-sm-6">
                    <h4>Persona 1</h4>
                        <p className="text-wrap"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint quia eos temporibus totam similique deleniti at impedit, dolorem harum pariatur animi laborum error unde aut repellat nesciunt, in dicta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, perspiciatis suscipit provident laudantium, molestiae dignissimos facere aspernatur saepe, accusamus aperiam vitae dolor! Eveniet officia voluptate dolorum maxime deleniti animi tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit similique laudantium, et ipsam soluta maiores doloremque recusandae id dolorum vero, veritatis eveniet. Sit debitis tempora quisquam itaque corporis? Saepe, fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui assumenda maxime maiores voluptatem reprehenderit eum doloribus, dolores necessitatibus error recusandae exercitationem quas dolor aliquam repudiandae perferendis earum, quae voluptas pariatur.</p>
                    </div> 
                </div>
            </div>

            <div className="contenedor-fluid my-4">
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-sm-3">
                        <img src="/img/Tratam_3.png" alt="persona2" max-width={200} height={200} /> 
                    </div>
                    <div className="col-12 col-sm-6">
                    <h4>Persona 2</h4>
                        <p className="text-wrap"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint quia eos temporibus totam similique deleniti at impedit, dolorem harum pariatur animi laborum error unde aut repellat nesciunt, in dicta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, perspiciatis suscipit provident laudantium, molestiae dignissimos facere aspernatur saepe, accusamus aperiam vitae dolor! Eveniet officia voluptate dolorum maxime deleniti animi tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit similique laudantium, et ipsam soluta maiores doloremque recusandae id dolorum vero, veritatis eveniet. Sit debitis tempora quisquam itaque corporis? Saepe, fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui assumenda maxime maiores voluptatem reprehenderit eum doloribus, dolores necessitatibus error recusandae exercitationem quas dolor aliquam repudiandae perferendis earum, quae voluptas pariatur.</p>
                    </div> 
                </div>
            </div>
            
            </>
        )
    }
}
