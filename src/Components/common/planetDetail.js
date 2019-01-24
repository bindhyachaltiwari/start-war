import React,{Component} from 'react';

class PlanetDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            climate,
            created,
            diameter,
            edited,
            gravity,
            name,
            population,
            rotation_period,
            surface_water,
            terrain
        } = this.props.data;
        return (
            <div id="myNav" className="overlay planetDetail" onClick={this.props.hideDetail}>
                <div className="overlay-content centerScreen container">     
                    <h3>{name}</h3>               
                    <ul className="list-group">
                        <li className="list-group-item">CLIMATE : {climate}</li>
                        <li className="list-group-item">POPULATION : {population}</li>
                        <li className="list-group-item">DIAMETER : {diameter}</li>
                        <li className="list-group-item">GRAVITY : {gravity}</li>
                        <li className="list-group-item">CREATE : {created}</li>
                        <li className="list-group-item">ROTATION PERIOD : {rotation_period}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PlanetDetail;
