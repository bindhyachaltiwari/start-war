import * as stateActions from '../Actions/actions'
import { connect } from 'react-redux'
import Login from '../Components/login/login'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state, props) => {        
         return {
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
const LoginContainer =connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer
