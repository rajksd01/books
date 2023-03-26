import { useState } from "react";
function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(book.id, title);
  };
  return (
    <form className="book-edit" onSubmit={handleFormSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleTitleChange} />
      <button className="button is-primary ">Save</button>
    </form>
  );
}
export default BookEdit;
