const FilterHouse = (props) => {
  const handleSelect = (ev) => {
    props.handleInputChange(ev.currentTarget.value, "house");
  };
  return (
    <>
      <label className="filter__text">Filtra por casa</label>
      <div className="filter__select">
        <select value={props.FilterHouse} onChange={handleSelect}>
          <option value="gryffindor"> Gryffindor</option>
          <option value="hufflepuff"> Hufflepuff</option>
          <option value="ravenclaw"> Ravenclaw</option>
          <option value="slytherin"> Slytherin</option>
        </select>
      </div>
    </>
  );
};

export default FilterHouse;
