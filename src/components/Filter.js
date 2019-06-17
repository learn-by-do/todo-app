import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions/filter';

const filterList = ['All', 'Done', 'Todo'];

const Filter = ({ currentFilter, setFilter }) => {
  const tabs = filterList.map(filter => {
    return (
      <span
        key={filter}
        className={cn('filter', filter === currentFilter && 'filter--active')}
        onClick={() => {
          setFilter(filter);
        }}
      >
        {filter}
      </span>
    );
  });
  return <div className="filter-wrapper">{tabs}</div>;
};

const stateMap = state => {
  return {
    currentFilter: state.filter
  };
};

export default connect(
  stateMap,
  { setFilter }
)(Filter);
