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
    changeTime(){
        const Dates=new Date()
        this.state.time=Dates.getHours() < 12 ? 'AM':'PM'
    }
    render(){
        const Dates=new Date()
        const BodyElement=document.querySelector('body')
        BodyElement.setAttribute('class',this.state.time)
        return(
            <div className={this.state.time}>
                <p>Right now is {Dates.getHours()}:{Dates.getMinutes()} {this.state.time} {this.state.emote}</p>
            </div>
        )
    }
}
export default TimeApp