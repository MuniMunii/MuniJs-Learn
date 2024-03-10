import React from "react";
import './assets/css/season.css'
class TimeApp extends React.Component{
    constructor(props){
        super(props)
        const Dates=new Date()
        this.state={
            time:Dates.getHours(),
            emote:Dates.getHours() < 12?"🌅":'🌃'
        }
        this.changeTime()
        this.changeTime=this.changeTime.bind(this)
    }
    componentDidMount(){
        const ONE_MINUTE=6000
        this.interval=setInterval(this.changeTime,ONE_MINUTE)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    changeTime(){
        const Dates=new Date()
        this.setState({
            time:Dates.getHours() < 12 ? 'AM':'PM',
            emote:Dates.getHours() < 12?"🌅":'🌃'
        })
    }
    render(){
        const Dates=new Date()
        const BodyElement=document.querySelector('body')
        BodyElement.setAttribute('class',this.state.time)
        return(
            <div className={this.state.time< 12 ? 'AM':'PM'}>
                <p>Right now is {Dates.getHours()}:{Dates.getMinutes()} {this.state.time<12?'AM':'PM'} {this.state.emote}</p>
            </div>
        )
    }
}
export default TimeApp