module.exports = {
    get: {
        tags: ['To Do'],
        summary: '<-user id / to do list',
        parameters: [
            {   name: 'id',
                in: 'path',
                required: true,
            },
            {   name: 'x-token',
                in: 'header',
                required: true,
            },
        ],
        responses: {
            '200': {
                description: 'to do list',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/listToDo'
                        }
                    }
                }
            }
        }
    }
}