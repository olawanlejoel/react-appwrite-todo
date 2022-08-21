import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
	.setEndpoint('http://localhost/v1')
	.setProject(process.env.REACT_APP_PROJECT_ID);

export const account = new Account(client);

//Database

export const databases = new Databases(
	client,
	process.env.REACT_APP_DATABASE_ID
);
