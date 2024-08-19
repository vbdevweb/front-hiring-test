import { CompanySlug } from "../types";
import AirfranceLogo from "../assets/svg/companies/airfrance.svg";
import FlixbusLogo from "../assets/svg/companies/flixbus.svg";
import InouiLogo from "../assets/svg/companies/inoui.svg";
import SncfLogo from "../assets/svg/companies/sncf.svg";

type Props = {
	companySlug: CompanySlug;
};
export function CompanyLogo({ companySlug }: Props) {
	switch (companySlug) {
		case "sncf":
			return <SncfLogo />;
		case "inoui":
			return <InouiLogo />;
		case "flixbus":
			return <FlixbusLogo />;
		case "airfrance":
			return <AirfranceLogo />;
		default:
			return null;
	}
}
