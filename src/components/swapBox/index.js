import { faChevronDown, faGear, faShuffle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./style";

export default function Swapbox(){
    return(
        <Style>
            <ul>
                <li className="swap">
                    <span> Swap </span>
                    <span> <FontAwesomeIcon icon={faGear}/> </span>
                </li>
                <li className="input flex">
                    <label> You Sell </label>
                    <input placeholder="0" ></input>
                    <span className="flex icon"> 
                        <img src={`https://assets.coincap.io/assets/icons/eth@2x.png`} />
                        <p> ETH </p>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faShuffle} className="font"/>
                </li>
                <li className="input">
                    <label> You Get</label>
                    <input placeholder="0" ></input>
                    <span className="flex icon"> 
                        <p> Select a token </p>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </li>
                <li>
                    <button>
                        Connect Wallet
                    </button>
                </li>
            </ul>
        </Style>
    )
}