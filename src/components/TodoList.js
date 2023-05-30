export default function TodoList({ list, remove }) {
  return (
    <div className="todo-list todo-div">
      {list.length > 0 ? (
        <ul>
          {list.map((entry, index) => (
            <div key={index} className="todos-container">
              <li key={index} className="todos">
                {entry}
              </li>

              <button
                onClick={() => {
                  remove(entry);
                }}
                className="remove-btn btn"
              >
                Remove
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div>
          <p className="empty-todo">Task empty</p>
        </div>
      )}
    </div>
  );
}
