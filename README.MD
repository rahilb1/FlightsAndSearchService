# Welcome to Flights Service

## [Design Doc](https://docs.google.com/document/d/1kM0kAMGGTRFmOLu3VKSPxeqk23e99Vs0/edit?usp=share_link&ouid=106067612533972187789&rtpof=true&sd=true)

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
## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City

## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many airports (one to many)
```
- To add a new model using sequelize, we can use
```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
```

