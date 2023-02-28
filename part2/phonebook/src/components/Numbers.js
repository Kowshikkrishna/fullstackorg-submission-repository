const Numbers = (props) => {

    const filterContacts = props.value.filter(names => names.name.toLowerCase().startsWith(props.search.toLowerCase()));
    return(
        <>
            <h2>Numbers</h2>
            {filterContacts.map(names => <li key={names.id}>{names.name} {names.number}</li>)}
        </>
    );
};
export default Numbers;