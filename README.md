# Vinyl

A community for record enthusiasts to review their favorite albums.

Part of the application has already been built for you. Your job is to take it to completion.

## Getting Started

- Clone the project to your local machine. 
- Navigate to the project folder.
- Run `npm install`
- In the root of the project create a new file called `config.js`  
- Add the following to that file:
```
module.exports = {
  SECRET: 'helloworld'
}
```

### Setting Up Your Database

- Run the following commands:
```
npm run db:drop     : Drop database if one already exists
npm run db:create   : Create new database
npm run db:schema   : Set up tables in the database
npm run db:albums   : Seed your database with album data
npm start           : And you're off...
```
- Navigate to `http://localhost:3000/` 
- Once you sign up a user, you can run `npm run db:reviews` to populate some dummy reviews. 




