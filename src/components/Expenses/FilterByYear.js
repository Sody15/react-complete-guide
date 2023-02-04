import "./FilterByYear.css";

const FilterByYear = (props) => {
  const yearChanged = (event) => {
    props.onYearChanged(event.target.value);
  };

  return (
    <div className="filter-by-year">
      <h2>Filter By Year</h2>
      <select
        name="year"
        id="year"
        onChange={yearChanged}
        value={props.selected}
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default FilterByYear;
