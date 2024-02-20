// 引入 React 核心库
import React, { Component } from 'react'

// 引入 容器组件
import Count from './containers/Count'
import Person from './containers/Person'

// 引入 样式
import './App.css'

export default class App extends Component {
    // 组件渲染 或 更新 时调用
    render() {
        return (
            <div className="app">
                <header>
                    <h1>The Application</h1>
                </header>
                <main>
                    <h2>The Content</h2>
                    <Count />
                    <Person />
                </main>
            </div>
        )
    }
}