import { Client, Account, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") 
    .setProject("649ed116c0a6a8598ddd");     
    
export const account = new Account(client);

// Database
export const database = new Databases(client, "64a53ec48e4180d1974f")

// console.log(process.env.REACT_PROJECT_DATABASE)
// console.log(account)

//Unique ID
