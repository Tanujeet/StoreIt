export const appwriteConfig = {
  endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
  projectID: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
  databaseID: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
  usersCollectionID: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION!,
  filesCollectionID: process.env.NEXT_PUBLIC_APPWRITE_FILES_COLLECTION!,
  bucketID: process.env.NEXT_PUBLIC_APPWRITE_BUCKET!,
  secretKey: process.env.APPWRITE_SECRET_KEY!,
};