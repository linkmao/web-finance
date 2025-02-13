# Apuntes generales

En est punto considero que hay un avance improtante del diseño del backen especialmente para las operaciones basicas CRUD, muy especialmente hasta este punto está usado el concepto de TOKEN para la autenticación el flujo de trabajo hasta aca es el siguiente


1. rutas para la inscripcion de un usuario nuevo
2. ruta para la autenticacion de un usuario, al validar este entrega un token
3. El token se usa para proteger rutas como midleware, al validar el toque este guarda en el objeto req.userId el id del usuario logueado, este permite por ejemplo que solo e muestre las obligaciones de asociadas al token logueado

se han protegido:
ruta get: de tal manera que solo se pueden ver u obtener las obligaciones del usuario identificacdo
por el momento no se considera importante proteger las rutas de borrado y de actualizacion de obligaciones ya que sus id, necesarios para la url solo se obtienen si hay un usuario identificado



       master--------\
                      \
                        \---------   development
