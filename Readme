Documentación API Proyecto Final
## 1. POST /register
 - **Descripción**: Registra un nuevo usuario en la base de datos.
Cuerpo de la solicitud: Debe enviar un objeto ```json con los siguientes campos:
```json
{
  "username": "usuario123",
  "password": "password123",
  "email": "usuario@example.com"
}
```
- **Respuesta exitosa**: Código 201 con el mensaje:
```json 
{
  "message": "Usuario registrado con éxito"
}
```
 - **Errores**:
400: "Error registrando usuario" (cuando ocurre un error al guardar los datos).
## 2. POST /login
 - **Descripción**: Autentica a un usuario comparando el nombre de usuario y la contraseña.
Cuerpo de la solicitud: Debe enviar un objeto ```json con los siguientes campos:
```json
 
{
  "username": "usuario123",
  "password": "password123"
}
```
 - **Respuesta exitosa**: Código 200 con los datos del usuario:
```json
 
{
  "id": 1,
  "username": "usuario123",
  "email": "usuario@example.com"
}
```
 - **Errores**:
404: "Credenciales inválidas" (si el usuario no se encuentra o la contraseña es incorrecta).
## 3. GET /events
 - **Descripción**: Obtiene la lista de todos los eventos registrados en la base de datos.
 - **Respuesta exitosa**: Código 200 con un arreglo de eventos:
```json
[
  {
    "id": 1,
    "name": "Evento 1",
    "description": " - **Descripción** del evento 1",
    "date": "2024-10-05",
    "createdBy": 1
  },
  ...
]
```
 - **Errores**:
500: "Error al tratar de obtener los eventos" (cuando ocurre un error al obtener los datos).
## 4. POST /events
 - **Descripción**: Crea un nuevo evento en la base de datos.
Cuerpo de la solicitud: Debe enviar un objeto ```json con los siguientes campos:
```json
{
  "name": "Nombre del Evento",
  "description": " - **Descripción** del Evento",
  "date": "2024-10-05",
  "createdBy": 1
}
```
 - **Respuesta exitosa**: Código 201 con el id del evento recién creado:
```json
 
{
  "id": 2
}
```
 - **Errores**:
500: "Error creando eventos" (si ocurre un error al crear el evento).
## 5. POST /register-event
 - **Descripción**: Inscribe a un usuario en uno o más eventos.
Cuerpo de la solicitud: Debe enviar un objeto ```json con los siguientes campos:
```json
{
  "userId": 1,
  "eventIds": [1, 2, 3]
}
```
 - **Respuesta exitosa**: Código 200 con el mensaje:
```json
{
  "message": "Usuario inscrito exitosamente"
}
```
 - **Errores**:
500: "Error inscribiendo usuario al evento" (si ocurre un error durante la inscripción).
## 6. GET /user/:userId/events
 - **Descripción**: Obtiene los eventos a los que un usuario está inscrito.
Parámetro de URL:
userId: ID del usuario cuyo registro de eventos se desea consultar.
 - **Respuesta exitosa**: Código 200 con un arreglo de eventos en los que está registrado el usuario:
```json
[
  {
    "id": 1,
    "name": "Evento 1",
    "description": " - **Descripción** del evento 1",
    "date": "2024-10-05"
  },
  ...
]
```
 - **Errores**:
500: "Error obteniendo los eventos asociados al usuario" (si ocurre un error al obtener los eventos).