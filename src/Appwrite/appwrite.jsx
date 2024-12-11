import { Client, Databases } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();
client
  .setEndpoint('https://centralapps.hivefinty.com/v1') // Use Appwrite Cloud endpoint
  .setProject('67594a9e0005829e0c75'); // Replace with your project ID

// Initialize the Databases instance
const databases = new Databases(client);

// Example: fetching documents from a collection

export { client, databases };

