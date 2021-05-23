import MiniProyect from "../../components/MiniProyect";
import { proyects } from "../../dataProfiles";
import Layout from "../../components/Layout"
import { useRouter } from "next/router"

const Proyectos = () => {

    // Extraer los parametros de la url
    // en caso que estemos viendo un
    // proyecto en particular
    // --------------------------------
    const router = useRouter()
    console.log(router.query)

    return (
        <Layout footer={false}>
            <h1>Proyectos</h1>
            <div className="container">
                <div className="row">
                    {proyects.map(({ title, img, description, url }, i) => {
                        return (
                            <MiniProyect key={i} title={title} img={img} description={description} url={url} />
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default Proyectos;