/**
 * Created by lmx on 2018/7/19.
 */
import React, {Component} from 'react';

class TodoItem extends Component {

	constructor(props){
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}
	//子组件想和父组件通信 要调用父组件传递过来的方法
	handleDelete(index) {
		// const { delete,index } = this.props;
		// delete(index);
		this.props.delete(this.props.index);
	}

	render() {
		const { content } = this.props;
		return (
			//父组件通过属性的形式向子组件传递参数
			//子组件通过props接收父组件传递的参数
			<div onClick={this.handleDelete}>{content}</div>
		)
	}
}

export default TodoItem;