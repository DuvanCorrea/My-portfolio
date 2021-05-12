const Experience = ({ nameExp, description, time }) => {
    return (
        <>
            <h3>{nameExp}</h3>
            <h5>{time}</h5>
            <div>
                <p>{description}</p>
            </div>
        </>
    )
}

export default Experience;