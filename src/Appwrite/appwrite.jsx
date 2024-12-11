import { Client, Databases } from 'appwrite';
const client = new Client();

client
  .setEndpoint('https://centralapps.hivefinty.com/v1') // Use Appwrite Cloud endpoint
  .setProject('67594a9e0005829e0c75'); // Replace with your project ID


const databases = new Databases(client);

export { client, databases };
