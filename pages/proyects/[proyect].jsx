import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { proyects } from "../../dataProfiles"

const Proyect = () => {
    const [proyect, setProyect] = useState(null)

    // Obtener parametro del query
    const router = useRouter()

    // Obtener proyecto
    useEffect(e => {

        const auxProyect = proyects.filter(e => e.id == router.query.proyect)[0]
        setProyect(auxProyect)

    })

    if (!proyect) {
        return (
            <h1>Cargando...</h1>
        )
    }


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
                            <a className="btn btn-info rounded" href={proyect.gitHubProyect}>Ir a proyecto en GitHub</a>
                        </div>
                    </div>
                </div>

                {/* Tecnologias y utilidades */}

                <div className="row mt-5">
                    <div className="col-md-4">
                        <h3>Tecnologías</h3>
                    </div>
                    <div className="col-md-4">
                        <h3>Utilidades</h3>
                    </div>
                </div>

                {/* Imagenes */}
                <div className="row mt-5">
                    {
                        proyect.imgs.map(e => {
                            return (
                                <div class="col-md-4">
                                    <img src={e.route} className="img img-fluid rounded" alt={e.id} />
                                </div>
                            )
                        })
                    }
                </div>





            </div>
        </Layout>
    )
}

export default Proyect;