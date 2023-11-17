import { Button } from "react-bootstrap";

const Temporary = (props) => {
  return (
    <div>
      <Button onClick={()=>props.colorChange('manabg')}>ManaBG</Button>
      <Button onClick={()=>props.colorChange('redbg')}>RedBG</Button>
      <Button onClick={()=>props.colorChange('greenbg')}>GreenBG</Button>
      <Button onClick={()=>props.colorChange('blackbg')}>BlackBG</Button>
      <Button onClick={()=>props.colorChange('manabox')}>ManaBox</Button>
      <Button onClick={()=>props.colorChange('redbox')}>RedBox</Button>
      <Button onClick={()=>props.colorChange('greenbox')}>GreenBox</Button>
      <Button onClick={()=>props.colorChange('blackbox')}>BlackBox</Button>
      <Button onClick={()=>props.colorChange('manatext')}>Manatext</Button>
      <Button onClick={()=>props.colorChange('redtext')}>Redtext</Button>
      <Button onClick={()=>props.colorChange('greentext')}>Greentext</Button>
      <Button onClick={()=>props.colorChange('blacktext')}>Blacktext</Button>
    </div>
  );
}
 
export default Temporary;