import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import './assets/css/catsAPI.css';
function CatsAPI(){
    const [catsData,setCatsData]=useState([])
    useEffect(()=>{
        const URL_CAT_API='https://api.thecatapi.com/v1/breeds'
        axios
        .get(URL_CAT_API)
        .then((response)=>{
            setCatsData(response.data)
        })
        .catch((error)=>{
            console.log(error);
            
        })
    },[])
    console.log(catsData);
    const catsMetricWeight=catsData.map(cat=>{
        const catWeight=cat.weight.metric.split('-').map(Number)
        return catWeight.reduce((a,b)=>a+b,0)/catWeight.length
    })
    const catsLifeSpanAverage=catsData.map(cat=>{
        const catLifeSpan=cat.life_span.split('-').map(Number)
        return catLifeSpan.reduce((a,b)=>a+b,0)/catLifeSpan.length
    })
    const CATS_LENGTH=catsData.length
    const AVERAGE_LIFESPAN=parseFloat(catsLifeSpanAverage.reduce((a,b)=>a+b,0)/catsLifeSpanAverage.length).toFixed(2)
    const AVERAGE_WEIGHT=parseFloat(catsMetricWeight.reduce((a,b)=>a+b,0)/catsMetricWeight.length).toFixed(2)
    return (
        <>
        <div className="container">
            <h1>30 days React</h1>
            <p>There are {CATS_LENGTH} Cats breed </p>
            <p>On Average cats can weight <span className="circle">{AVERAGE_WEIGHT}</span> and Average live <span className="circle">{AVERAGE_LIFESPAN}</span></p>
        </div>
        </>
    )
}
export default CatsAPI