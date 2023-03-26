import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, onDelete, onEdit }) {
  // using state to know that should we display title or edit option
  const [showEdit, setShowEdit] = useState(false);
  // it is to handle edit functionality.
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  // it will handle delete function
  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  // function handler while submitting the book detail
  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };
  // to determine what to display based on showedit state
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }
  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div className="content">{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}></button>
      </div>
    </div>
  );
}

export default BookShow;
