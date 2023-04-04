import html from "../js/core.js";

import TodoItem from "./TodoItem.js";
import { connect } from "../js/store.js";

function TodoList({ todos, filter, filters, editIdx }) {

    return html`
    <section class="main">
        <input 
            id="toggle-all" 
            class="toggle-all" 
            type="checkbox"
            onchange="dispatch('toggleAll', this.checked)"
            ${todos.every(filters.completed) && 'checked'}
        >
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            ${todos
            .filter(filters[filter])
            .map((todo, idx) => TodoItem({ todo, idx, editIdx }))}
        </ul>
    </section>
    `;
}

export default connect()(TodoList)