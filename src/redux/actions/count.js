// 引入 常量
import { INCREMENT, DECREMENT } from '../constant'

// 加法
export const increment = data => ({type: INCREMENT, data})

// 减法
export const decrement = data => ({type: DECREMENT, data})

// 异步加法
export const incrementAsync = data => {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment(data))
        }, 500)
    }
}