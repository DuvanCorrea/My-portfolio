import Skill from "./Skill.jsx"
import { skills } from "../dataProfiles"

const Skills = () => {
    return (
        <>
            {/* skills */}
            <div className="col-md-4">
                <div className="card bg-ligh">
                    <div className="card-body">
                        <h3>Skills</h3>
                        {skills.map(({ nameSkill, percentage }, i) => {
                            return (
                                <div className="py-2" key={i} >
                                    <Skill nameSkill={nameSkill} percentage={percentage} />
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