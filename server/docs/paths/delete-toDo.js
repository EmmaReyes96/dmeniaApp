module.exports = {
    delete: {
        tags: ['To Do'],
        summary: '<-task id / delete to do',
        parameters: [
            {   name: 'id',
                in: 'query',
                required: true,
            },
            {   name: 'x-token',
                in: 'header',
                required: true,
            }
        ],
        responses: {
            '200': {
                description: 'to do list',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/respDelete'
                        }
                    }
                }
            }
        }
    }
}