const FilterHouse = (props) => {
  const handleSelect = (ev) => {
    props.handleInputChange(ev.currentTarget.value, "house");
  };
  return (
    <>
      <label>Filtra por casa</label>
      <select onChange={handleSelect}>
        <option value="gryffindor"> Gryffindor</option>
        <option value="hufflepuff"> Hufflepuff</option>
        <option value="ravenclaw"> Ravenclaw</option>
        <option value="slytherin"> Slytherin</option>
      </select>
    </>
  );
};

export default FilterHouse;
