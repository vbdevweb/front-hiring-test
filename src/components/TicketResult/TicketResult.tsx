import { Link } from "react-router-dom";
import { Ticket } from "../../types";
import { CompanyLogo } from "../CompanyLogo";
import { TransportIcon } from "../TransportIcon";
import styles from "./TicketResult.module.scss";
import Time from "../../assets/svg/time.svg";
import LineTrip from "../../assets/svg/Linetrip.svg";
import { useTicket } from "../../components/TicketContext";
import { Api } from "../../service/api";

export default function TicketResult({ ticket }: { ticket: Ticket }) {
	if (!ticket) return null;

	const { setUserTicket } = useTicket();

	const handleClick = () => {
		setUserTicket(ticket);
	};

	const ticketInfo = Api.getTicketInformation(ticket);

	return (
		<Link to="/ticket" className={styles["ticket"]} onClick={handleClick}>
			<div className={styles["ticket--header"]}>
				<div className={styles["header--transport"]}>
					{/* we will always only display the first transport type */}
					<div className={styles["transport--icon"]}>
						<TransportIcon transportType={ticketInfo.transportType} />
					</div>

					{/* we will always display all the companies */}
					<div className={styles["transport--companies"]}>
						{ticketInfo.companySlugs.map((slug, i) => (
							<div key={i} className={styles["company-logo"]}>
								<CompanyLogo companySlug={slug} />
							</div>
						))}
					</div>
				</div>
				<div className={styles["header--duration"]}>
					<Time />
					{ticketInfo.duration}
				</div>
			</div>

			<div className={styles["ticket--info"]}>
				<div className={styles["info--trip"]}>
					<div className={styles["trip--departure-arrival-time"]}>
						<div className={styles["departure-time"]}>
							{ticketInfo.departure.time}
						</div>
						<div className={styles["arrival-time"]}>
							{ticketInfo.arrival.time}
						</div>
					</div>
					<div className={styles["trip--departure-arrival"]}>
						<div className={styles["departure-arrival--line-trip"]}>
							<LineTrip />
						</div>
						<div className={styles["departure-arrival--stations"]}>
							<p className={styles["stations--departure"]}>
								<span className={styles["departure--city"]}>
									{ticketInfo.departure.city}
								</span>{" "}
								{ticketInfo.departure.station}
							</p>
							<p className={styles["stations--arrival"]}>
								<span className={styles["arrival--city"]}>
									{ticketInfo.arrival.city}
								</span>{" "}
								{ticketInfo.arrival.station}
							</p>
						</div>
					</div>
				</div>
				<div className={styles["info--price"]}>{ticketInfo.price}</div>
			</div>
		</Link>
	);
}
