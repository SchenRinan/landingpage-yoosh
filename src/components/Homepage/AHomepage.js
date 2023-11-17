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
import StoreEmail from "./StoreEmail";
import Temporary from "./Temporary";
import Navbase from "../Navbase";
import Footer from "../Footer";
import { useState } from "react";

const AHomepage = () => {
	const [color,setColor] = useState({background:'rgb(6,7,39)', box:'rgb(56,19,137)', tiny:'rgb(104,55,208)',text:'rgb(154,106,255)'});
	const colorChange = item => {
		if(item === 'redbg')setColor({...color, background:'#8B0000'});
		if(item === 'manabg')setColor({...color, background:'rgb(6,7,39)'});
		if(item === 'blackbg')setColor({...color, background:'rgb(33,37,41)'});
		if(item === 'greenbg')setColor({...color, background:'#002700'});
		if(item === 'manabox')setColor({...color, box:'rgb(56,19,137)', tiny:'rgb(104,55,208)'});
		if(item === 'redbox')setColor({...color, box:'#A30000', tiny:'#FF3333'});
		if(item === 'greenbox')setColor({...color, box:'#004d00', tiny:'#007F00'});
		if(item === 'blackbox')setColor({...color, box:'#3a3a3a', tiny:'#555555'});
		if(item === 'greentext')setColor({...color, text:'rgb(196,231,89)'});
		if(item === 'manatext')setColor({...color, text:'rgb(154,106,255)'});
		if(item === 'redtext')setColor({...color, text:'#FF0000'});
		if(item === 'blacktext')setColor({...color, text:'#CCCCCC'});
	}
	return (
		<div style={{backgroundColor:color.background}}>
			<Temporary colorChange={colorChange} />
			<Navbase color={color} />
			<Headerhp color={color}/>
			<LogoCarousel />
			<CardIntro color={color} />
			<CardAd color={color}/>
			<PointBenefits color={color} />
			<RewardIntro color={color} />
			<BankBox color={color} />
			<AppIntro color={color} />
			<PlanIntro color={color} />
			<SidequestBox color={color} />
			<StoreEmail />
			<Footer />
		</div>
	);
}
 
export default AHomepage;