import Content from "./Content";
import Header from "./Header";
import TotalCourse from "./TotalCourse";

const Course = (props) => {
    return(
        <>
        <Header title = {props.course.name}></Header>
        <Content content = {props.course.parts}></Content>
        <TotalCourse content = {props.course.parts}></TotalCourse>
        </>
    );
};
export default Course;