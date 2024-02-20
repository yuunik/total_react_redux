// reducers
// 引入 combineReducers, 用于合并 reducer
import { combineReducers } from 'redux'

// 引入 countReducer
import count from './count'
// 引入 personReducer
import person from './person'

export default combineReducers({
    count,
    person
})