import React from 'react';

const Filter = (props) => {

  function handleFilterBoxChange(event) {
    props.onTitleFiltered(event.target.value)
  }

  function handleDateFilter(event) {
    props.onDateFiltered(event.target.value)
  }

  return (
    <div>
    <input
      id='title-filter'
      type='text'
      defaultValue='Search for Title...'
      onChange={handleFilterBoxChange}
    />
    <select onChange={handleDateFilter}>
      <option defaultValue="sort by..."></option>
      <option value="date">Date</option>
    </select>
    </div>
  )
}

export default Filter;
