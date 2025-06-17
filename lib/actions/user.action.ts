"use server";

import { Query } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { appwriteConfig } from "../appwrite/config";

const getUserbyEmail = async (email: string) => {
  const { database } = await createAdminClient();
  const result = await database.listDocuments(
    appwriteConfig.databaseID,
    appwriteConfig.usersCollectionID,
    [Query.equal("email", [email])]
  );
};

const createAccont = async ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
  const existingUser = await getUserbyEmail(email);
};
