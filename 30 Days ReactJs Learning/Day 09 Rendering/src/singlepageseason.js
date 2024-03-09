import React from "react";
import './assets/css/season.css'
class SeasonPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            season:null,
            emote:null
        }
        this.ChangeSeason()
        this.ChangeSeason=this.ChangeSeason.bind(this)
        
    }
    ChangeSeason(){
        const Dates=new Date()
        const months=Dates.getMonth()
        switch (months) {
            case 11:
            case 0:
            case 1:
                this.state.season='winter'
                this.state.emote='⛄'
                break;
            case 2:
            case 3:
            case 4:
                this.state.season='spring'
                this.state.emote='🍃'
                break;
            case 5:
            case 6:
            case 7:
                this.state.season='summer'
                this.state.emote='🌞'
                break;
            case 8:
            case 9:
            case 10:
                this.state.season='autumn'
                this.state.emote='🍂'
                break;
            default:
                break;
        }
    }
    render(){
        const BodyElement=document.querySelector('body')
        BodyElement.setAttribute('class',this.state.season)
        return (
            <div>
                <div>
                    <h1><span className={this.state.season}>Right Now is</span> {this.state.season}{this.state.emote}</h1>
                </div>
            </div>
        )
    }
}
export default SeasonPage