module.exports = {
    put: {
        tags: ['User'],
        summary: 'Edit user',
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
                        $ref: "#/components/schemas/editUser"
                    },
                }
            }
        },
        responses: {
            '200': {
                description: 'Edit user',
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