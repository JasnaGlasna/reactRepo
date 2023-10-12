import React, { useState, useEffect } from 'react';
import { Input } from './Input';
import DropdownWrapper from './DropdownWrapper';

export const Login = () => {
  const elements = [
    { value: "Facebook", name: "Facebook" },
    { value: "Instagram", name: "Instagram" },
    { value: "SnapChat", name: "SnapChat" },
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const [comment, setComment] = useState("");
  const [commentMode, setCommentMode] = useState("single");

  useEffect(() => {
    console.log("Username: ", username);
    console.log("Password: ", password);
    console.log("Comment: ", comment);
  }, [username, password, comment]);

  function handleInputChange() {
    setInputType(inputType === "password" ? "text" : "password");
  }

  function toggleCommentMode() {
    setCommentMode(commentMode === "single" ? "multi" : "single");
  }

  function showValues(event) {
    event.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}\nComment: ${comment}`);
  }

  return (
    <div id="login">
      <form onSubmit={showValues}>
        <Input
          type={"text"}
          placeholder={"Enter Username"}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type={inputType}
          placeholder={"Enter Password"}
          name={"password"}
          value={password}
          setToggle={handleInputChange}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="comment-container">
          {commentMode === "single" ? (
            <Input
              type="text"
              placeholder="Enter Comment"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          ) : (
            <textarea
              placeholder="Enter Comment"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          )}
          <button
            className="comment-toggle-button"
            type="button"
            onClick={toggleCommentMode}
          >
            {commentMode === "single" ? (
              <i className="fa fa-comment"></i>
            ) : (
              <i className="fa fa-comment-o"></i>
            )}
          </button>
        </div>
        <DropdownWrapper elements={elements} />
        <button className="action-button">Sign In</button>
      </form>
    </div>
  );
};
