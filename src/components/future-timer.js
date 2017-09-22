import React from 'react';

class FutureTimer extends React.Component {
	constructor(props) {
		super(props);
}

	render() {
		return (
			<div className="set-days">
				<span>Вперед в будущее или прошлое!</span>
				<p>Установите время и узнайте за какое время вы заработаете себе на новенький айфон!</p>
				<form onSubmit={this.props.toTheFuture}>	
					<input onChange={this.props.handleChange} value={this.props.time.years ? parseInt(this.props.time.years, 10) : '' } type="number" name="years" min="1" placeholder="Годы" />
					<input onChange={this.props.handleChange} value={this.props.time.months ? parseInt(this.props.time.months, 10) : '' } type="number" name="months" min="1" max="12" placeholder="Месяцы"/>
					<input onChange={this.props.handleChange} value={this.props.time.days ? parseInt(this.props.time.days, 10) : '' } type="number" name="days" min="1" max="31" placeholder="Дни" />
					<input onChange={this.props.handleChange} value={this.props.time.hours ? parseInt(this.props.time.hours, 10) : '' } type="number" name="hours" min="1" max="24" placeholder="Часы"/>
					<input onChange={this.props.handleChange} value={this.props.time.minutes ? parseInt(this.props.time.minutes, 10) : '' } type="number" name="minutes" min="1" max="60" placeholder="Минуты"/>
					<button type="submit">Го!</button>
				</form>
			</div>
		)
	}
}


export default FutureTimer;