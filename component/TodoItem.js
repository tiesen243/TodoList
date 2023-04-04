import html from "../js/core.js"

function TodoItem({ todo, idx, editIdx }) {
    return html`
    <li class="${todo.completed && 'completed'} 
        ${editIdx === idx && 'editing'}"
    >
        <div class="view">
            <input 
                class="toggle" 
                type="checkbox" 
                ${todo.completed && 'checked'} 
                onchange="dispatch('toggle', ${idx})"
            >
            <label ondblclick="dispatch('startEdit', ${idx})">${todo.title}</label>
            <button 
                class="destroy"
                onclick="dispatch('destroy', ${idx})"
            ></button>
        </div>
        <input 
            class="edit" 
            value="${todo.title}"
            onkeyup="event.keyCode === 13 && dispatch('endEdit', this.value.trim()) ||
                    event.keyCode === 27 && dispatch('cancelEdit')
                    "
        >
    </li >
        `
}

export default TodoItem