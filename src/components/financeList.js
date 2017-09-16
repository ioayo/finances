import React from 'react';
import FinanceItem from './financeItem';

class FinanceList extends React.Component {
    render() {
        return (
            <ul className="finances__list">
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
