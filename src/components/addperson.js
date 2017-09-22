import React from 'react';

class AddPerson extends React.Component {
	constructor(props) {
		super(props);
		this.onPersonChange = this.onPersonChange.bind(this);
		this.state = {
			name: '',
			money: 0
		};
	}


	onPersonChange(e) {
		let key = e.target.name;
		let newState = this.state;
		newState[key] = e.target.value
		this.setState(newState);
	}

	render() {
		return (
			<div className="add-person">
				<p>{this.props.title}</p>
				<form onSubmit={(e) => {
					e.preventDefault();
					this.props.addPerson(this.state);
					this.setState({
						money: 0,
						name: ''
					})
				}}> 
					<input value={this.state.name} onChange={this.onPersonChange} name="name" type="text" placeholder="Имя" />
					<input value={this.state.money} onChange={this.onPersonChange} name="money" type="number" />
					<button type="submit">Добавить</button>
				</form>
			</div>
		)
	}

}

export default AddPerson;