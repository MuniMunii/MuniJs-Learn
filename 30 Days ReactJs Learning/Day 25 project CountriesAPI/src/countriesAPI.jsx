import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import './assets/css/countriesAPI.css';
function useFetch(url){
    const [isLoading,setIsloading]=useState(false)
    const[DataAPI,setDataAPI]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            setIsloading(true)
            try{ 
            const response=await fetch(url)
            const data=await response.json()
            setDataAPI(data)
            setIsloading(false)
        }
            catch(error){
                console.log(error);
                
            }
        }
        fetchData()
    },[url])
    return {DataAPI,isLoading}
}
function CountriesAPI(){
    const countriesURL="https://restcountries.com/v3.1/all"
    const getData=useFetch(countriesURL)
    const isLoading=getData.isLoading?'Is loading...':
    console.log(getData.DataAPI);
    const CardCountries=getData.DataAPI.sort((a,b)=>b.name-a.name).map(countries=>{
        const nameCountry=countries.name.common
        const CAPITAL=countries.capital
        const LANGUAGES=countries.languages?Object.values(countries.languages).map(lang=>lang).join(', '):[]
        const POPULATION=countries.population
        const CURRENCIES=countries.currencies?Object.values(countries.currencies).map(curr=>curr.name):[]
        const FLAG=countries.flags.svg
        return (<>
        <div className="card" key={nameCountry}>
            <img src={FLAG}></img>
            <p>{nameCountry}</p>
            <p>Capital:{CAPITAL}</p>
            <p>Languages:{LANGUAGES}</p>
            <p>Population:{POPULATION}</p>
            <p>Currencies:{CURRENCIES}</p>
        </div>
        </>)
    })
    return (
    <>
    <div className="container">
        <div className="wrapper">
        {isLoading?isLoading:CardCountries}
        </div>
    </div>
    </>)
}
export default CountriesAPI