import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../components/Layout";
import { proyects } from "../../dataProfiles"

const Proyect = () => {

    // Obtener parametro del query
    const router = useRouter()

    // Obtener proyecto
    // Como no setoy consumiento apis no se hace asincrono
    const proyect = proyects.filter(e => e.id == router.query.proyect)[0]


    return (
        <Layout footer={false}>
            <div className="container py-2">
                <div className="row">
                    <div className="col-md-5">
                        <img src={proyect.img} alt="Imagen" className="img-fluid rounded"></img>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <h1>{proyect.title}</h1>
                        </div>
                        <div className="row">
                            <p>{proyect.cmpleteDescription}</p>
                        </div>
                        <div className="row">
                            <a className="btn btn-primary rounded" href={proyect.gitHubProyect}>Ir a proyecto en GitHub</a>
                        </div>
                    </div>
                    </div>
                </div>
        </Layout>
    )
}

export default Proyect;