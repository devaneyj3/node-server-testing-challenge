const request = require('supertest');

const todoTest = require('./todoModel');

const server = require('../server');


describe('Todo Routes', () => {
    describe('POST', () => {
        //validate it is the right endpoint and the status code is 201
        it('returns a 201', async() => {
            const item = {
                id: 1,
                name: 'george'
            }
            const response = await request(server).post('/api/todo').send(item)
            expect(response.status).toBe(201)

        })
        it('insert todo into db', async () => {
            const item = {
                id: 1,
                name: 'george'
            }
            await todoTest.insertTodo(item)
      
            const todos = await todoTest.getTodos()
          

            expect(todos).toHaveLength(1)
            expect(todos[0].name).toBe('george')
        })
        beforeEach(async () => {
            await todoTest.reset()
        })
    })
    describe('DELETE', () => {
        it('deletes from the db', async() => {
            const todos = await todoTest.getTodos()
            
            await todoTest.deleteTodo(todos[0].id)

            const afterTodoArr = await todoTest.getTodos()

            expect(afterTodoArr).toHaveLength(0)
        })
    })
    
})