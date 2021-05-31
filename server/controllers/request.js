module.exports.res200 = ( req, res ) => {

    res.status(200).json({
        ok:true,
        msg: 'La solicitud ha tenido éxito.'
    })
    
}
module.exports.res201 = ( req, res ) => {

    res.status(201).json({
        ok:true,
        msg: 'La solicitud ha tenido éxito y se ha creado un nuevo recurso.'
    })

}
module.exports.res301 = ( req, res ) => {

    res.status(301).json({
        ok:true,
        msg: 'Este código de respuesta URI del recurso solicitado ha sido cambiado.',
        Loacation: 'http://www.example.org/index.asp'
    })
    
}
module.exports.res400 = ( req, res ) => {

    res.status(400).json({
        ok:true,
        msg: 'El servidor no pudo interpretar la solicitud dada.'
    })
    
}
module.exports.res404 = ( req, res ) => {

    res.status(404).json({
        ok:true,
        msg: 'El servidor no pudo encontrar el contenido solicitado.'
    })
    
}
module.exports.res418 = ( req, res ) => {

    res.status(418).json({
        ok:true,
        msg: 'El servidor se rehúsa a intentar hacer café con una tetera.'
    })
    
}
module.exports.res500 = ( req, res ) => {

    res.status(500).json({
        ok:true,
        msg: 'El servidor ha encontrado una situación que no sabe cómo manejarla.'
    })
    
}