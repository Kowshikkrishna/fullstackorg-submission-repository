import Part from "./Part";
const Content = (props) => {
    return(
        <>
        {props.content.map((part) => <Part part= {part} key = {part.id}></Part>)}
        </>
    );
};
export default Content;