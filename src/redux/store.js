// 引入 createStore
import { createStore, applyMiddleware } from 'redux'
// 引入 中间件 thunk
import { thunk } from 'redux-thunk'
// 引入 redux 开发插件
import { composeWithDevTools } from 'redux-devtools-extension'

// 引入 reducers
import reducers from './reducers'


export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))