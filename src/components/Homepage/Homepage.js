import Headerhp from "./Headerhp";
import Main2hp from "./Main2hp";
import Main3hp from "./Main3hp";
import Main7hp from "./Main7hp";
import Mainhp from "./Mainhp";


const Homepage = () => {
	return (
		<div style={{backgroundColor:'rgb(6,7,39)'}}>
			<Headerhp/>
			<Mainhp />
			<Main2hp />
			<Main3hp />
			<Main7hp />
		</div>
	);
}
 
export default Homepage;