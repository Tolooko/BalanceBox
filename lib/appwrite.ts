import { Account, Client, Databases, ID } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67332bf6000bcf3a8ba1');

export const account = new Account(client);
export const databases = new Databases(client);

export const CONSTANTS = {
    databaseId: '67332c8b0029a1c646a3',
    userDataCollectionId: '67332ca900207a92adb3'
} as const;