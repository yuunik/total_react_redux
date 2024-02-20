// 引入常量
import { INCREMENT, DECREMENT } from '../constant'

// 初始化状态
const initState = 0

export default function countReducer (preState = initState, action) {
    // 解构 action, 获取 type 、 data
    const { type, data } = action

    // 处理数据
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState        
    }
}