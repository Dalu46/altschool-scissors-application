import { Client, Account, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint(process.env.REACT_APP_ENDPOINT) 
    .setProject(process.env.REACT_APP_PROJECT);     
    
export const account = new Account(client);

// Database
export const database = new Databases(client, process.env.REACT_APP_DATABASE_ID)

// console.log(process.env.REACT_PROJECT_DATABASE)
// console.log(account)

//Unique ID
