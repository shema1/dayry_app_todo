import React, { useState, useEffect } from "react";
import CommentsItem from "../commentsItem/CommentsItem";
import PropTypes from "prop-types";
import "./comments.scss";

const Comments = ({ selectedItem, updateItem }) => {
  const [comment, setComment] = useState("");
  const [img, setImg] = useState("#000000");

  const createComment = (event) => {
    event.preventDefault();
    if (!selectedItem.id) return alert("Select item");
    let item = { ...selectedItem };
    let newComment = {
      img,
      comment,
    };
    item.comments.push(newComment);
    updateItem(item);
    setComment("");
  };

  const keydownHandler = (event) => {
    if (event.keyCode === 13 && event.ctrlKey) {
      createComment(event);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
  }, [keydownHandler]);

  return (
    <div className="comments container  ">
      <h1>Comments #{selectedItem.id}</h1>
      <ul>
        {selectedItem.comments &&
          selectedItem.comments.map((elem) => (
            <CommentsItem {...elem} key={elem.comment} />
          ))}
      </ul>
      <form
        className="form-comments"
        onSubmit={(event) => createComment(event)}
      >
        <input
          type="color"
          value={img}
          onChange={(event) => setImg(event.target.value)}
        />
        <textarea
          className="form-comments__text"
          placeholder="Type comment here ..."
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          required
        ></textarea>
        <button className="btn">Add New</button>
      </form>
    </div>
  );
};
Comments.propTypes = {
  selectedItem: PropTypes.object,
  updateItem: PropTypes.func,
};

export default Comments;
