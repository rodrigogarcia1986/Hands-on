<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="70" alt="Nest Logo" /></a>
</p>


## Description

Collaborative backend project for developing modules to implement online, in-person, or hybrid meeting creation.

### Modules:

- _api-admin_: for organizer registration and event creation
- _api-manager_: for event management and confirmation or cancellation of talks at events
- _api-lecture_: for lecture management
- _github-bot_: service to scan GitHub for tags with event ReadMes for automatic registration

### Authentication
Two possibilities: via credentials and tokens or via GitHub.

### Database
Postgres and Prisma

### Email sending and image archiving
Using the external and free tools SendGrid and BackBlaze.

### Customization
Separate modules allow complete customization with few adjustments.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Seed

```bash
# create admin
$ npm run admin

# populate database with manager, meets and lectures
$ npm run seede


```

## Authors

- [Alan Gabriel](https://github.com/Alanado)
- [Tone Lopes](https://github.com/tonelopes-dev)
- [Rodrigo Manoel](https://github.com/rodrigogarcia1986) 



## License

[MIT licensed](LICENSE).
