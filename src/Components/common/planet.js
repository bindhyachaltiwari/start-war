import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import PlanetDetail from './planetDetail';

class Planet extends Component {
    constructor(props) {
        super(props);
        this.state = { showDetail: false };
        this.showDetail = this.showDetail.bind(this);
        this.hideDetail = this.hideDetail.bind(this);
    }
    showDetail() {
        this.setState({ showDetail: true });
    }
    hideDetail() {
        this.setState({ showDetail: false });
    }
    render() {
        const {
            rotation_period,
            name,
            population,
            orbital_period,
            diameter
            } = this.props.planet
        let planetPopulationClass = population ? population > "50000" ? "large" : "small" : "normal";
        planetPopulationClass = "col-md-10 planet " + planetPopulationClass;
        return (
            <div>
                <div className={planetPopulationClass} onClick={this.showDetail}>
                    <div className="planetName">
                        <span><strong>{name}</strong></span>
                    </div>
                    <span className="shadow"></span>                    
                </div>
                {this.state.showDetail && <PlanetDetail hideDetail={this.hideDetail} data={this.props.planet} />}
            </div>
        );
    }
}

Planet.propTypes = {
    planet: PropTypes.object.isRequired
};

export default Planet;
