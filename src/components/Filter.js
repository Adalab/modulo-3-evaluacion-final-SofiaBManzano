import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";
import "../styles/Filter.scss";
const Filter = (props) => {
  return (
    <form className="filter" onSubmit={(ev) => ev.preventDefault()}>
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
