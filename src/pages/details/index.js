import { useState } from "react"
import { useEffect ,} from "react"
import { useParams } from "react-router"
import Layout from "../../components/layOut"
import instance from "../../Utis/reguest"
import Style from "./style"

import Information from "../../components/info"
import Detail from "../../components/detail"
import Swapbox from "../../components/swapBox"
import MarketId from "../../components/markeiId"
export default function Details(){
    useEffect(function(){
        pageDetails()
    } ,[])
    const {id} = useParams()
    const [usedata , setUsedata] = useState([])
    const {name , rank , symbol , vwap24Hr , priceUsd , marketCapUsd , volumeUsd24Hr , supply , changePercent24Hr} = usedata
    async function pageDetails(){
        const response = await instance.get(`assets/${id}`)
        setUsedata(response.data.data)
        console.log(response.data.data)
    }

 
    return(
        <Layout>
            <Style>
                <Detail usedata={usedata} />
                <div className="background">
                    <div className="container flex ">
                    <Information usedata={usedata}/>
                    <Swapbox />
                    </div>
                </div>
                <div className="container">
                    <MarketId/>
                </div>
                </Style>
        </Layout>
           
    )
}