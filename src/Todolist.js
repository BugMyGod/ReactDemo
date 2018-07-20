import React, { Component,Fragment } from 'react';
import './Todolist.css';
import TodoItem from './TodoItem';

//定义一个组件
class Todolist extends Component {

	constructor(props) {
		super(props)
		this.state = {//数据项
			list: [],
			inputValue: ''
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleBtnClick() {
		// alert("click");
		this.setState({
			// list:[...this.state.list,'hello world']
			list: [...this.state.list, this.state.inputValue],
			//... 展开运算符
			inputValue: ""
		})
	}

	handleInputChange(e) {
		// console.log(e.target.value)
		this.setState({
			inputValue: e.target.value
		})
	}

	// handleItemClick(index) {
	// 	// console.log(index);
	// 	const list = [...this.state.list];
	// 	list.splice(index, 1);
	// 	this.setState({
	// 		list: list
	// 	})
	// }

	handleDelete(index) {
		// console.log(index);
		const list = [...this.state.list];
		list.splice(index, 1);
		this.setState({
			list: list
		})
	}

	getTodoItems() {
		return (
			this.state.list.map((item, index) => {
				// return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
				return (
					<TodoItem
						delete={this.handleDelete}
						key={index}
						content={item}
						index={index}
					/>
				)
			})
		)
	}

	//必须有这个函数
	render() {
		//JSX语法
		return (
			<Fragment>
				<div>
					<input value={this.state.inputValue} onChange={this.handleInputChange}/>
					{/*<button style={{backgroundColor:'red',color:'white'}} onClick={this.handleBtnClick}>add</button>*/}
					<button className="red-btn" onClick={this.handleBtnClick}>add</button>
				</div>
				<div>
					<ul>
						{this.getTodoItems()}
					</ul>
				</div>
			</Fragment>
		);
	}

}

export default Todolist;
