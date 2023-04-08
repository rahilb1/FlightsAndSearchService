# Welcome to Flights Service

## Project Setup
- Clone the project to your local system
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT = 3000`
- Inside the `src/config` folder, create a `config.json` file and add the following code

```
{
  "development": {
    "username": <YOUR_DB_USERNAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- Once you have added your db config as listed above, from the src folder, execute `npx sequelize db:create`
and then execute `npx sequelize db:migrate`
```
