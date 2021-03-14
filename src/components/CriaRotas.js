/*global google*/
import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'reactstrap';
import { withGoogleMap, GoogleMap, DirectionsRenderer, withScriptjs } from "react-google-maps";


class PersonList extends Component {
    state = {
      persons: [],
      directions: [],
      origin: [],
      destination: [] 
    }
    
  
    componentDidMount() {
      axios.get(`http://murmuring-shore-51053.herokuapp.com/contatos/`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
          
        })


        

    
        
    }
  
    renderClientes(){
      return this.state.persons.map((person) => {
        const { nome, entrega, origem, destino } = person
        return (
          <tr key={nome}>
            <td>{nome}</td>
            <td>{entrega}</td>
            <td>{origem}</td>
            <td>{destino}</td>
            <td>
            <Button outline color="danger" onClick={()=> this.criarRota(origem, destino)}>Criar Rota</Button>              </td>
          </tr>
        )
      })
    }
  
    criarRota(origem, destino){
      this.state.origin = origem;
      this.state.destination = destino;   
      console.log(this.state.origin) 
      console.log(this.state.destination)  

      const directionsService = new google.maps.DirectionsService();
        directionsService.route(
            {
                origin: this.state.origin,
                destination: this.state.destination,
                travelMode: google.maps.TravelMode.DRIVING,
                waypoints: []
            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    console.log(result)
                    this.setState({
                        directions: result
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        );


    }
   
  
    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: -30.0377, lng: -51.2058 }}
                defaultZoom={13}
            >
                <DirectionsRenderer
                    directions={this.state.directions}
                />
            </GoogleMap>
        ));
      return (
          <div>
 <Table hover>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Data da Entrega</th>
            <th>Orígem</th>
            <th>Destino</th>
            <th>Rota</th>
          </tr>
        </thead>
        <tbody>
          {this.renderClientes()}
        </tbody>
      </Table>
      
      <GoogleMapExample
                    containerElement={<div style={{ height: `500px`, width: "100%" }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />

      


          </div>
       
      

      )
    }
  }






export { PersonList };