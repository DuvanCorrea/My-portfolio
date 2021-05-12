const Header = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">

                        {/* mi imagen */}
                        <div className="col-md-4">
                            <img src="https://avatars.githubusercontent.com/u/28915377?s=400&u=7e1a8f79546e00914598558913ce5d04045fd7dc&v=4" alt="" className="img-fluid" />
                        </div>

                        {/* primera impresión */}
                        <div className="col-md-8">
                            <h1>Duvan Correa</h1>
                            <h2>Estudiante de ING Informática</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit velit semper ridiculus, aptent turpis praesent vehicula pretium rhoncus sagittis convallis dignissim erat, nostra arcu nec tristique dis parturient nibh condimentum vivamus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;