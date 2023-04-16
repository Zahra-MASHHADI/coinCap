import { useEffect , useState } from "react"
import { useParams } from "react-router"
import instance from "../../Utis/reguest"
import { price } from "../../Utis/functions/price"
import { NumericFormat } from "react-number-format"
import { parseInt } from "lodash"
import { percentage } from "../../Utis/functions/perecntage"
import moment from "moment/moment"
import Style from "./style"
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip, Filler,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';

export default function Information({usedata}){
    const {symbol , name} = usedata
    const{id} = useParams()
    const [time , setTime] = useState(1680791100000)
    const[market , setMarket] = useState([])
    const[info , setInfo] = useState(false)
    const[interval , setInterval] = useState("m1")
    const LineColor = []
    const bgColor = []
    const img = 
    useEffect(
        function(){
            getApi()
        }
        , [interval]
    )
    async function getApi(){
        const response = await instance.get(`assets/${id}/history?interval=${interval}`)
        setMarket(response.data.data)
        setInfo(true)
    }
        const lowPrice =  market.map((item)=> item.priceUsd).reduce(
            function(total, current){
              return total < current ? total : current
            }
          , {})
          const highPrice =  market.map((item)=> (item.priceUsd)).reduce(
            function(total , current){
                return total > current ? total : current
          } , 0)
          
          const totalPrice = market.map((item)=>parseInt(item.priceUsd)).reduce((a , b)=>
           a+b
          , 0)
        const totalLength = market.length
        const averagePrice = totalPrice / (market.length)
        console.log(Number(totalPrice / 2))
        if(info === true){
            const lastChild = totalLength -1
            var changePercent = (parseInt(market[lastChild].priceUsd - market[0].priceUsd)) / parseInt(market[0].priceUsd)
        }   
        if(changePercent>=0){ 
          LineColor.push("rgb(24, 198, 131)")
          bgColor.push(" rgba(187, 249, 226, 0.326)")
        } 
          else {
            LineColor.push("rgb(250, 110, 110)")
            bgColor.push("rgba(250, 110, 110, 0.372)")
          }
        ChartJS.register(
            CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Filler,Legend
          );
          const labels = market.map(({time}) => fixTime(time) )
           const options = {
            responsive: true,
            
            elements: {
              point:{
                  radius:0
              }
          },
            legend:{
             display:false,
            },
            plugins: {
              legend: {
                position: 'top',
              },
            },
            scales:{
              x:{
                grid:{
                  display:false,
                  drawBorder: false,
                }
              },
             y:{

             }
            }
          };
const data = {
  labels,
  datasets: [
    {
      fill: true,
      data: market.map(({priceUsd}) => priceUsd),
      borderColor: LineColor ,
      backgroundColor: bgColor,
      borderWidth:3,
      circular:true,
      tickBorderDashOffset:100,
      tickBorderDash:100,
    },
  ],
};
    function fixTime(inputNum){
      if(interval === 'm1' || interval === 'm30' || interval === 'm15'){
       const hour = moment(inputNum).hour()
       if(hour>12){
        return (`${hour - 12}PM`)
       }else if(hour === 0){
        return (`12AM`)
       }else {
        return (`${hour}AM`)
       }
      }
      if(interval === 'h1' || interval === 'h12' || interval === 'h2'){
        return (moment(inputNum).format('MMM DD'))
      }
      if(interval === 'd1'){
        return moment(inputNum).format("MMM YYYY")
      }
    }
    
        return(
          <Style>
            <div className="container">
            <div className="infor">
              <div className="coinDetail">
                <img src={`https://assets.coincap.io/assets/icons/${symbol?.toLowerCase()}@2x.png`} />
                <span>
                  <p className="symbol">{name} ({symbol}) </p>
                  <p className="moment">{moment(time).format('DD MMMM YYYY')}</p> 
                </span>
              </div>
              <div>
                <p> <span className="title">HIGH </span>   <NumericFormat className="num" thousandSeparator="," decimalScale={2} decimalSeparator="." prefix="$" value={price(highPrice)} displayType="text" /></p> 
                <p><span className="title">LOW </span> <NumericFormat className="num" thousandSeparator="," decimalScale={2} decimalSeparator="." prefix="$" value={price(lowPrice)} displayType="text" /></p>
              </div>
              <div>
                <p><span className="title">AVERAGE  </span><NumericFormat className="num" thousandSeparator="," decimalScale={2} decimalSeparator="." prefix="$" value={price(averagePrice)} displayType="text" /></p>
                <span style={{color:changePercent <0 ? "rgb(250, 110, 110)" : "rgb(24, 198, 131)"  }}>
                <span className="title"> CHANGE  </span><span  className="num"> {percentage(changePercent)}%</span> 
                </span>
              </div>
            </div>
            <div className="chart">
            <Line options={options} data={data} layout="vertical" />
            <button onClick={()=>setInterval("m1")}>
              1D
            </button>
            <button onClick={()=>setInterval("m15")}>
              1W
            </button>
            <button onClick={()=>setInterval("h1")}>
              1M
            </button>
            <button onClick={()=>setInterval("h2")}>
              3M
            </button> 
            <button onClick={()=>setInterval("h12")}>
              6M
            </button>
            <button onClick={()=>setInterval("d1")}>
              1Y
            </button>
            </div>
            </div>
        </Style>
    )
}