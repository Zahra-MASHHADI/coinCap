
import Style from "./style"
import React from "react"
import { useState } from "react"
import ShowInput from "./showInput"
import Language from "../language"
import Coin from "../coin"
import Setting from "../setting"

export default function Input(){
    return(
        <Style>
        <ul >
            <li>
                <Setting/>
            </li>
        <li>
              <ShowInput/>
            </li>
            <li className="showSelect">
                <Language/>
            </li>
            <li>
                <Coin/>
            </li>
        </ul>
        </Style>
    )
}