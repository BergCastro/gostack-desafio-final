<p align="center">
<a href="https://rocketseat.com.br/bootcamp" alt="Bootcamp Rocketseat">
  <img src="https://skylab.rocketseat.com.br/api/files/1560759053914.svg" height="120px"></a></p>

# Rocketseat GoStack - Backend MeetApp

https://rocketseat.com.br/bootcamp

## Description

Adonis API aplication for the Rocketseat Bootcamp GoStack MeetApp application.

## Features

- JWT Authentication
- Pagination
- Database Postgres
- Queue with Redis for sendind emails.

## Installing

### Create docker container Postgres

`docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`

### Create docker container Redis

`docker run --name redis -p 6379:6379 -d -t redis:alpine`

### Installing dependencies

```
cd backend
npm i
```

### Running migrations Database

`adonis migration:run`

### Running Seed

`adonis seed`

### Setup .env file

Rename the file `.env.example` to `.env` !
Edit the file with your informations!

## Running

`adonis serve --dev`

## Author

- Lindemberg Nunes de Castro

## License

MIT
