const FilterName = (props) => {
  const handleInput = (ev) => {
    props.handleInputChange(ev.currentTarget.value, "name");

    //   {
    //   value: ev.currentTarget.value,
    //   key: "name",
    // });
    // console.log(ev.currentTarget.value);
  };
  return (
    <label>
      Busca por personaje
      <input type="text" name="name" onChange={handleInput} />
    </label>
  );
};
export default FilterName;
