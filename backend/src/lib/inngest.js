import {Inngest} from 'inngest';
import { connectDB } from './db.js';
import User from '../models/User.js';

export const inngest = new Inngest({id: "talent-iq"});

const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    try {
      await connectDB();
      console.log("Incoming event:", JSON.stringify(event.data, null, 2));
      const { id, email_address, first_name, last_name, image_url } = event.data;
      const newUser = {
        clerkId: id,
        email: Array.isArray(email_address)
          ? email_address?.[0]?.email_address
          : email_address,
        name: `${first_name || ""} ${last_name || ""}`.trim(),
        profileImage: image_url
      };
      console.log("User to create:", newUser);
      const createdUser = await User.create(newUser);
      console.log("Created user:", createdUser);
    } catch (error) {
      console.error("syncUser error:", error);
      throw error;
    }
  }
);


const deleteUserFromDB = inngest.createFunction(
  { id: "delete-user" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    try {
      await connectDB();
      console.log("Delete event:", JSON.stringify(event.data, null, 2));
      const { id } = event.data;
      const result = await User.deleteOne({ clerkId: id });
      console.log("Delete result:", result);
    } catch (error) {
      console.error("deleteUserFromDB error:", error);
      throw error;
    }
  }
);

export const functions = [syncUser, deleteUserFromDB];