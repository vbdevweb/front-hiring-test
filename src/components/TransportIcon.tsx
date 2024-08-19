import { TransportType } from "../types";
import BusIcon from "../assets/svg/transportTypes/bus.svg";
import FlightIcon from "../assets/svg/transportTypes/flight.svg";
import TrainIcon from "../assets/svg/transportTypes/train.svg";

type Props = {
	transportType: TransportType;
};
export function TransportIcon({ transportType }: Props) {
	switch (transportType) {
		case "bus":
			return <BusIcon />;
		case "train":
			return <TrainIcon />;
		case "flight":
			return <FlightIcon />;
		default:
			return null;
	}
}
