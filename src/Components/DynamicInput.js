import React, { Component } from 'react';

class UserPills extends Component {
	constructor() {
		super();
		this.helperspan = null;
		this.state = {
			content_add: "Add a Task",
			width: 100,
			myItems: [],
		};
		this.lastId = -1;
	}


	handleFocus= (event) => {
		this.setState({ content_add: " " });
	}
	
	handleChange= (event) => {
		const user_input = event.target.value;
		this.setState({ content_add: user_input });
	}

	handleKeypress= (event) => {
		if (event.key === "Enter") {
			var newArray = this.state.myItems;
			var currentcontent = this.state.content_add.trim();
			if (!currentcontent) {
				return; 
			}
			
			var currentWidth = this.helperspan.offsetWidth;
			newArray.push({
				content: currentcontent, 
				id: ++this.lastId, 
				itemWidth: currentWidth + 2
			});
			this.setState({
				myItems: newArray,
				content_add: "",
			});
		}
	}

	handleBlur = (event) => {
		this.setState({ content_add: "Add a Task" });
	}

	handleClick= (event) => {
		const idToRemove = Number(event.target.dataset["item"]);
		const newArray = this.state.myItems.filter((listitem) => {return listitem.id !== idToRemove});
		this.setState({ myItems: newArray });
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.content_add !== this.state.content_add) {
			const helperWidth = this.helperspan.offsetWidth;
			this.setState({ width: Math.max(50, helperWidth + 1) });
		}
	}

	makeAddedList() {
		
		const elements =  this.state.myItems.map((listitem, index) => (
			<li
				key={listitem.id}
				onClick={this.handleClick}
				data-item={listitem.id}
			>
				{listitem.content}
			</li>
		));
		return elements

	}

	render() {
		return (
			<div>

				<label htmlFor="value">
					Dynamic Inputfields!
				</label>
				<br />
				<br />Hit "Enter" to confirm, Click to remove
				<br />
				<br />
				{this.makeAddedList()}	
			    <input
					id="add"
					type="text"
					name="initvalue"
					autoComplete="off"
				    maxLength="70"
					onFocus={this.handleFocus}
					onChange={this.handleChange}
					onKeyPress={this.handleKeypress}
					onBlur={this.handleBlur}
					value={this.state.content_add}
					style={{ width: this.state.width }}
				/>

				<span id="helperspan" ref={el => (this.helperspan = el)}>
					{this.state.content_add}
				</span>

			</div>
		);
	}
}

export default UserPills;
