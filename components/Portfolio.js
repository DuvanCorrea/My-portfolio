import { proyects } from "../dataProfiles";
import Proyect from "./proyect";

const Portfolio = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-dark">

                        <h2 className="text-center text-light">Portafolio</h2>

                        <div className="row">
                            {proyects.map(({ title, img, description, url }, i) => {
                                return (
                                    <Proyect key={i} title={title} img={img} description={description} url={url} />
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;