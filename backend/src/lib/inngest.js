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
      const { id, email_addresses, email_address, primary_email_address_id, first_name, last_name, image_url, username } = event.data;
      const addresses = email_addresses ?? email_address;
      const primaryAddress = Array.isArray(addresses)
        ? (primary_email_address_id
            ? addresses.find((addr) => addr.id === primary_email_address_id)
            : addresses[0])
        : null;
      const email = Array.isArray(addresses) ? primaryAddress?.email_address : addresses;
      const name = `${first_name || ""} ${last_name || ""}`.trim() || username || "Unknown";

      if (!email) {
        console.warn("Skipping user create: missing email in event data.");
        return;
      }

      const newUser = {
        clerkId: id,
        email,
        name,
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