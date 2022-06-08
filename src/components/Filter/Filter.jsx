import PropTypes from 'prop-types';

export default function Filter({ filter, addToFilter }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="filter" value={filter} onChange={addToFilter} />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  addToFilter: PropTypes.func.isRequired,
};
