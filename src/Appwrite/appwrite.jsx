import { Client, Databases } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();
client
  .setEndpoint('https://centralapps.hivefinty.com/v1') // Use Appwrite Cloud endpoint
  .setProject('67594a9e0005829e0c75'); // Replace with your project ID

// Initialize the Databases instance
const databases = new Databases(client);

// Example: fetching documents from a collection
databases.listDocuments('67594b2b0006d71a548d')
  .then(response => {
    console.log('Documents:', response);
  })
  .catch(error => {
    console.error('Error fetching documents:', error);
  });

export { client, databases };

