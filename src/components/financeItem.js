import React from 'react';

class FinanceItem extends React.Component {
    render() {
        return (
            <li className="finances__item">
                <h3 className="person">{this.props.name}</h3>
                <p className="money-per-month">{this.props.money} руб/месяц</p>
                <ul className="goods__list">
                    <goodsItem />
                </ul>
            </li>
        )
    }
}

export default FinanceItem;