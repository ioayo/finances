import React from 'react';

class FinanceItem extends React.Component {
    render() {
        return (
            <li className="finances-item">
                <span>{this.props.name}</span>
                <span>{this.props.money}</span>
            </li>
        )
    }
}
class FinanceList extends React.Component {
    render() {
        return (
            <ul className="finances-list">
                <h2>title 2</h2>
                {this.props.persons.map((person)=>{
                    return (
                        <FinanceItem name={person.name} money={person.money}/>
                    )
                })}
            </ul>
        )
    }
}

export default FinanceList
