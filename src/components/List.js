import React, { Component } from 'react';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';
import ItemContainer from './../containers/ItemContainer';

const SortableList = SortableContainer(({ items }) => {
  return (
      <ol className="List">
        {items.map((value, index) => 
          <ItemContainer key={`item-${index}`} index={index} item={value} />
        )}
      </ol>
  )
});

// finalize list this Priority index (onSortEnd)
export default class List extends Component {
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.index, oldIndex, newIndex),
    });
  };

  render() {
    const { listState } = this.props;

    // return <SortableList items={listState} onSortEnd={this.onSortEnd} />;
    return <SortableList items={listState} transitionDuration={0} pressDelay={200} />;
  }
}