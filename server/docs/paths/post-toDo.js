module.exports = {
    post: {
        tags: ['To Do'],
        summary: '<-user id / new to do',
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
        requestBody: { 
            content: {
                "application/json": {
                    schema: {
                      $ref: "#/components/schemas/bodyNewToDo"
                    }
                }
            }
        },
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