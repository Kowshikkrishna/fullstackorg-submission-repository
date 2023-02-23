const TotalCourse = (props) => {
    const totalArray= props.content.map((part) => part.exercises)
    console.log(totalArray);
    const totalValue = totalArray.reduce((accumulator,currentValue) => {return accumulator+currentValue},0)

    return(
        <>
        <b><p>total of {totalValue} exercises</p></b>
        </>
    );
};
export default TotalCourse;