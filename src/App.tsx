
import React, { useEffect, useState, useRef } from "react";
import { Block } from "./Block/Block";
import data from './data/valutecourse.json'
import  './index.scss'

export default function App(){
    const [fromCurrency, setFromCurrency] = useState('RUB')
    const [toCurrency, setToCurrency] = useState('USD')
    const [fromPrice, setFromPrice] = useState<number>(0)
    // const [toPrice, setToPrice] = useState(0)
    const [toPrice, setToPrice] = useState<number>(1)
    // const [rates, setRates] = useState<any>({})
    const ratesRef = useRef<any>({})
    useEffect(()=>{
        data.map((data: any)=>{
            // setRates(data.rates)
            ratesRef.current = data.rates
            // console.log(data.rates)        
        })
        onChangeToPrice(1)
    }, [])
    // )))
        // fetch('https://cdn.cur.su/api/latest.json')
        // fetch('https://www.cbr-xml-daily.ru/daily_json.js') //Values
            // .then((res)=>res.json())
            // .then((json) => {setRates(json.Valute)
            // console.log(json.Valute)
    // })
    // .catch((err) => {
    //      console.warn(err)
    // })}, [])

    const onChangeFromPrice = (value: number) => {
        const price = value / ratesRef.current[fromCurrency]
        const result = price * ratesRef.current[toCurrency]
        setToPrice(parseFloat(result.toFixed(3)))
        setFromPrice(value)
    }

    const onChangeToPrice = (value: number) => {
        const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value
        setFromPrice(parseFloat(result.toFixed(3)))
        setToPrice(value)
    }

    useEffect(()=>{
        onChangeFromPrice(fromPrice)
    }, [fromCurrency])

    useEffect(()=>{
        onChangeToPrice(toPrice)
    }, [toCurrency])

    // const onChangeFromCurrency = (cur: any) =>{
    //     setFromCurrency(cur)
    //     onChangeFromPrice(fromPrice)
    // }

    return(
        <div className="App">
            <Block 
                value={fromPrice} 
                currency={fromCurrency} 
                onChangeCurrency={setFromCurrency}
                onChangeValue={onChangeFromPrice}
            />
            <Block 
                value={toPrice} 
                currency={toCurrency} 
                onChangeCurrency={setToCurrency} 
                onChangeValue={onChangeToPrice}
            />
        </div>
    )
    
 }