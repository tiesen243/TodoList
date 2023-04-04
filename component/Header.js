import html from "../js/core.js"

function Header() {
    return html`
        <header class="header">
            <h1>todos</h1>
            <input 
                class="new-todo" 
                placeholder="What needs to be done?" 
                autofocus 
                onkeyup="event.code === 'Enter' && dispatch('add', this.value.trim());"
            >
            
        </header>
    `
}

export default Header

