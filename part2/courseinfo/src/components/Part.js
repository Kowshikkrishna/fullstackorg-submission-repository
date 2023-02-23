const Part = (props) => {
    console.log(props.name);
  return <>
  <p>{props.part.name} {props.part.exercises}</p>
  </>;
};
export default Part;
