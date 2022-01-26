import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";
import "../styles/Filter.scss";
import FilterGender from "./FilterGender";
const Filter = (props) => {
  return (
    <form className="filter" onSubmit={(ev) => ev.preventDefault()}>
      <FilterName
        filterName={props.filterName}
        handleInputChange={props.handleInputChange}
      />
      <FilterHouse
        filterHouse={props.filterHouse}
        handleInputChange={props.handleInputChange}
      />
      <FilterGender
        filterGender={props.filterGender}
        handleInputChange={props.handleInputChange}
      />
    </form>
  );
};
export default Filter;
