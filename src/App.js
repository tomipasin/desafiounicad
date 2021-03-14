import Nav from './components/Nav'
import { PersonList } from './components/CriaRotas';
import { withScriptjs } from "react-google-maps";
import CriaEntrega from './components/CriaEntrega'

function App() {
  const MapLoader = withScriptjs(PersonList);
  return (
    <div className='container'>
      <Nav/>
      <MapLoader
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBX7wkYYHvJBcAVdA5CkgYu8iGMJvv20V0"
      loadingElement={<div style={{ height: `100%` }} />}
  />
  <div className='container'>
   <CriaEntrega /> 
  </div>
  
    </div>
  );
}

export default App;
