import React from "react";
import {Table} from 'react-bootstrap'
import DogsAvailable from './DogsAvailable'

const DogsTable = (props) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Dog's Name</th>
                    <th>Other Dogs</th>
                    <th>Adult Males</th>
                    <th>Adult Females</th>
                    <th>Children</th>
                    <th>Age 0-5</th>
                    <th>Age 6-12</th>
                    <th>Age 13-18</th>
                    <th>Dog Size</th>
                    <th>Dog Pace</th>
                    <th>Nervous</th>
                    <th>Barking</th>
                    <th>Lead Pulling</th>
                    <th>Reactive</th>
                </tr>
            </thead>
            <tbody>
                {props.dogs.map((item, index) => {
                        return <DogsAvailable
                            dogId={item.dogId}
                            dogName={item.dogName} key={index}
                            otherDogs={item.otherDogs}
                            adultMales={item.adultMales}
                            adultFemales={item.adultFemales}
                            withChildren={item.withChildren}
                            withChildren05={item.withChildren05}
                            withChildren612={item.withChildren612}
                            withChildren1318={item.withChildren1318}
                            dogSize={item.dogSize}
                            dogPace={item.dogPace}
                            behaviourNervous={item.behaviourNervous}
                            behaviourBarking={item.behaviourBarking}
                            behaviourLeadPulling={item.behaviourLeadPulling}
                            behaviourReactive={item.behaviourReactive}
                            // addDog={this.addDog}
                            getDogMatch={props.getDogMatch}
                        />
                    })}
            </tbody>
            </Table>
    )
}

export default DogsTable;