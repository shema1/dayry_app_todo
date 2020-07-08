import React from "react";
import PropTypes from "prop-types";
import "./item.scss";
const Item = ({ id, name, comments, deleteItem, selectItem, selectedItem }) => {
  let isActive = id === selectedItem.id ? "active-item" : " ";

  return (
    <li className={`list-item ${isActive}`} onClick={() => selectItem(id)}>
      <span className="list-item__name">{name}</span>
      <span className="list-item__count-coments">{comments.length}</span>
      <button className="list-item__btn" onClick={(e) => deleteItem(id, e)}>
        Delete
      </button>
    </li>
  );
};

Item.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  comments: PropTypes.array,
  deleteItem: PropTypes.func,
  selectItem: PropTypes.func,
  selectedItem: PropTypes.object,
};
export default Item;
