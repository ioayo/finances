import React from 'react';
import FinanceItem from './financeItem';

class FinanceList extends React.Component {
    getUniqId() {
        return Date.now()
    }
    render() {
        return (
            <ul className="finances__list">
                {this.props.persons.map((person, index)=>{
                    return (
                        <FinanceItem key={index} name={person.name} money={person.money} goods={this.props.goods} seconds={this.props.seconds}/>
                    )
                })}
            </ul>
        )
    }
}

export default FinanceList
