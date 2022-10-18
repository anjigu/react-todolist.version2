import "./ToDoTemplate.scss";

function TodoTemplate({children}) {
    return (
        <div className="TodoTemplate">
            <div className="app-title">Todo List</div>
            <div className="content">{children}</div>
            <div className="made">@made by fejigu</div>
        </div>
    )
}

export default TodoTemplate;