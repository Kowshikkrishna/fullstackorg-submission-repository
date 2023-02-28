const Filter = (props) => {

    return(<>
        filter shown with:<input value={props.searchName} onChange={props.handleSearchChange}></input>
    </>);
};
export default Filter;