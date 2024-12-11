import { Client, Databases } from 'appwrite';

const client = new Client();
const databases = new Databases(client);

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Use Appwrite Cloud endpoint
  .setProject('67590b38003d7548d47d'); // Replace with your project ID

export { client, databases };
