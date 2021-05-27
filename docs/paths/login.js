module.exports = {
    post: {
        tags: ['Auth'],
        summary: 'Login',
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                      $ref: "#/components/schemas/login",
                    }
                }
            }
        },
        responses: {
            '200': {
                description: 'Login',
                content: {
                    'application/json': {
                        schema: {
                            $ref: "#/components/schemas/respLogin",
                        }
                    }
                }
            }
        }
    }
}