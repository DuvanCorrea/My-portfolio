import Experience from "./Experience";
import { experiences } from "../dataProfiles"

const Experiences = () => {
    return (
        <>
            {/* Experiences */}
            <div className="col-md-8">
                <div className="card bg-ligh">
                    <div className="card-body">
                        <h3>Experiences</h3>
                        <ul>
                            {experiences.map(({ nameExp, description, time }, i) => {
                                return (
                                    <li className="py-2" key={i}>
                                        <Experience nameExp={nameExp} description={description} time={time} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experiences;