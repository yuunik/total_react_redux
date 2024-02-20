// 引入 React 核心库
import React, { Component } from 'react'
// 引入 connect, 创建 Count 容器组件
import { connect } from 'react-redux'

// 引入 action
import {
    increment,
    decrement,
    incrementAsync
} from '../../redux/actions/count'

// 引入 样式
import './index.css'

// Count UI 组件
class Count extends Component {
    // 组件更新 或 渲染 时调用
    render() {
        return (
            <div className="count">
                <h3>The Count</h3>
                <h4> 当前求和为: { this.props.count } </h4>
                <select ref={ element => this.selectedNumber = element }>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={ this.increment }> + </button>
                <button onClick={ this.decrement }> - </button>
                <button onClick={ this.incrementIfOdd }> 当为奇数时, 再加 </button>
                <button onClick={ this.incrementAsync }> 异步加 </button>
            </div>
        )
    }

    // 加法
    increment = () => {
        // 获取选中的值
        const { value } = this.selectedNumber
        // 加
        this.props.increment(+value)
    }

    // 减法
    decrement = () => {
        const { value } = this.selectedNumber
        // 减
        this.props.decrement(+value)
    }

    // 奇数加
    incrementIfOdd = () => {
        const { value } = this.selectedNumber
        const { count, increment } = this.props
        // 判断是否为奇数
        if (count % 2 !== 0) {
            increment(+value)
        } 
    }

    // 异步加
    incrementAsync = () => {
        const { value } = this.selectedNumber
        this.props.incrementAsync(+value)
    }

}

// 创建 Count 容器组件
export default connect(
    state => ({
        count: state.count
    }),
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count)

