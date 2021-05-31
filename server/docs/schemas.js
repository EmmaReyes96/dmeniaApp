module.exports = {
    components: {
        schemas: {

            users:{
                type: 'object',
                properties: {
                    ok: {
                        type: 'boolean'
                    },
                    usersDB: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/user'
                        }
                    }
                }
            },
            user:{
                type: 'object',
                properties: {
                    _id: {
                        type: 'integer',
                        format: 'int64'
                    },
                    email: {
                        type: 'string'
                    },
                    password:{
                        type: 'string'
                    },
                    name: {
                        type: 'string'
                    }
                }
            },
            userId: {
                type: 'object',
                properties: {
                    ok: {
                        type: 'boolean'
                    },
                    userDB: {
                        $ref: '#/components/schemas/user'
                    }
    
                }
            },
            postUser: {
                type: 'object',
                properties: {
                    ok: {
                        type: 'boolean'
                    },
                    msg: {
                        type: 'string'
                    },
                    newUser: {
                        $ref: '#/components/schemas/user'
                    },
                    token: {
                        type: 'string'
                    }
                }
            },
            createUser: {
                type: 'object',
                properties: {
                    email: {
                        type: 'string'
                    },
                    name: {
                        type: 'string'
                    },
                    password: {
                        type: 'string'
                    },
                }
            },
            editUser: {
                type: 'object',
                properties: {
                    email: {
                        type: 'string'
                    },
                    name: {
                        type: 'string'
                    }
                }
            },
            login: {
                type: 'object',
                properties: {
                    email: {
                        type: 'string'
                    },
                    password: {
                        type: 'string'
                    }
                }
            },
            respLogin: {
                type: 'object',
                properties: {
                    ok: {
                        type: 'boolean'
                    },
                    token: {
                        type: 'string'
                    },
                    userDB: {
                        $ref: '#/components/schemas/user'
                    }
                }
            },
            respDelete:{
                type: 'object',
                properties: {
                    ok: {
                        type: 'boolean'
                    },
                    msg: {
                        type: 'string'
                    }
                }
            },
            toDo: {
                type: 'object',
                properties:{
                    _id: {
                        type: 'string'
                    },
                    txt: {
                        type: 'string'
                    },
                    checkOut: {
                        type: 'boolean'
                    },
                    uid: {
                        type: 'string'
                    }
                }
            },
            listToDo:{
                type: 'object',
                properties: {
                    ok: {
                        type: 'boolean'
                    },
                    toDoDB:{
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/toDo'
                        }
                    }                    
                }
            },
            updateToDo:{
                type: 'object',
                properties: {
                    ok: {
                        type: 'boolean'
                    },
                    updateToDo:{
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/toDo'
                        }
                    }                    
                }
            },
            updateToDo:{
                type: 'object',
                properties: {
                    ok: {
                        type: 'boolean'
                    },
                    updateToDo:{
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/toDo'
                        }
                    }                    
                }
            },
            newToDo:{
                type: 'object',
                properties: {
                    ok: {
                        type: 'boolean'
                    },
                    newToDo:{
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/toDo'
                        }
                    }                    
                }
            },
            bodyNewToDo: {
                type: 'object',
                properties: {
                    txt: {
                        type: 'string'
                    }
                }
            },
            bodyUpdateToDo: {
                type: 'object',
                properties: {
                    checkOut: {
                        type: 'boolean'
                    },
                    id: {
                        type: 'string'
                    }
                }
            }  
        }
    }
}