import Layout from "../components/Layout"
import { proyects } from "../dataProfiles";
import Proyect from "../components/Proyect";

const Proyectos = () => (
    <Layout footer={false}>
        <h1>Proyectos</h1>
        <div className="container">
            <div className="row">
                {proyects.map(({ title, img, description, url }, i) => {
                    return (
                        <Proyect key={i} title={title} img={img} description={description} url={url} />
                    )
                })}
            </div>
        </div>
    </Layout>
)

export default Proyectos;