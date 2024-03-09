import React, { useEffect, useState } from "react";
import { Await } from "react-router-dom";
import './assets/css/world.css'
class RandomWorld extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            countryData:[],
            index:0
        }
        this.ChangeIndex=this.ChangeIndex.bind(this)
    }
    ChangeIndex(){
        const RandomNumber=Math.floor(Math.random()*this.state.countryData.length)
        this.setState({index:RandomNumber})
    }
    async componentDidMount(){
        const web= 'https://restcountries.com/v3.1/all'
        try{ 
        const Responses= await fetch(web)
        const Data= await Responses.json()
        const countries=Data.map(country=>({
            img:country.flags?Object.values(country.flags.svg).join(''):[],
            name:country.name?Object.values(country.name.common).join(''):[],
            languages:country.languages?Object.values(country.languages).map(lang=>lang):[],
            capital:country.capital,
            currencies:country.currencies?Object.values(country.currencies).map(curr=>curr.name):[],
            population:country.population
        }))
        this.setState({countryData:countries})
    }catch(err){
        console.log(err);
    }
    }
    render(){
        console.log(this.state.countryData);
        const Contoh=this.state.countryData.map(country=><h1>{country.name}</h1>)
        const RandomWorld=this.state.countryData[this.state.index]
        return (
            <div className="world">
                {RandomWorld&&(
                    <div className="container">
                        <img className="img-country" src={RandomWorld.img}></img>
                        <h1 className="country-label">{RandomWorld.name}</h1>
                        <h3 className="text-country">Capital: {RandomWorld.capital}</h3>
                        <h3 className="text-country">Currencies: {RandomWorld.currencies.join(', ')}</h3>
                        <h3 className="text-country">languages: {RandomWorld.languages.join(', ')}</h3>
                        <h3 className="text-country">Population: {RandomWorld.population}</h3>
                        <button className="button-world"onClick={this.ChangeIndex}>Change Country</button>
                    </div>
                )}
            </div>
        )
    }
}
export default RandomWorld