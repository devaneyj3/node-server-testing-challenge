const express = require('express');

const routes = express.Router();
const todo = require('./todoModel')

//get todos
routes.post('/', async (req, res) => {
    const changes = req.body;
    await todo.insertTodo(changes)
    res.status(201).send(req.body)
})

//delete todo by id
routes.delete('/:id', async(req, res) => {
    const { id } = req.params;
    await todo.deleteTodo(id);
    res.status(200).json({message: `ID# ${id} has been deleted`})
})


module.exports = routes;