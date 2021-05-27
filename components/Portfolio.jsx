import { proyects } from "../dataProfiles";
import MiniProyect from "./MiniProyect";

const Portfolio = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-dark">

                        <h2 className="text-center text-light">Portafolio</h2>

                        <div className="row">
                            {proyects.map(({ title, img, description, url, id }, i) => {
                                return (
                                    <MiniProyect key={i}
                                        title={title}
                                        img={img}
                                        description={description}
                                        url={url}
                                        id={id} />
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