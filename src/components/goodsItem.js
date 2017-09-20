import React from 'react';

class GoodsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
    
    updateCalculate(n) {
        const time = this.props.time, 
        goodPerSec = this.props.goodPerSec;
        return (time/1000 * this.props.goodPerSec).toFixed(n);
    }

    render() {
        return(
            <li className="goods__item">
                <div className="goods__img">
                    <img src={'/img/' + this.props.imgSrc + '.png'} alt={this.props.name} className="img-responsive" />
                </div>
                <div className="goods__text">
                  <span className='goods__name'>{this.props.name}</span>
                  <span className='goods__price'>Цена {this.props.price} руб.</span>
                  <span className='goods__calculate'>{this.updateCalculate(4)}</span>
                </div>
            </li>
        )

    }

}


export default GoodsItem;