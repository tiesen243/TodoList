import storage from "../util/storage.js";

const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    },
    editIdx: null
}

const actions = {
    add({ todos }, title) {
        if (title) {
            todos.push({ title: title, completed: false });
            storage.set(todos)
        }
    },
    toggle({ todos }, idx) {
        let todo = todos[idx]
        todo.completed = !todo.completed
        storage.set(todos)
    },
    toggleAll({ todos }, completed) {
        todos.forEach(todo => todo.completed = completed)
        storage.set(todos)
    },
    destroy({ todos }, idx) {
        todos.splice(idx, 1)
        storage.set(todos)
    },
    switchFilter(state, filter) {
        state.filter = filter
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active);
        storage.set(state.todos)
    },
    startEdit(state, idx) {
        state.editIdx = idx
    },
    endEdit(state, title) {
        if (state.editIdx !== null) {
            if (title) state.todos[state.editIdx].title = title
            else this.destroy(state, state.editIdx)
            state.editIdx = null
            storage.set(state.todos)
        }

    },
    cancelEdit(state) {
        state.editIdx = null
    }
}

export default function reducer(state = init, action, args) {

    actions[action] && actions[action](state, ...args)

    return state
}