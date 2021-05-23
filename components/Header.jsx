import { aboutMe } from "../dataProfiles"

const Header = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">

                        {/* mi imagen */}
                        <div className="col-md-4">
                            <img src={aboutMe.imgProfile}
                                alt=""
                                className="img-fluid rounded mx-auto d-block"
                                style={{ width: "200px" }} />
                        </div>

                        {/* primera impresión */}
                        <div className="col-md-8">
                            <h1>{aboutMe.smallName}</h1>
                            <h3>{aboutMe.actualProfession}</h3>
                            <p>{aboutMe.smallDescripion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;