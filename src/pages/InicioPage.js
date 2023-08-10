import React from "react";
import ApiClima from "../componentes/ApiClima";
import styles from "./Pages.module.css";

export default class InicioPage extends React.Component {

    render() {
        return(
            <>
                <div className="contenedor-fluid mt-4">
                    <h2 className={styles.h2}>Un lugar para el bienestar</h2>
                    <p>¡Te damos la bienvenida a nuestro espacio, donde encontrarás los mejores servicios para el relax que buscás!</p>
                </div>

                <div className="contenedor-fluid d-flex justify-content-center my-5">
                    <img src="/img/9.png" alt="img9" max-width={300} height={300} className="mx-3" />
                    <img src="/img/11.png" alt="img11" max-width={300} height={300} className="mx-3" />
                    <img src="/img/14.png" alt="img14" max-width={300} height={300} className="mx-3" />
                    <img src="/img/17.png" alt="img17" max-width={300} height={300} className="mx-3" />
                </div>

                <div className="contenedor-fluid mt-4"> 

                    <h3 className={styles.h3}> Novedades </h3>
                
                    <h4 className={styles.h4}> ¡Nuevo tratamiento en Mi momento! </h4>

                    <p className="text-wrap"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint quia eos temporibus totam similique deleniti at impedit, dolorem harum pariatur animi laborum error unde aut repellat nesciunt, in dicta.</p>
                    <p className="text-wrap"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, perspiciatis suscipit provident laudantium, molestiae dignissimos facere aspernatur saepe, accusamus aperiam vitae dolor! Eveniet officia voluptate dolorum maxime deleniti animi tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit similique laudantium, et ipsam soluta maiores doloremque recusandae id dolorum vero, veritatis eveniet. Sit debitis tempora quisquam itaque corporis? Saepe, fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui assumenda maxime maiores voluptatem reprehenderit eum doloribus, dolores necessitatibus error recusandae exercitationem quas dolor aliquam repudiandae perferendis earum, quae voluptas pariatur.</p>
                    
                    
               
                    
                </div>


                <div className='m-5 p-5 d-flex justify-content-center'>
                    <h3>¡Consultá el clima en tu ciudad!</h3>
                    <ApiClima />
                </div>

                       
            </>
        )
    }
}
