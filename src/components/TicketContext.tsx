import { createContext, useContext } from "react";
import { Ticket } from "../types";

export interface TicketContextProps {
	userTicket: Ticket | null;
	setUserTicket: React.Dispatch<React.SetStateAction<Ticket | null>>;
}

export const TicketContext = createContext<TicketContextProps | null>(null);

export const useTicket = () => {
	const context = useContext(TicketContext);
	if (context === null) {
		throw new Error("useTicket must be used within a TicketContextProvider");
	}
	return context;
};
