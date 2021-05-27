module.exports = {
    delete: {
        tags: ['User'],
        summary: 'Delete user',
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
                description: 'Delete user',
                content: {
                    'application/json': {
                        schema: {
                            $ref: "#/components/schemas/respDelete",
                        }
                    }
                }
            }
        }
    }
}