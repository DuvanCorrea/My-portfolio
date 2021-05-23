const Proyect = ({ title, img, description, url }) => {
    return (
        <>
            <div className="col-md-4 pb-4 h-100">
                <div className="card">
                    <div className="overflow">
                        <img src={img} alt="" className="card-img-top" />
                    </div>
                    <div className="card-body">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a href={url}>Ver mas</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proyect;