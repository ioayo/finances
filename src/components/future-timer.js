import React from 'react';

class FutureTimer extends React.Component {
	render() {
		return (
			<div className="set-days">
				<span>{this.props.title}</span>
				<p>{this.props.descr}</p>
				<form onSubmit={this.props.toTheFuture}>	
					<input onChange={this.props.handleChange} 
								 value={this.props.time.years} 
								 type="number" name="years" min="1" placeholder="Годы" />
					<input onChange={this.props.handleChange} 
								 value={this.props.time.months} 
								 type="number" name="months" min="1" max="12" placeholder="Месяцы"/>
					<input onChange={this.props.handleChange} 
								 value={this.props.time.days} 
								 type="number" name="days" min="1" max="31" placeholder="Дни" />
					<input onChange={this.props.handleChange} 
								 value={this.props.time.hours} 
								 type="number" name="hours" min="1" max="24" placeholder="Часы"/>
					<input onChange={this.props.handleChange} 
								 value={this.props.time.minutes} 
								 type="number" name="minutes" min="1" max="60" placeholder="Минуты"/>
					<button type="submit">Го!</button>
				</form>
			</div>
		)
	}
}


export default FutureTimer;