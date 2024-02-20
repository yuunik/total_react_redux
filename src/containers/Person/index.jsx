// 引入 React 核心库
import React, { Component } from 'react'
// 引入 connect
import { connect } from 'react-redux'
// 引入 nanoid
import { nanoid } from 'nanoid'

// 引入 action
import { addPerson } from '../../redux/actions/person'

// 引入 样式
import './index.css'

// Person UI 组件
class Person extends Component {
    // 组件更新或渲染时调用
    render() {
        return (
            <div className="person">
                <h3>The Person</h3>
                <h4> 总人数为: { this.props.personList.length } </h4>
                <input type="text" placeholder='请输入姓名' ref={ element => this.username = element }/>
                <input type="text" placeholder='请输入年龄' ref={ element => this.age = element }/>
                <button onClick={ this.addPerson }>添加</button>
                <ul>
                    { 
                        this.props.personList.map(person => {
                            return (
                                <li key={ person.id }> { person.username } --- { person.age }</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    // 添加用户
    addPerson = () => {
        const { value: username } = this.username
        const { value: age } = this.age
        // 非空判断
        if ( username.trim() !== '' && age.trim() !== '' ) {
            // 添加
            this.props.addPerson({
                id: nanoid(),
                username,
                age
            })
        } else {
            // 警告
            return alert('不能为空, 请重新输入')
        }
        // 表单清空
        this.username.value = ''
        this.age.value = ''
    }
}

// 创建 Person 容器组件
export default connect(
    state => ({personList: state.person}),
    {
        addPerson
    }
)(Person)

