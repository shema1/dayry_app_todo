import React, { useState } from "react";
import "./addForm.scss"
import PropTypes from "prop-types";
const AddForm = ({ create }) => {
  const [itemName, setItemName] = useState("");

  const createItem = (event) => {
    event.preventDefault();
    if (itemName === "") return;
    let newItem = {
      id: Math.floor(Math.random() * 99999),
      name: itemName,
      comments: [],
    };
    create(newItem);
    setItemName("");
  };
  return (
    <>
      <form className="form" onSubmit={(event)=>createItem(event)}>
        <input
          className="form__input"
          type="text"
          value={itemName}
          name="input"
          placeholder="Type name here..."
          onChange={(event) => setItemName(event.target.value)}
          autoComplete="off"
          required
        />
        <button className="btn form__btn" >
          Add New
        </button>
      </form>
    </>
  );
};

AddForm.propTypes = {
  create: PropTypes.func
}
export default AddForm;
