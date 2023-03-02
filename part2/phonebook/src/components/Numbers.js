const Numbers = ({value,delteHandle,search}) => {
  const filterContacts = value.filter((names) =>
    names.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <>
      <h2>Numbers</h2>
      {filterContacts.map((names) => (
        <div key={names.id}>
          {" "}
          <li >
            {names.name} {names.number}
          </li>{" "}
          <button   onClick={() =>delteHandle(names.id)}>delte</button>
        </div>
      ))}
    </>
  );
};
export default Numbers;
