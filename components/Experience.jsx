const Experience = ({ nameExp, description, time }) => {
    return (
        <>
            <h4>{nameExp}</h4>
            <h5>{time}</h5>
            <div>
                <p>{description}</p>
            </div>
        </>
    )
}

export default Experience;