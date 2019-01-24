import React ,{Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Throttle } from 'react-throttle';
import {SEARCH_LIMIT_EXCEEDED,SEARCH_LIMIT_FOR_GUEST,MILISECONDS_TO_REFRESH_SEARCH} from '../../constants/constants';

class InputSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        if(this.clearSearchHitsTimer)
            clearInterval(this.clearSearchHitsTimer);
    }

    render() {
        return (
            <div className='form-inline'>
            <div className='form-group'>
                <input type='text' placeholder="Search" className='form-control margin-left' value={ this.props.searchKey } disabled = { this.props.totalHits > SEARCH_LIMIT_FOR_GUEST  && this.props.isGuestUser } onChange={ (e) => this.props.setSearchKey(e.target.value) }/> 
                <input type='text' placeholder="Filter By Name" className='form-control margin-left' value={ this.props.filterKey } disabled = { this.props.totalHits > SEARCH_LIMIT_FOR_GUEST && this.props.isGuestUser } onChange={ (e) => { this.props.filterPlanetSearch(e.target.value); }}/>
                {this.props.totalHits > 14  && this.props.isGuestUser && <label className="error">{SEARCH_LIMIT_EXCEEDED}</label>}
            </div>
            </div>
        );
    }
    componentDidMount(){   
             
        if(this.props.isGuestUser){            
            this.clearSearchHitsTimer = setInterval(()=>{                
                this.props.clearSearchHits();
            },MILISECONDS_TO_REFRESH_SEARCH);
        }
    }
}

InputSearch.propTypes = {
    setSearchKey: PropTypes.func.isRequired,
    clearSearchKey: PropTypes.func.isRequired,
    searchKey: PropTypes.string,
   };

export default InputSearch;
