import Skill from "./skill"
import { skills } from "../dataProfiles"

const Skills = () => {
    return (
        <>
            {/* skills */}
            <div className="col-md-4">
                <div className="card bg-ligh">
                    <div className="card-body">
                        <h1>Skills</h1>
                        {skills.map(({ nameSkill, percentage }, i) => {
                            return (
                                <div className="py-2">
                                    <Skill key={i} nameSkill={nameSkill} percentage={percentage} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;