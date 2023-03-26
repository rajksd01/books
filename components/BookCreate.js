import { useState } from "react";

function BookCreate({ onBookCreate }) {
  const [title, setTitle] = useState("");
  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };
  const handleInputSubmit = (e) => {
    e.preventDefault();
    onBookCreate(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleInputSubmit}>
        <label>Title</label>
        <input
          className="input"
          type="text"
          value={title}
          onChange={handleInputChange}
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}
export default BookCreate;
