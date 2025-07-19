import { Client, Databases, Storage } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();
client
  .setEndpoint('https://appwrite.hivefinty.com/v1') // Use Appwrite Cloud endpoint
  .setProject('687a02850018b2c4ac7f'); // Replace with your project ID

// Initialize the Databases service
const databases = new Databases(client);

// Initialize the Storage service
const storage = new Storage(client);

export { client, databases, storage };