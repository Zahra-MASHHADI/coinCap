import { percentage } from "../../Utis/functions/perecntage"
import { price } from "../../Utis/functions/price"
import { NumericFormat } from "react-number-format"
import { formatCash } from "../../Utis/functions/formatCash"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
export default function Detail({usedata}){
    const[info , setInfo] = useState(false)
    const {name , rank , symbol , vwap24Hr , priceUsd , marketCapUsd , volumeUsd24Hr , supply , changePercent24Hr} = usedata
    return(
        <div className="container">
        <ul className="detail">
        <li className="rank">
            <div className="top"></div>
            <div>
            <span>{rank}</span>
            <p> RANK </p>
            </div>
            
        </li>
        <li className="id">
            <span> {name} ({symbol})</span>
            <div>
            <span><NumericFormat thousandSeparator="," decimalScale={2}   displayType="text" decimalSeparator="." prefix="$" value={price(priceUsd)} /> </span>
            <span className="percentage" style = {{color:changePercent24Hr <0 ? "rgb(250, 110, 110)" : "rgb(24, 198, 131)"}}>
                {percentage(changePercent24Hr)}% 
                 {(()=> {
                    if(changePercent24Hr > 0){
                        return(
                             <FontAwesomeIcon icon={faCaretUp}/>
                        )
                    }
                    else{
                        return(
                            <FontAwesomeIcon icon={faCaretDown}/>
                        )
                    }
                }) ()} 
                </span>
            </div>
        </li>
        <li className="numeric">
            <span>Market Cap </span>
            <p> ${formatCash( marketCapUsd)}</p>
            <button>Website</button>
        </li>
        <li className="numeric">
            <span>Volume (24Hr) </span>
            <p>  ${formatCash(volumeUsd24Hr)}</p>
            <button>Explorer</button>
        </li>
        <li className="numeric">
            <span>supply </span>
            <p>
            {formatCash(supply)} {symbol}
            </p>
        </li>
        </ul>
        </div>
    )
}