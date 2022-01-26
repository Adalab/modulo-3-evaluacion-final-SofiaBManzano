import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";

const Filter = (props) => {
  return (
    <form onSubmit={(ev) => ev.preventDefault()}>
      <FilterName
        filterName={props.filterName}
        handleInputChange={props.handleInputChange}
      />
      <FilterHouse
        FilterHouse={props.FilterHouse}
        handleInputChange={props.handleInputChange}
      />
    </form>
  );
};
export default Filter;
