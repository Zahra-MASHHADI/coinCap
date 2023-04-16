import { Fragment , useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import instance from "../../../../../Utis/reguest";
export default function Search(){
    useEffect(
        function(){
            inputOnchange()
        }
        , [] )
    const[vis, setVis] = useState(false)
    const [searches , setSearches] = useState([])    
    function makeInput(event){
        setVis( current => !current)
        console.log("hello")
    }
    async function inputOnchange(e){
        const response = await instance.get("assets" )
        setSearches(response.data.data)
    }
    function renderFarm(){
        return searches.map(function(item){
            const{name,id,symbol} = item
            return(
                <>
                <option key={id}>
                    <p>
                        {id}
                    </p>
                    <p>
                        {symbol}
                    </p>
                    <p>
                        {name}
                    </p>
                </option>
                </>
            )
        })
    }
    return(
        <Fragment>
            <input  type="text" list="searching" className={`show ${vis ? 'see' : ' '}`} />
            <datalist id="searching">
                    {renderFarm()}
            </datalist>
            <div className="search" onClick ={()=> makeInput()}>
                <FontAwesomeIcon icon={faMagnifyingGlass}   />
            </div>
        </Fragment>
    )
}