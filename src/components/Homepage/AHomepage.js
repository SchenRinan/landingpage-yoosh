import Headerhp from "./Headerhp";
import CardAd from "./CardAd";
import PointBenefits from "./PointBenefits";
import RewardIntro from "./RewardIntro";
import BankBox from "./BankBox";
import AppIntro from "./AppIntro";
import PlanIntro from "./PlanIntro";
import SidequestBox from "./SidequestBox";
import CardIntro from "./CardIntro";
import LogoCarousel from "./LogoCarousel";

const AHomepage = () => {
	return (
		<div style={{backgroundColor:'rgb(6,7,39)'}}>
			<Headerhp/>
			<LogoCarousel />
			<CardIntro />
			<CardAd />
			<PointBenefits />
			<RewardIntro />
			<BankBox />
			<AppIntro />
			<PlanIntro />
			<SidequestBox />
		</div>
	);
}
 
export default AHomepage;