const AlternateNames = (props) => {
  const handleAlternateNames = (ev) => {
    props.handleInputChange(ev.currentTarget.value, "number");
  };
  return (
    <input
      type="number"
      onChange={handleAlternateNames}
      value={props.alternateNames}
    ></input>
  );
};

export default AlternateNames;
