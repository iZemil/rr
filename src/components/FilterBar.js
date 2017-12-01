import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

// search input with markdown below
// import TextField from 'material-ui/TextField';


const FilterBar = ({ handleClick, handleChange, filterState }) => {

  return (
    <Tabs>
      <Tab
        label="All"
        onActive={(e) => handleClick('SHOW_ALL')}
      />
      <Tab
        label="Completed"
        onActive={(e) => handleClick('SHOW_COMPLETED')}
      />
      <Tab
        label="Active"
        onActive={() => handleClick('SHOW_ACTIVE')}
      />
    </Tabs>
      // <div className="sort-bar__search">
      //   <TextField
      //     hintText="Search"
      //     onChange={(e) => {handleChange(e)}}
      //   />
      // </div>
  )
}

export default FilterBar;