import instance from "../../Utis/reguest"
import { useEffect, useState } from "react"
import Style from "./style"
import { price } from "../../Utis/functions/price"
import { formatCash } from "../../Utis/functions/formatCash"
import { percentage } from "../../Utis/functions/perecntage"
import { NumericFormat , PatternFormat } from "react-number-format"
import Market from "../market"
import { Link } from "react-router-dom"
import Loading from "../loading"

export default function Column(){
    useEffect(
        function(){
            assets()
        },[]
    )
    const [row , setRow] = useState([])
    const [ofset , setOfset] = useState(20)
    const [loading , setLoading] = useState(false)
    
    async function assets(){
        setLoading(false)
        const response = await instance.get("assets" ,  {params:{limit:20}})
        setRow(response.data.data)
        setLoading(true)
    }
    function render(){
        return row.map(function(item){
            const img = `https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`
         const {symbol , name , marketCapUsd , volumeUsd24Hr, changePercent24Hr, vwap24Hr , supply , priceUsd , rank , id} = item
            return(
                    <tr key={id}>
                         
                        <td>   
                            {rank}
                        </td>
                        <td>
                        <Link to={`assets/${id}`}>
                            <div className="image">
                            <img src={img} />
                            <div className="nameSymbol">
                                <p className="name">
                                    {name}
                                </p>
                                <p className="symbol">
                                    {symbol}
                                </p>
                            </div>
                            </div>
                            </Link>
                        </td>
                        <td>
                        <NumericFormat thousandSeparator="," decimalScale={2}   displayType="text" decimalSeparator="." prefix="$" value={price(priceUsd)} />
                        </td>
                        <td>
                            ${formatCash(marketCapUsd)}
                        </td>
                        <td>
                        <NumericFormat thousandSeparator="," decimalScale={2}   displayType="text" decimalSeparator="." prefix="$" value={price(vwap24Hr)} />
                        </td>
                        <td>
                            {formatCash(supply)}
                        </td>
                        <td>
                            ${formatCash(volumeUsd24Hr)}
                        </td>
                        <td style={{color: changePercent24Hr < 0 ? "red" : "green" }}>
                            {percentage (changePercent24Hr)}%  
                        </td>
                    </tr>
                    
            )
        })
    }
    async function showMore(n){
        setOfset(ofset+40)
        const more = await instance.get("/assets" , {params:{offset: ofset  , limit:40}})
        setRow(current=> [ ...current, ...more.data.data])
        console.log(more.data.data)
    }
    return(  
        <Style>
            {loading === false ? <Loading/> :
            <div className="container">
            <Market/>
                <table>
                    <thead>
                    <tr>
                        <th>
                        rank  	
                        </th>
                        <th>
                        Name	
                        </th>
                        <th className="split">
                        Price	
                        </th>
                        <th>
                        Market Cap	
                        </th>
                        <th>
                        VWAP (24Hr)
                        </th>
                        <th>
                        Supply
                        </th>
                        <th>
                        Volume (24Hr)	
                        </th>
                        <th>
                            Change (24Hr)
                        </th>
                    </tr>
                    </thead>
                <tbody>
                {render()}
                </tbody>
                </table>
                <div className="showMoreButton">
                <button onClick={showMore}>
                    View More
                </button>
                
                </div>
                    </div>
        }
            </Style>
    
    )
}