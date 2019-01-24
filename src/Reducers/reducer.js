export const planets = (state = { planets: [],filteredPlanets:[],people:null, isFetching: false, errorMessage: '' }, action) => {
    switch (action.type) {

        case 'GET_DATA_REQUEST':
            return Object.assign({}, state, {
                isFetching: true,
            }
            );

        case 'GET_DATA_SUCCESS':
            
            return Object.assign({}, state, {
                isFetching: false,
                planets: action.data,
            }
            );

        case 'GET_DATA_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message,
            })

        case 'FILTER_PLANET_SEARCH':            
            return Object.assign({},state,{
                filteredPlanets : state.planets.filter((planet) => {                    
                    return planet.name.toLowerCase().indexOf(action.filterText.toLowerCase()) != -1 ? planet : null;
                })
            })
            
        case 'GET_FILTERDDATA_REQUEST':
            return Object.assign({}, state, {
                isFetching: true,
            }
            )

        case 'GET_FILTERDDATA_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                planets: action.data,
            }
            )

        case 'GET_FILTERDDATA_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message,
            })

        case 'LOGIN_DATA_REQUEST':
            return Object.assign({}, state, {
                isFetching: true,
            }
            );
        case 'LOGIN_DATA_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                people: action.data,
            }
            );

        case 'LOGIN_DATA_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message,
            })


        default:
            return state;
    }
}

export const search = (state = { filterKey: '', searchKey: '', totalHits:0 }, action) => {
    switch (action.type) {

        case 'SET_SEARCH_KEY':
            return Object.assign({}, state, {
                searchKey: action.searchKey,
            }
            )

        case 'SET_FILTER_KEY':
            return Object.assign({}, state, {
                filterKey: action.filterKey,
            }
            )

        case 'CLEAR_SEARCH_KEY':
            return Object.assign({}, state, {
                searchKey: '',
            }
            )
        case 'CLEAR_SEARCH_HITS':
            return Object.assign({}, state, {
                totalHits: 0,
            }
            )
        case 'SET_SEARCH_HITS':
            return Object.assign({}, state, {
                totalHits: action.hits,
            }
            )
        default:
            return state;
    }
}
