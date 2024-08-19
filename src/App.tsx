import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import styles from "./index.module.scss";
import Home from "./pages/Home";
import TicketInfo from "./pages/TicketInfo";
import { useState } from "react";
import { Ticket } from "./types";
import { TicketContext } from "./components/TicketContext";

function App() {
	const [userTicket, setUserTicket] = useState<Ticket | null>(null);

	return (
		<TicketContext.Provider value={{ userTicket, setUserTicket }}>
			<HashRouter>
				<Header />
				<div className={styles["kombo-content"]}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/ticket" element={<TicketInfo />} />
					</Routes>
				</div>
			</HashRouter>
		</TicketContext.Provider>
	);
}

export default App;
