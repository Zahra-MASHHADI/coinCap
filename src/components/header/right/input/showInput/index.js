import { useState } from "react"
import Search from "../search"
import Sstyle from "./style"
export default function ShowInput(){
 
    return(
        <Sstyle>
            <div className="makeInput" >
                <Search ></Search>
            </div> 
        </Sstyle> 
    )
}