# Description

## Run in dev mode

1. Clone repository
2. Create a ```.env.template``` copy and rename to ```.env``` and change environment variables
3. Install dependencies ```npm install```
4. Up database ```docker compose up -d```
5. Correr migraciones de Prisma ```npx prisma migrate dev```
6. Run project ```npm run dev```

## Run in prod mode