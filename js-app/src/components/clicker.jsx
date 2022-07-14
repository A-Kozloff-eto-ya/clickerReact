import React, {Component} from 'react';
import './compStyles/_clicker.css'

export default class Clicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            gain: 1,
            money: 1000
        }
        this.increaseClicks = this.increaseClicks.bind(this)
        this.gainClicks = this.gainClicks.bind(this)
        this.get100Money = this.get100Money.bind(this)
    }

    // Копить клики
    increaseClicks() {
        this.setState((prevClicks) => ({clicks: prevClicks.clicks + this.state.gain}));
    }

    // Усилить клик
    gainClicks() {
        if (this.state.money < 1000) return alert("У тебя нет такой суммы");
        this.setState((prevGain) => ({gain: prevGain.gain + 1}));
        this.setState((prevMoney) => ({money: prevMoney.money - 1000}))
    }

    get100Money() {

        if (this.state.clicks >= 10) {
            this.setState((prevMoney) => ({money: prevMoney.money + 100}))
            this.setState((prevClicks) => ({clicks: prevClicks.clicks - 10}));
        } else {
            return alert("КЛИКАЙ БОЛЬШЕ!!!")
        }

    }

    render() {
        return (
            <div className={'container'}>
                <div>Клики:{this.state.clicks} <br/> Деньги:{this.state.money}</div>
                <button className={"getClicks"} onClick={this.increaseClicks}>Копить клики</button>
                <button className={"gainClicks"} onClick={this.gainClicks}>Усилить клик за 1000</button>
                <button className={"getMoney"} onClick={this.get100Money}>Продать 10 кликов за 100</button>
            </div>
        );
    }
};

