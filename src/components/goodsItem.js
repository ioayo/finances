import React from 'react';

class GoodsItem extends React.Component {
    constructor(props) {
        super(props);
        this.goodsPerSecCalculate = this.goodsPerSecCalculate.bind(this);
        this.state = {
            goodPerSec: props.goodPerSec,
        }
    }

    goodsPerSecCalculate(props) {
        this.setState({
            goodPerSec: this.state.goodPerSec + this.props.goodPerSec
        })
    }
    componentDidMount() {
        setInterval(this.goodsPerSecCalculate, 1000)
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
                  <span className='goods__calculate'>{this.state.goodPerSec.toFixed(4)}</span>
                </div>
            </li>
        )

    }

}


export default GoodsItem;