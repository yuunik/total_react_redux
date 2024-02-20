// 引入 React 扩展库
import ReactDOM from 'react-dom'
// 引入 Provider 组件, 用于为 容器组件 提供状态
import { Provider } from 'react-redux'

// 引入 App 组件
import App from './App'
// 引入 store
import store from './redux/store'


// 渲染组件到页面
ReactDOM.render(
    <Provider store={store}>  
        <App />
    </Provider>, 
document.querySelector('.root'))