module.exports = {
    put: {
        tags: ['To Do'],
        summary: 'update to do',
        parameters: [
            {   name: 'x-token',
            in: 'header',
            required: true,
        }
    ],
    requestBody: {
        description: "{ task id }",
        required: true,
            content: {
                "application/json": {
                    schema: {
                      $ref: "#/components/schemas/bodyUpdateToDo",
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
                            $ref: '#/components/schemas/updateToDo'
                        }
                    }
                }
            }
        }
    }
}