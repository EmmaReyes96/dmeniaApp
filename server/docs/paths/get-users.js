module.exports = {

    get: {
        tags: ['User'],
        summary: 'Get all users',
        parameters: [],
        responses: {
            '200': {
                description: 'successful operation',
                content:{
                    'application/json': {
                         schema: {
                            $ref: "#/components/schemas/users"
                        }
                    }
                }
               
            }
        }
    }
}