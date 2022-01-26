const FilterName = (props) => {
  const handleInput = (ev) => {
    props.handleInputChange(ev.currentTarget.value, "name");
  };
  return (
    <label>
      Busca por personaje
      <input
        type="text"
        name="name"
        onChange={handleInput}
        value={props.filterName}
      />
    </label>
  );
};
export default FilterName;
