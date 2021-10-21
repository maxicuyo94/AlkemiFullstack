# Boilerplate

### Instrucciones para ejecutar el proyecto

- El proyecto tiene dos carpetas `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

- En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
  DB_USER=usuariodepostgres
  DB_PASSWORD=passwordDePostgres
  DB_HOST=localhost
```

- Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres.

- Adicionalmente será necesario que creen desde psql una base de datos llamada `pokemon`

- El contenido de `client` fue creado usando: Create React App.

- En ambas carpetas ejecutar
  > npm i
  >
  > npm start
