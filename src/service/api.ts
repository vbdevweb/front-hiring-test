import axiosLib from "axios";
import { Ticket } from "../types";

const axios = axiosLib.create({
  baseURL: "https://kombo-nextjs-api.vercel.app/api",
  timeout: 60000,
});

export const Api = {
  async getTickets() {
    try {
      const response = await axios.get<Ticket[]>("/tickets");
      return response.data;
    } catch (error) {
      console.error("Error fetching tickets:", error);
      throw error;
    }
  },
};
