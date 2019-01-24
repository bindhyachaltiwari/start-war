import React, { Component } from 'react';
import Planet from '../common/planet'
import InputSearch from '../common/inputsearch'
import ErrorComponent from '../common/showerror'
import { LOADER_OPTIONS } from '../../constants/constants'
import Loader from '../common/loader';
import PropTypes from 'prop-types'
import _ from 'lodash'
import {throttle,debounce} from 'throttle-debounce';
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isGuestUser: true
        }        
        this.setSearchKey = this.setSearchKey.bind(this);
        this.searchPlanet = debounce(500,this.searchPlanet);
        this.filterPlanetSearch = this.filterPlanetSearch.bind(this);        
    }
    componentDidMount() {
        const status = JSON.parse(window.localStorage.getItem('status'))        
        if (status == "login successfully") {
            const user = JSON.parse(window.localStorage.getItem('username'))
            const isGuestUser = user.toLowerCase() !== "luke skywalker" ? true : false
            this.setState({ isGuestUser: isGuestUser });
        }
        this.props.actions.getDataRequest();
        this.props.actions.clearSearchKey();
    }    

    setSearchKey(key) {        
        this.props.actions.setSearchKey(key);
        this.searchPlanet(key);
    }

    searchPlanet(key){
        let totalHits = this.props.totalHits;
        this.props.actions.getFilteredDataRequest({key,totalHits});
    }

    filterPlanetSearch(filterText) {
        this.props.actions.setFilterKey(filterText);
        this.props.actions.filterPlanetSearch(filterText);
    }
    render() {

        return (
            <div>                
                <PlanetList data={this.props} filterPlanetSearch={this.filterPlanetSearch} setSearchKey={this.setSearchKey} isGuestUser={this.state.isGuestUser} />
            </div>
        )

    }
}
const PlanetList = (props) => {
    const {
            actions,
        match,
        errorMessage,
        isFetching,
        planets,
        filteredPlanets,
        searchKey,
        filterKey,
        totalHits
        } = props.data
    const { setSearchKey, isGuestUser, filterPlanetSearch } = props
    const searchedPlanets = filterKey.length > 0 ? filteredPlanets : planets
    return (
        <div className='component-block'>
            {isFetching && <Loader />}

            <InputSearch setSearchKey={setSearchKey} filterPlanetSearch={filterPlanetSearch} searchKey={searchKey} filterKey={filterKey} clearSearchKey={actions.clearSearchKey} clearSearchHits={actions.clearSearchHits} totalHits={totalHits} isGuestUser={isGuestUser} />

            {searchedPlanets && searchedPlanets.length > 0 && (
                <div className='col-md-12 alignGrid'>

                    {
                        _.map(searchedPlanets, (planet) => (
                            <Planet key={planet.name} planet={planet}/>
                        ))
                    }
                </div>
            )
            }
            {!isFetching && searchedPlanets && !searchedPlanets.length > 0 && <ErrorComponent className='error' searchLimitExcedded={totalHits > 14 && isGuestUser} noDataFound={!searchedPlanets.length > 0} />}
        </div>
    )

}

Home.propTypes = {
    actions: PropTypes.object.isRequired,
    errorMessage: PropTypes.string,
    planets: PropTypes.array.isRequired,
    searchKey: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
};