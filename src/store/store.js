import {createStore} from 'redux'


const defaultState = {
    rates : [],
}
const reducer = (state = defaultState, action) => {
    switch (action.type){
            case "ADD_RATE":
                return{...state, rates: action.payload }
            case "GET_RATE":
                return state

        default: return state
    }
}

export const store = createStore(reducer)