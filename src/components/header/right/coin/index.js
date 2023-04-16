import axios from "axios"
import { useEffect, useState } from "react"
import instance from "../../../../Utis/reguest"
export default function Coin(){
    useEffect(function(){
        symbolCoin()
    }, [])
    const [coins , setCoins] = useState([])
    async function symbolCoin(){
        const response = await instance.get("assets")
        setCoins(response.data.data)
    }
    function renderFarm(){
        return coins.map(function(item){
            const {id , symbol} = item
            return(
                <option key={id}>
                    {symbol}
                </option>
            )
        })
    }
    return(
        <div className="selectCoin">
            <input placeholder="USD" type="text" list="coin" />
                <datalist id="coin">
                        {renderFarm()}
                    </datalist>
                </div>
    )
}