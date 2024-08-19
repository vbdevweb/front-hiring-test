import styles from "./TicketInfo.module.scss";
import { useTicket } from "../components/TicketContext";
import { Api } from "../service/api";
import { CompanyLogo } from "../components/CompanyLogo";
import { TransportIcon } from "../components/TransportIcon";

export default function TicketInfo() {
	const { userTicket } = useTicket();
	if (!userTicket) return;

	const ticketInfo = Api.getTicketInformation(userTicket!);

	return (
		<div className={styles["ticket-info"]}>
			<div className={styles["ticket"]}>
				<div className={styles["ticket--date"]}>{ticketInfo.date}</div>
				{/* keep in mind, trip should be repeated for the number of trips on the ticket */}
				<div className={styles["ticket--trip"]}>
					<div className={styles["trip--departure"]}>
						<p className={styles["departure--time"]}>{ticketInfo.departure.time}</p>
						<div className={styles["departure--location"]}>
							<p className={styles["location--city"]}>
								{ticketInfo.departure.city}
							</p>
							<p className={styles["location--station"]}>
								{ticketInfo.departure.station}
							</p>
						</div>
					</div>
					<div className={styles["trip--transport-type"]}>
						<div className={styles["transport-type--icon"]}>
							<TransportIcon
								transportType={ticketInfo.transportType}
							/>
						</div>
						<div className={styles["transport-type--companies"]}>
							{ticketInfo.companySlugs.map((slug, i) => (
								<div key={i} className={styles["company-logo"]}>
									<CompanyLogo companySlug={slug} />
								</div>
							))}
						</div>
					</div>
					<div className={styles["trip--arrival"]}>
						<p className={styles["arrival--time"]}>{ticketInfo.arrival.time}</p>
						<div className={styles["arrival--location"]}>
							<p className={styles["location--city"]}>{ticketInfo.arrival.city}</p>
							<p className={styles["location--station"]}>
								{ticketInfo.arrival.station}
							</p>
						</div>
					</div>
				</div>
				<div className={styles["ticket--price"]}>
					Total Price: {ticketInfo.price}
				</div>
			</div>
		</div>
	);
}
