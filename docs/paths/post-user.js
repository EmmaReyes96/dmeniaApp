module.exports = {
    post: {
        tags: ['User'],
        summary: 'Create User',
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                      $ref: "#/components/schemas/createUser",
                    }
                }
            }
        },
        responses: {
            '200': {
                description: 'user by id',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/postUser'
                        }
                    }
                }
            }
        }
    }
}