import PropTypes from 'prop-types';

export default function Filter({ filter, func }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="filter" value={filter} onChange={func} />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
