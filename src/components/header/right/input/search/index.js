import { Fragment , useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import instance from "../../../../../Utis/reguest";
import { Link } from "react-router-dom";
import { useRef } from "react";
export default function Search(){
    
    const[vis, setVis] = useState(false)
    const [searches , setSearches] = useState([]) 
    useEffect(
        function(){
            inputOnchange()
        }
        , [searches] )  
    function makeInput(event){
        setVis(!vis)
        console.log("hello")
    }
    async function inputOnchange(e){
        const response = await instance.get(`assets` , {params:{search : e?.target.value}})
        setSearches(response.data.data)
    }
    function renderFarm(){
        return searches.map(function(item){
            const{name,id,symbol} = item
            return(
                <li key={id}>
                    <Link to={`assets/${id}`}>
                        {id}({symbol})
                    </Link>
                </li>
               
            )
        })
    }
    return(
        <Fragment>
            <input onChange={inputOnchange} type="text" list="searching" className={`show ${vis ? 'see' : ' '}`}  />
            {vis ? 
            <ul id="searching">
                    {renderFarm()}
            </ul>
            :
            <>
            </>
            }
            
            <div className="search" onClick ={()=> makeInput()}>
                <FontAwesomeIcon icon={faMagnifyingGlass}   />
            </div>
        </Fragment>
    )
}