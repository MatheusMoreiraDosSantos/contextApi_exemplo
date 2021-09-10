import React from 'react';

function TodoListItem({ todo }) {
    return (
        <div>
            {todo.id} - {todo.title} - {todo.done ? 'true' : 'false'}
      </div>
  );
}

export default TodoListItem;