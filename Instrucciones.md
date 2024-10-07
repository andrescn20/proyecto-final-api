# Instructivo para la Ejecución de la API

Este instructivo detalla los pasos necesarios para clonar el repositorio y ejecutar la API localmente.

## 1. Clonar el Repositorio

1. Abrir la terminal.
2. Navegar a la carpeta donde se desea clonar el proyecto.
3. Ejecutar el siguiente comando para clonar el repositorio:

```bash
git clone https://github.com/andrescn20/proyecto-final-api.git
```
Ingresar en la carpeta del proyecto:

```bash
cd proyecto-final-api
```
## 2. Instalar las Dependencias
Ejecutar el siguiente comando para instalar las dependencias necesarias del proyecto:

```bash
npm install
```
Este comando leerá el archivo package.json y descargará todas las dependencias necesarias para el correcto funcionamiento de la API.

## 3. Ejecutar la API
Una vez instaladas las dependencias, iniciar el servidor con el siguiente comando:

```bash
node index.js
```
Si el servidor se ejecuta correctamente, se debería visualizar el siguiente mensaje en la terminal:

```bash
Servidor iniciado en http://localhost:3000
```
## 4. Verificar el Funcionamiento de la API
Abrir un navegador web o una herramienta de pruebas de APIs como Postman.

Realizar una petición GET a la siguiente URL:

```bash
http://localhost:3000/
```
La respuesta esperada será similar a:

```json
{
    "message": "API funcionando correctamente"
}
```
## 5. Archivos Importantes
- `index.js`: Archivo principal que contiene la lógica de la API.
- `package.json`: Archivo de configuración que especifica las dependencias del proyecto.
- `event-management.db`: Archivo de base de datos SQLite donde se almacenan los datos de los usuarios y eventos.
## 6. Notas Adicionales
- La base de datos SQLite se generará automáticamente al iniciar la API por primera vez.
- En caso de necesitar reiniciar la base de datos, se debe eliminar el archivo event-management.db y luego reiniciar el servidor.
