const db = require('../data/db-config');

module.exports = {
    getTodos,
    insertTodo,
    reset,
    deleteTodo
}

async function getTodos() {
    return await db('todo')
}

async function insertTodo(item) {
    return await db('todo').insert(item)
}

async function deleteTodo(id) {
    return await db('todo').where({ id }).del()
}

async function reset() {
    return await db('todo').truncate()
}