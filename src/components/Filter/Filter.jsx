import PropTypes from 'prop-types';
import { Component } from 'react';

export default class Filter extends Component {
  render() {
    const { filter, addToFilter } = this.props;

    return (
      <>
        <p>Find contacts by name</p>
        <input type="filter" value={filter} onChange={addToFilter} />
      </>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  addToFilter: PropTypes.func.isRequired,
};
