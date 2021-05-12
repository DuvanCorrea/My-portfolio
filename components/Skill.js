const Skill = ({ nameSkill, percentage }) => {
    return (
        <>
            <h5>{nameSkill}</h5>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: `${percentage}` }}></div>
            </div>
        </>
    )
}

export default Skill;