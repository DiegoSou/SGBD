## Create .env file

```
CRYPTO_SECRET=your_crypto_secret
SERVICE_PORT=api_port
DB_USER=db_user
DB_HOST=db_host
DB_NAME=db_name
DB_PASSWORD=db_password
DB_PORT=db_port

DATABASE_URL="postgresql://db_user:db_password@db_host:db_port/db_name?schema=public"
```

## Execute docker

```
(for the first time)
*comment the function start_server() at index.ts file
*update your DB_HOST to localhost
*change your DB_PORT to a different port (5432 is the default port when you have postgres installed locally) 

run: docker-compose up

*open a new terminal and run:
    prisma migrate dev

after you do these steps, just close the server and run again:
    docker-compose up
```
