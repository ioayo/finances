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
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             currentCount: 0,
//             goodsPerSecond: calculate(this.props.goodsPrice, this.props.monthlyIncoming)
//         }
//     }
    
//     timer() {
//         this.setState({
//             currentCount: this.state.currentCount + 1
//         })
//         // if (this.state.currentCount > 10) clearInterval(this.intervalId);
//     }

//     componentDidMount() {
//         this.intervalId = setInterval(this.timer.bind(this), 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.intervalId);
//     }

//     render() {
//         return (
//             <div>
//                 <h1>OKKKK</h1>
//                 <FinanceList persons={PERSONS} />
//             </div>
//         );
//   }
// }