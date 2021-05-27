module.exports = {
    get: {
        tags: ['Auth'],
        summary: 'renew token',
        parameters: [
            {   name: 'x-token',
                in: 'header',
                required: true,
            },
        ],
        responses: {
            '200': {
                description: 'successful operation',
                content:{
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