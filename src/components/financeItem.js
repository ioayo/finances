import React from 'react';
import GoodsItem from './goodsItem';
import { calculate } from './helpers';

class FinanceItem extends React.Component {
    render() {
        return (
            <li className="finances__item">
                <h3 className="person">{this.props.name}</h3>
                <p className="money-per-month">Зарплата: {this.props.money} руб/месяц</p>
                <ul className="goods__list">
                    {this.props.goods.map((good, index)=>{
                        return (
                            <GoodsItem time={this.props.time} 
                                       key={index} 
                                       imgSrc={good.imgSrc} 
                                       name={good.name} 
                                       price={good.price} 
                                       goodPerSec={calculate(good.price, this.props.money)}/>
                        )
                    })}
                </ul>
            </li>
        )
    }
}

export default FinanceItem;