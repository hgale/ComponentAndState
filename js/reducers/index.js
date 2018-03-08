// reducers/index.js

import { combineReducers } from 'redux'
import coins from '../screens/coin-screen/reducers'

const rootReducer = combineReducers({
    coins
})

export default rootReducer
