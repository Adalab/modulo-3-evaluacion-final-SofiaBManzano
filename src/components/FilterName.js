import "../styles/Filter.scss";
const FilterName = (props) => {
  const handleInput = (ev) => {
    props.handleInputChange(ev.currentTarget.value, "name");
  };
  return (
    <label className="filter__text">
      Busca por personaje
      <input
        className="filter__input"
        type="text"
        name="name"
        onChange={handleInput}
        value={props.filterName}
      />
    </label>
  );
};
export default FilterName;
