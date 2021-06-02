module.exports.res = ( req, res ) => {

    status = req.params.code

    switch (status) {
        case "200":
            res.json({
                ok:true,
                msg: 'La solicitud ha tenido éxito.',
                status: 200
            })
          break;
        case "201":
            res.json({
                ok:true,
                msg: 'La solicitud ha tenido éxito y se ha creado un nuevo recurso.',
                status: 201
            })          
          break;
        case "301":
            res.status(301).json({
                ok:true,
                msg: 'Este código de respuesta URI del recurso solicitado ha sido cambiado.',
                Loacation: 'http://www.example.org/index.asp'
            })
          break;
        case "400":
            res.status(400).json({
                ok:true,
                msg: 'El servidor no pudo interpretar la solicitud dada.'
            })
          break;
        case "404":
            res.status(404).json({
                ok:true,
                msg: 'El servidor no pudo encontrar el contenido solicitado.'
            })
          break;
        case "418":
            res.status(418).json({
                ok:true,
                msg: 'El servidor se rehúsa a intentar hacer café con una tetera.'
            })
          break;
        case "500":
            res.status(500).json({
                ok:true,
                msg: 'El servidor ha encontrado una situación que no sabe cómo manejarla.'
            })
          break;
      }
    
}