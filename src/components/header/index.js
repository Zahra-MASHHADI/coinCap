import { Fragment } from "react";
import Input from "./right/input";
import Logo from "./logo";
import Left from "./left";
import Style from "./style";
import TopHeader from "./top";

export default function Header(){
    return(
        <Style>
            <TopHeader/>
        <div className="header">
            <Left/>
            <Logo/>
            <Input/>
        </div>
        </Style>
    )
}