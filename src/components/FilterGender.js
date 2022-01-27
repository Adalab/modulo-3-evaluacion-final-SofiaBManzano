const FilterGender = (props) => {
  const handleSelectGender = (ev) => {
    props.handleInputChange(ev.currentTarget.value, "gender");
  };
  return (
    <>
      <label className="filter__text">Filtra por género</label>
      <div className="filter__select">
        <select value={props.FilterGender} onChange={handleSelectGender}>
          <option value=""> Despliégame</option>
          <option value="male"> Hombre</option>
          <option value="female"> Mujer</option>
        </select>
      </div>
    </>
  );
};
export default FilterGender;
