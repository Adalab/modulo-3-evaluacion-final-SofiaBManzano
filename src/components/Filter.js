import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";

const Filter = (props) => {
  return (
    <form>
      <FilterName handleInputChange={props.handleInputChange} />
      <FilterHouse handleInputChange={props.handleInputChange} />
    </form>
  );
};
export default Filter;
