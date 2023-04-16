import { useEffect, useState } from "react"
import instance from "../../Utis/reguest"
import { useParams } from "react-router"
import { formatCash } from "../../Utis/functions/formatCash"
import { NumericFormat } from "react-number-format"
import { price } from "../../Utis/functions/price"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faCircleDot, faDotCircle } from "@fortawesome/free-regular-svg-icons"
import { faAnchorCircleCheck, faCab, faCircleChevronUp } from "@fortawesome/free-solid-svg-icons"
import { percentage } from "../../Utis/functions/perecntage"
import Style from "./style"

export default function MarketId(){
    useEffect(
      function(){getApi()}
    , [])
    const {id} = useParams()
    const [market , setMarket] = useState([])
    const[ofset , setOfset] = useState(20)
    async function getApi(){
        const response = await instance.get(`assets/${id}/markets` , {params: {limit:20}})
       
        setMarket(response.data.data)
    } 
    function renderFarm(){
         return market.map((item)=>{
            const {baseSymbol ,quoteId ,exchangeId , priceUsd ,quoteSymbol,volumePercent,volumeUsd24Hr} = item
            
            return(
                <tr key={priceUsd}>
                    <td>
                        {exchangeId}
                    </td>
                    <td>
                        {baseSymbol} / {quoteSymbol}
                    </td>
                    <td>
                        <NumericFormat value={price( priceUsd)} thousandSeparator="," decimalSeparator="." displayType="text" decimalScale={2} prefix="$" />
                    </td>
                    <td>
                        <NumericFormat value={volumeUsd24Hr} displayType="text" thousandSeparator="," decimalScale={0} decimalSeparator="." prefix="$" />
                    </td>
                    <td>
                       {percentage( volumePercent)}%
                    </td>
                    <td>
                        <FontAwesomeIcon icon={faCircle} />
                    </td>
                </tr>
            )
        })
    }
   async function showMore(){
    setOfset(ofset+40)
       const response = await instance.get(`assets/${id}/markets` , {params:{limit:40 , offset:ofset}} )
       console.log(response.data.data)
       setMarket(current=> [...current , ...response.data.data])
    }
    return(
        <Style>
        <table>
            <thead>
            <tr >
                <th>
                Exchange
                </th>
                <th>
                Pair			
                </th>
                <th>
                Price
                </th>
                <th>
                Volume (24Hr)
                </th>
                <th>
                Volume (%)
                </th>
                <th>
                Status
                </th>
            </tr>
            </thead>
            <tbody>
            {renderFarm()}
            </tbody>
        </table>
        <button onClick={()=> showMore()}> View More </button>
        </Style>
    )
}