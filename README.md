# Next.JS Openjira APP
Para correr localmente, se necesita la base de datos
```
docker-compose up -d
```

* El -d significa __ditached__

* MongoDB URL Local:
```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__

## Llenar la base de datos con informacion de pruebas

Desde postman o equivalentes llamar desde un get:
```
http://localhost:3000/api/seed
```
