import { Client, Databases, Storage } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();
client
  .setEndpoint('https://appwrite.hivefinty.com/v1') // Use Appwrite Cloud endpoint
  .setProject('684728be0036f14c6839'); // Replace with your project ID

// Initialize the Databases service
const databases = new Databases(client);

// Initialize the Storage service
const storage = new Storage(client);

export { client, databases, storage };