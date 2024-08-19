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
	parseTime: (date: string) => {
		const time = new Date(date).toLocaleTimeString("en-US", {
			hour: "2-digit",
			minute: "2-digit",
		});
		return time;
	},
	getTicketInformation(ticket: Ticket) {
		const firstTrip = ticket.segments[0];
		const lastTrip = ticket.segments[ticket.segments.length - 1];

		return {
			price: Math.round(ticket.price) + " €",
			duration: firstTrip.duration,
			transportType: firstTrip.transportType,
			companySlugs: ticket.segments.map((segment) => segment.companySlug),
			date: new Date(firstTrip.departure.time).toLocaleDateString("en-US", {
				weekday: "short",
				day: "numeric",
				month: "short",
			}),
			departure: {
				city: firstTrip.departure.city,
				station: firstTrip.departure.station,
				time: this.parseTime(firstTrip.departure.time),
			},
			arrival: {
				city: lastTrip.arrival.city,
				station: lastTrip.arrival.station,
				time: this.parseTime(lastTrip.arrival.time),
			},
		};
	},
};
