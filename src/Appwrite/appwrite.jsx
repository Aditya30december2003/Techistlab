import { Client, Databases, Storage } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();
client
  .setEndpoint('https://centralapps.hivefinty.com/v1') // Use Appwrite Cloud endpoint
  .setProject('67594a9e0005829e0c75'); // Replace with your project ID

// Initialize the Databases service
const databases = new Databases(client);

// Initialize the Storage service
const storage = new Storage(client);

export { client, databases, storage };