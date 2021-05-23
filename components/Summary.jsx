import Skills from "./Skills"
import Experiences from "./Experiences"

const Summary = () => {
    return (
        <>
            <div className="row py-2">
                <Skills />
                <Experiences />
            </div>
        </>
    )
}

export default Summary;