import * as stateActions from '../Actions/actions'
import { connect } from 'react-redux'
import Home from '../Components/home/home'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state, props) => {              
         return {
            planets:state.planets.planets,
            filteredPlanets:state.planets.filteredPlanets,
            searchKey:state.search.searchKey,
            filterKey:state.search.filterKey,
            isFetching:state.planets.isFetching,
            errorMessage:state.planets.errorMessage,
            people:state.planets.people,
            totalHits:state.search.totalHits
        }
}
const mapDispatchToProps = (dispatch) => {
      return {
       actions:bindActionCreators(stateActions, dispatch),
    }
}
const HomeContainer =connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer
