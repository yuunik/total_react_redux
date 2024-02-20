// 引入 nanoid
import { nanoid } from 'nanoid'
// 引入常量
import { ADD_PERSON } from '../constant'

// 状态初始化
const initState = [{
    id: nanoid(),
    username: '张三',
    age: 29
}]

export default function personReducer (preState = initState, action) {
    // 解构 action， 获取 type 、 data
    const { type, data } = action

    // 处理数据
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState    
    }
}