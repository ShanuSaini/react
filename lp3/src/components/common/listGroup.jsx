import React from 'react';

const ListGroup = (props) => {
  const { items, selectedItem, onItemSelect } = props;

  return (
    <ul className="list-group">
      { items.map(
        item => 
          <li 
            onClick={()=>onItemSelect(item)} 
            key={item[props.valueProperty]} 
            className={selectedItem === item ? 'cp list-group-item active' : 'cp list-group-item'}>
              {item[props.textProperty]}
          </li>
      )}
    </ul>
  );
}

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
};
 
export default ListGroup;