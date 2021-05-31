module.exports = {
    get: {
        tags: ['User'],
        summary: 'Get user by id',
        parameters: [
            {   name: 'id',
                in: 'path',
                required: true,
            },
        ],
        responses: {
            '200': {
                description: 'user by id',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/userId'
                        }
                    }
                }
            }
        }
    }
}