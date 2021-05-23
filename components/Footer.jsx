import { aboutMe } from "../dataProfiles"

const Foote = () => {
    return (
        <>
            <footer className="bg-dark text-light text-center">
                <div className="container p-4">
                    <h4>&copy; {aboutMe.smallName}</h4>
                    <p>Todos los derechos reservados </p>
                    <p>2019 - {new Date().getFullYear()}</p>
                </div>
            </footer>
        </>
    )
}

export default Foote;