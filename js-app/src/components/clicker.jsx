import React, {Component} from 'react';
import './compStyles/_clicker.css'
import Popup from "reactjs-popup";

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
    //Продать клики
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
            <div className={"clicker"}>
                <div className={"container"}>
                    <div className={"tab"}>Клики:{this.state.clicks} <br/> Деньги:{this.state.money}</div>
                    <div className={"futter"}>
                        <div className={"buttonsSubs"}>
                            <div>Усилить клик за <br/> 1000</div>
                            <div>Копить клики</div>
                            <div>Продать 10 кликов</div>
                        </div>
                        <div className={"buttons"}>
                            <button className={"gainClicks"} onClick={this.gainClicks}>+1</button>
                            <button className={"getClicks"} onClick={this.increaseClicks}>+</button>
                            <button className={"getMoney"} onClick={this.get100Money}>+100</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

