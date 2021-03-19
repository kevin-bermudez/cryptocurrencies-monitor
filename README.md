# CRYPTOCURRENCIES MONITOR

## REQUISITOS PARA CORRER EL PROYECTO

---

En la máquina donde se vaya a correr el proyecto, se debe tener instalado

- Node.js
- Mysql (y crear una base de datos accesible) o Docker y docker-compose para utilizar el archivo docker-compose en el directorio database de este mismo repositorio

### Para crear una base de datos a partir del archivo docker-compose

En una terminal y sobre el directorio database escriba el siguiente comando:

```console
docker-compose up --build -d
```

---

## Instalar los paquetes requeridos por la aplicación

---

Una vez esté en el directorio donde desea guardar el proyecot (un diretorio vacío)

```console
git clone https://github.com/kevindanielbermudez/cryptocurrencies-monitor.git .

npm i

```

---

## Configuración de la aplicación

---

Duplique el archivo .env.example y el nuevo, nombrelo como .env, editelo como corresponda con las credenciales de la base de datos, el puerto para el servidor y el key a utilizar por JWT

---

## Scripts de los que dispone el proyecto

---

`npm run db:migrations` crea las tablas en la base de datos acorde a los modelos definidos, debe ejecutarse antes del siguiente comando.

`npm run dev` ejecuta el servidor en la máquina local en el puerto definido

`npm run test` ejecuta las pruebas unitarias

---

## Documentación

---

Cuando el servidor está corriendo se puede encontrar en la url **http://{url}/docs**
